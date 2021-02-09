from .serializer import ThinkerSerializer
from rest_framework import viewsets
from .models import Thinker


class ThinkerViewSet(viewsets.ModelViewSet):
    queryset = Thinker.objects.all()
    serializer_class = ThinkerSerializer
