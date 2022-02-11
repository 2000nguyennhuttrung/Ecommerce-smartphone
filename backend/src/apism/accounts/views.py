from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializers import UserSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


@api_view(['GET'])
def accountDetail(request, pk):
    account = User.objects.get(username=pk)
    serializer = UserSerializer(account, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
def accountUpdate(request, pk):
    account = User.objects.get(username=pk)
    serializer = UserSerializer(instance=account, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
