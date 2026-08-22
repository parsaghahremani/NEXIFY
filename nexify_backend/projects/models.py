from django.db import models


class Project(models.Model):
    """
    معادل دیتابیسی همون آرایه‌ی هاردکدشده‌ی `projects` که قبلاً داخل
    FeaturedProjects.tsx بود. دسته‌بندی‌ها دقیقاً همون گزینه‌های فیلتر تو
    فرانت‌اند هستن (به جز "All" که فقط یک فیلتر نمایشیه، نه یک دسته‌ی واقعی).
    """

    CATEGORY_CHOICES = [
        ("Websites", "Websites"),
        ("UI/UX Design", "UI/UX Design"),
        ("AI  & Telegram bots", "AI & Telegram bots"),
        ("Content Production", "Content Production"),
    ]

    title = models.CharField("عنوان پروژه", max_length=200)
    category = models.CharField("دسته‌بندی", max_length=30, choices=CATEGORY_CHOICES)
    image = models.ImageField("تصویر", upload_to="projects/", blank=True, null=True)
    href = models.URLField("لینک پروژه", blank=True, default="#")

    # فقط برای رعایت جلوه‌ی بصری اصلی: در باکس سمت راستیِ گرید، متن و دکمه
    # جابه‌جا نمایش داده می‌شن (swapFooter در فرانت‌اند)
    swap_footer = models.BooleanField("جابه‌جایی فوتر (swapFooter)", default=False)

    order = models.PositiveIntegerField("ترتیب نمایش", default=0)
    is_published = models.BooleanField("منتشر شده", default=True)
    created_at = models.DateTimeField("تاریخ ایجاد", auto_now_add=True)

    class Meta:
        verbose_name = "پروژه"
        verbose_name_plural = "پروژه‌ها"
        ordering = ["order", "-created_at"]

    def __str__(self):
        return self.title
