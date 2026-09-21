from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, ProductViewSet
router=DefaultRouter()
router.register("categories",CategoryViewSet)
router.register("items",ProductViewSet)
urlpatterns=router.urls
