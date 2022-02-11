from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .models import Products
from .serializers import ProductSerializer
from rest_framework.generics import ListAPIView
from rest_framework.filters import SearchFilter, OrderingFilter
# Create your views here.


@api_view(['GET'])
def productUrls(request):
    urls = [
        "path('', views.productUrls, name='product-urls')",
        "path('product-list/', views.productList, name='product-list')",
        "path('product-detail/<str:pk>', views.productDetail, name='product-detail')",
        "path('product-create/', views.productCreate, name='product-create')",
        "path('product-search/', views.productControl.as_view(), name='product-search')",
        "path('product-search/?ordering=price&search=<str:pk>',views.productControl.as_view(), name='product-order')",
        "path('product-search/?ordering=-price&search=<str:pk>',views.productControl.as_view(), name='product-order')",
        "path('product-search/?page=<str:pk>',views.productControl.as_view(), name='product-pagination')"
    ]
    return Response(urls)


@api_view(['GET'])
def productList(request):
    products = Products.objects.all().order_by('id')
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def productDetail(request, pk):
    product = Products.objects.get(id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def productCreate(request):
    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


class productControl(ListAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['name', 'brand']
