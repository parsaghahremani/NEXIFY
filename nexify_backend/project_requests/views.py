from rest_framework import generics
from .models import ProjectRequest
from .serializers import ProjectRequestSerializer

# این کلاس فقط درخواست‌های ثبت فرم (POST) را مدیریت می‌کند
class ProjectRequestCreateView(generics.CreateAPIView):
    queryset = ProjectRequest.objects.all()
    serializer_class = ProjectRequestSerializer