from django.db import models

class ProjectRequest(models.Model):
    name = models.CharField(max_length=100, verbose_name="نام و نام خانوادگی")
    email = models.EmailField(verbose_name="ایمیل")
    phone = models.CharField(max_length=20, blank=True, null=True, verbose_name="شماره تماس")
    description = models.TextField(verbose_name="توضیحات پروژه")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="تاریخ ثبت")

    class Meta:
        verbose_name = "درخواست شروع پروژه"
        verbose_name_plural = "درخواست‌های شروع پروژه"

    def __str__(self):
        return f"{self.name} - {self.email}"