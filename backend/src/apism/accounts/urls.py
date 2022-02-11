from django.urls import path, include
from .views import UserViewSet
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('account-detail/<str:pk>', views.accountDetail, name='account-detail'),
    path('account-update/<str:pk>', views.accountUpdate, name='account-update'),
]
