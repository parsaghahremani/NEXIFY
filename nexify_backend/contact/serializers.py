import re

from rest_framework import serializers

from .models import ContactMessage

PHONE_REGEX = re.compile(r"^09\d{9}$")


class ContactMessageSerializer(serializers.ModelSerializer):
    """
    نام فیلدها عمداً camelCase گذاشته شده (fullName به‌جای full_name) چون
    فرانت‌اند دقیقاً همین شکل رو می‌فرسته. با source= به فیلد واقعی مدل
    (snake_case) وصل می‌شن.

    قوانین اعتبارسنجی هم دقیقاً معادل چیزیه که سمت کلاینت (Footer.tsx) چک
    می‌شه، چون طبق اصل درست، اعتبارسنجی سمت کلاینت هیچ‌وقت به‌تنهایی کافی نیست.
    """

    fullName = serializers.CharField(source="full_name", min_length=3, max_length=150)
    phone = serializers.CharField(max_length=11)
    message = serializers.CharField(min_length=10)

    class Meta:
        model = ContactMessage
        fields = ["id", "fullName", "email", "phone", "subject", "message", "created_at"]
        read_only_fields = ["id", "created_at"]

    def validate_phone(self, value):
        if not PHONE_REGEX.match(value):
            raise serializers.ValidationError("شماره تلفن را به‌صورت صحیح وارد کنید (مثل 09123456789)")
        return value

    def validate_fullName(self, value):
        if not value.strip():
            raise serializers.ValidationError("لطفاً نام و نام خانوادگی خود را وارد کنید")
        return value.strip()

    def validate_message(self, value):
        if not value.strip():
            raise serializers.ValidationError("لطفاً توضیحات پروژه را وارد کنید")
        return value.strip()
