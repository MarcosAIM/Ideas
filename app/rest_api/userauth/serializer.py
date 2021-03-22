from rest_framework import serializers
from .models import Thinker

class ThinkerSerializer(serializers.HyperlinkedModelSerializer):
    ideas = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Thinker
        fields = ['id','username','email', 'date_of_birth','ideas']
