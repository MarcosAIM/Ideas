from .serializer import ThinkerSerializer
from rest_framework import viewsets, permissions
from .models import Thinker


class ThinkerViewSet(viewsets.ModelViewSet):
    queryset = Thinker.objects.all()
    serializer_class = ThinkerSerializer
    permission_classes = [
        permissions.AllowAny
    ]
    
