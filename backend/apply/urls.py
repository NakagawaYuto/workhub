from rest_framework import routers
from .views import PostViewSet, ApplicantsViewSet


router = routers.DefaultRouter()
router.register(r'Post', PostViewSet)
router.register(r'Applicants', ApplicantsViewSet)

urlpatterns = [
]

urlpatterns += router.urls