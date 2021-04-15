from rest_framework import serializers
from .models import Thinker
from django.contrib.auth import authenticate

class ThinkerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Thinker
        fields = ['id','username','email', 'date_of_birth']

#Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Thinker
        fields = ['id','username','email', 'date_of_birth','password']
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validate_data):
        thinker = Thinker.objects.create_user(validate_data['username'],
                                           validate_data['email'],
                                           validate_data['date_of_birth'],
                                           validate_data['password'])
        return thinker

#Login Serializer
class LoginSerializer(serializers.ModelSerializer):
    pass
