from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from rest_framework import routers, serializers, viewsets
from userauth.models import Thinker

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Thinker
        fields = ['url', 'username', 'email', 'is_staff']

class UserViewSet(viewsets.ModelViewSet):
    queryset = Thinker.objects.all()
    serializer_class = UserSerializer

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
