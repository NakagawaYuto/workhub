from rest_framework import routers
from .views import PostViewSet, ApplicantsViewSet


router = routers.DefaultRouter()
router.register(r'post', PostViewSet)
router.register(r'applicants', ApplicantsViewSet)

urlpatterns = [
]

urlpatterns += router.urls