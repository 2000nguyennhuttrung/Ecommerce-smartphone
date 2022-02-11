from django.urls import path
from . import views

urlpatterns = [
    path('', views.productUrls, name='product-urls'),
    path('product-list/', views.productList, name='product-list'),
    path('product-detail/<str:pk>', views.productDetail, name='product-detail'),
    path('product-create/', views.productCreate, name='product-create'),
    path('product-search/', views.productControl.as_view(), name='product-search'),
    path('product-search/?ordering=price&search=<str:pk>',
         views.productControl.as_view(), name='product-order'),
    path('product-search/?ordering=-price&search=<str:pk>',
         views.productControl.as_view(), name='product-order'),
    path('product-search/?page=<str:pk>',
         views.productControl.as_view(), name='product-pagination'),
]

"""

"brand": "Iphone",
"name": "Iphone 13",
"price": 1600,
"image":"",
"imageListSlide":"",
"video":"",
"screenTech":"",
"pixelRadio":"",
"screenSize":"",
"brightness":"",
"frontCamera":"",
"rearCamera":"",
"cpu":"",
"chip":"",
"speed":"",
"ram":"",
"rom":"",
"sdCard":""


"""
