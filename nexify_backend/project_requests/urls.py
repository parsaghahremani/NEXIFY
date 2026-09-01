from django.urls import path
from .views import ProjectRequestCreateView

urlpatterns = [
    path('', ProjectRequestCreateView.as_view(), name='project-request-create'),
]