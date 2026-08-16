from django.contrib import admin

from .models import Project


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "order", "is_published", "created_at")
    list_filter = ("category", "is_published")
    search_fields = ("title",)
    list_editable = ("order", "is_published")
    ordering = ("order", "-created_at")
