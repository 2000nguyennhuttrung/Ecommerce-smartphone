from django.urls import path
from . import views

urlpatterns = [
    path('', views.BillList.as_view(), name='bill-urls'),
    path('bill-filter/',
         views.BillFilter.as_view(), name='bill-filter'),
    # path('cart-create/', views.cartCreate, name='cart-create'),
    # path('cart-update/<str:pk>', views.cartUpdate, name='cart-update'),
    # path('cart-delete/<str:pk>', views.cartDelete, name='cart-delete'),

]
