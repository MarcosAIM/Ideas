from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('', include('userauth.urls')),
    path('', include('ideas_core_api.urls'))
]
