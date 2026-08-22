from django.contrib import admin

from .models import ContactMessage


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("full_name", "email", "phone", "subject", "is_read", "created_at")
    list_filter = ("subject", "is_read", "created_at")
    search_fields = ("full_name", "email", "phone", "message")
    readonly_fields = ("created_at",)
    list_editable = ("is_read",)
    ordering = ("-created_at",)
