from django.db import models


class ContactMessage(models.Model):
    """
    هر پیامی که از فرم تماسِ سایت (بخش Footer) ارسال می‌شه، یک رکورد از این
    مدل ساخته می‌شه. فیلدها دقیقاً معادل همون چیزیه که فرانت‌اند می‌فرسته:
    { fullName, email, phone, subject, message }
    """

    SUBJECT_CHOICES = [
        ("website-design", "طراحی وب‌سایت"),
        ("web-app", "توسعه وب‌اپلیکیشن"),
        ("ai-telegram-bot", "هوش مصنوعی و ربات تلگرام"),
        ("ui-ux", "طراحی رابط کاربری/تجربه کاربری"),
        ("support", "پشتیبانی سایت"),
        ("other", "سایر"),
    ]

    full_name = models.CharField("نام و نام خانوادگی", max_length=150)
    email = models.EmailField("ایمیل")
    phone = models.CharField("شماره تلفن", max_length=11)
    subject = models.CharField("موضوع", max_length=30, choices=SUBJECT_CHOICES)
    message = models.TextField("پیام")

    is_read = models.BooleanField("خوانده شده", default=False)
    created_at = models.DateTimeField("تاریخ ارسال", auto_now_add=True)

    class Meta:
        verbose_name = "پیام تماس"
        verbose_name_plural = "پیام‌های تماس"
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.full_name} - {self.get_subject_display()} ({self.created_at:%Y-%m-%d})"
