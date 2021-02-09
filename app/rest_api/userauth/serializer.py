from rest_framework import serializers
from .models import Thinker

class ThinkerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Thinker
        fields = ['url', 'username', 'email', 'is_admin']
