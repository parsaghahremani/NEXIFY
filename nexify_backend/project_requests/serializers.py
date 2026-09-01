from rest_framework import serializers
from .models import ProjectRequest

class ProjectRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectRequest
        fields = ['id', 'name', 'email', 'phone', 'description', 'created_at']