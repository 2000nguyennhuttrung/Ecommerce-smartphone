from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Carts
from .serializers import CartSerializer, CartSerializerModel

# Create your views here.


@api_view(['GET'])
def cartUrls(request):
    urls = [
        "path('', views.cartUrls, name='cart-urls')",
        "path('cart-list/', views.cartList, name='cart-list')",
        "path('cart-detail/<str:pk>', views.cartDetail, name='cart-detail')",
        "path('cart-create/', views.cartCreate, name='cart-create')",
        "path('cart-update/<str:pk>', views.cartUpdate, name='cart-update')",
        "path('cart-delete/<str:pk>', views.cartDelete, name='cart-delete')",
    ]
    return Response(urls)


@api_view(['GET'])
def cartList(request):
    carts = Carts.objects.all().order_by('id')
    serializer = CartSerializer(carts, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def cartDetail(request, pk):
    cart = Carts.objects.get(id=pk)
    serializer = CartSerializer(cart, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def cartCreate(request):
    mydata = CartSerializer(data=request.data)
    if not mydata.is_valid():
        return Response('Error data', status=status.HTTP_400_BAD_REQUEST)

    idCart = mydata.data['idCart']
    name = mydata.data['name']
    price = mydata.data['price']
    image = mydata.data['image']
    quantity = mydata.data['quantity']

    cart = Carts.objects.create(
        idCart=idCart, name=name, price=price, image=image, quantity=quantity)
    return Response(data=cart.idCart, status=status.HTTP_200_OK)


@api_view(['PUT'])
def cartUpdate(request, pk):
    cart = Carts.objects.get(idCart=pk)
    serializer = CartSerializer(instance=cart, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
def cartDelete(request, pk):
    cart = Carts.objects.get(idCart=pk)
    cart.delete()
    return Response('Item succsesfully delete!')
