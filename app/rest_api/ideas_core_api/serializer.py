from rest_framework import serializers
from .models import BaseIdea

class IdeaSerializer(serializers.ModelSerializer):
    class Meta:
        model = BaseIdea
        fields = '__all__'