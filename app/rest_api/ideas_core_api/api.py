from .serializer import IdeaSerializer
from rest_framework import viewsets, permissions


class IdeaViewSet(viewsets.ModelViewSet):
    serializer_class = IdeaSerializer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return self.request.user.ideas.all()

    def perform_create(self, serializer):
        serializer.save(creator_profile=self.request.user)

    