from .serializer import IdeaSerializer
from rest_framework import viewsets, permissions
from .models import BaseIdea


class IdeaViewSet(viewsets.ModelViewSet):
    serializer_class = IdeaSerializer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        self.request.user.BaseIdea.all()

    def perform_create(self, serializer):
        serializer.save(creator_profile=self.request.user)

    