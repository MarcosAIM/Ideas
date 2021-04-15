from rest_framework import permissions, generics
from rest_framework.response import Response
from knox.models import AuthToken
from .serializer import ThinkerSerializer, RegisterSerializer

class RegistAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        thinker = serializer.save()
        return Response({
            "Thinker": ThinkerSerializer(thinker, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(thinker)[1]
        })
