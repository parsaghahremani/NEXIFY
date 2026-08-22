from rest_framework import generics

from .models import Project
from .serializers import ProjectSerializer


class ProjectListView(generics.ListAPIView):
    """
    GET /api/projects/
    GET /api/projects/?category=UI/UX Design

    لیست پروژه‌های منتشرشده رو برمی‌گردونه - دقیقاً همون شکلی که فرانت‌اند
    (FeaturedProjects.tsx) قبلاً به‌صورت هاردکد داشت. فیلتر دسته‌بندی هم
    اختیاریه؛ چون فرانت‌اند فعلاً فیلتر رو خودش سمت کلاینت انجام می‌ده،
    ولی این query param برای استفاده‌های بعدی (مثلاً صفحه‌بندی سمت سرور) آماده‌ست.
    """

    serializer_class = ProjectSerializer

    def get_queryset(self):
        queryset = Project.objects.filter(is_published=True)
        category = self.request.query_params.get("category")
        if category:
            queryset = queryset.filter(category=category)
        return queryset
