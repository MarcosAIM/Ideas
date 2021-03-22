from rest_framework import routers
from .api import ThinkerViewSet


router = routers.DefaultRouter()
router.register('api/Thinker',ThinkerViewSet, 'thinker')

urlpatterns = router.urls
