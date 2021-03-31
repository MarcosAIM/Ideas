from rest_framework import serializers
from .models import BaseIdea

class IdeaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BaseIdea
        fields = ['id','title','description', 'creator_profile']
