from django.urls import path, include
from .api import RegistAPI, LoginAPI, ThinkerAPI
from knox import views as knox_views

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegistAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/thinker', ThinkerAPI.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout')

]
