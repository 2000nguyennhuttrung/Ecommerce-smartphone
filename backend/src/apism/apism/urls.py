from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('products/', include('products.urls')),
    path('carts/', include('carts.urls')),
    path('accounts/', include('accounts.urls')),
    path('auth/', obtain_auth_token),
    path('bills/', include('bills.urls')),

]
