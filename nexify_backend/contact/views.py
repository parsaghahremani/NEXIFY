import logging

from django.conf import settings
from django.core.mail import send_mail
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import ContactMessage
from .serializers import ContactMessageSerializer

logger = logging.getLogger(__name__)


class ContactMessageCreateView(APIView):
    """
    POST /api/contact/

    این view دقیقاً همون endpoint ایه که فرانت‌اند (Footer.tsx) بهش fetch
    می‌زنه. پیام رو در دیتابیس ذخیره می‌کنه و بعد یک ایمیل اطلاع‌رسانی
    (به CONTACT_NOTIFICATION_EMAIL) می‌فرسته.

    اگه ارسال ایمیل به هر دلیلی (تنظیمات SMTP، قطعی شبکه و ...) با خطا مواجه
    بشه، خود درخواست همچنان موفق (201) برمی‌گرده - چون ذخیره‌شدن پیام در
    دیتابیس از ارسال ایمیل مهم‌تره و کاربر نباید بابت مشکل ایمیل سرور، خطا ببینه.
    """

    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        contact_message = serializer.save()

        self._send_notification_email(contact_message)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def _send_notification_email(self, contact_message: ContactMessage) -> None:
        subject = f"پیام جدید از سایت نکسیفای: {contact_message.get_subject_display()}"
        body = (
            f"نام: {contact_message.full_name}\n"
            f"ایمیل: {contact_message.email}\n"
            f"تلفن: {contact_message.phone}\n"
            f"موضوع: {contact_message.get_subject_display()}\n\n"
            f"پیام:\n{contact_message.message}"
        )
        try:
            send_mail(
                subject=subject,
                message=body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.CONTACT_NOTIFICATION_EMAIL],
                fail_silently=False,
            )
        except Exception:
            logger.exception("Failed to send contact notification email for message id=%s", contact_message.id)
