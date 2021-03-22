from .serializer import IdeaSerializer
from rest_framework import viewsets, permissions
from .models import BaseIdea


class IdeaViewSet(viewsets.ModelViewSet):
    queryset = BaseIdea.objects.all()
    serializer_class = IdeaSerializer
    permission_classes = [
        permissions.AllowAny
    ]
    