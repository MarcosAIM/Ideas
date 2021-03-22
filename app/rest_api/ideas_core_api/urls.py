from rest_framework import routers
from .api import IdeaViewSet


router = routers.DefaultRouter()
router.register('api/Idea',IdeaViewSet, 'idea')

urlpatterns = router.urls
