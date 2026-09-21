from rest_framework import viewsets
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer
class CategoryViewSet(viewsets.ModelViewSet):
    queryset=Category.objects.all()
    serializer_class=CategorySerializer
class ProductViewSet(viewsets.ModelViewSet):
    queryset=Product.objects.filter(is_active=True).order_by("-created_at")
    serializer_class=ProductSerializer
    search_fields=["name","description"]
    filterset_fields=["category"]
