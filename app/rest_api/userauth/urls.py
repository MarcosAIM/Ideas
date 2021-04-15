from django.urls import path, include
from .api import RegistAPI
from knox import views as knox_views

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegistAPI.as_view())
]
