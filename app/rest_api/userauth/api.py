from rest_framework import permissions, generics
from rest_framework.response import Response
from knox.models import AuthToken
from .serializer import ThinkerSerializer, RegisterSerializer, LoginSerializer

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

# Login API
class LoginAPI(generics.GenericAPIView):
  serializer_class = LoginSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    thinker = serializer.validated_data
    _, token = AuthToken.objects.create(thinker)
    return Response({
      "thinker": ThinkerSerializer(thinker, context=self.get_serializer_context()).data,
      "token": token
    })

# Get Thinker API
class ThinkerAPI(generics.RetrieveAPIView):
  permission_classes = [
    permissions.IsAuthenticated,
  ]
  serializer_class = ThinkerSerializer

  def get_object(self):
    return self.request.user