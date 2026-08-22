from rest_framework import serializers

from .models import Project


class ProjectSerializer(serializers.ModelSerializer):
    # فرانت‌اند id رو به‌صورت string انتظار داره (interface Project { id: string })
    id = serializers.CharField(read_only=True)
    image = serializers.SerializerMethodField()
    swapFooter = serializers.BooleanField(source="swap_footer")

    class Meta:
        model = Project
        fields = ["id", "title", "category", "image", "href", "swapFooter"]

    def get_image(self, obj):
        if not obj.image:
            return ""
        request = self.context.get("request")
        url = obj.image.url
        return request.build_absolute_uri(url) if request else url
