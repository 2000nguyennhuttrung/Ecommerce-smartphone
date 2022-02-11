from django.urls import path
from . import views

urlpatterns = [
    path('', views.cartUrls, name='cart-urls'),
    path('cart-list/', views.cartList, name='cart-list'),
    path('cart-detail/<str:pk>', views.cartDetail, name='cart-detail'),
    path('cart-create/', views.cartCreate, name='cart-create'),
    path('cart-update/<str:pk>', views.cartUpdate, name='cart-update'),
    path('cart-delete/<str:pk>', views.cartDelete, name='cart-delete'),

]

"""
"idCart": 3,
"name": "Iphone 13",
"price": 1900,
"image": "",
"quantity": 1
"""
