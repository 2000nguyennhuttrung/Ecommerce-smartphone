from django.shortcuts import render
from rest_framework.decorators import authentication_classes
from .models import Bills
from .serializers import BillSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# Create your views here.
from rest_framework.generics import ListAPIView
from rest_framework.filters import SearchFilter, OrderingFilter

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


class BillList(APIView):

    def get(self, request, format=None):
        bills = Bills.objects.all()
        serializer = BillSerializer(bills, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = BillSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BillFilter(ListAPIView):
    queryset = Bills.objects.all()
    serializer_class = BillSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['username']

    # authentication_classes = [TokenAuthentication]
    # permission_classes = [IsAuthenticated]
