from rest_framework import serializers
from .models import Products
from django.db.models.fields import TextField
# import django.db.models.fields.TextField


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'

# class ProductSerializerModel(serializers.Serializer):
#     brand = serializers.CharField(max_length=100)
#     name = serializers.CharField(max_length=255)
#     price = serializers.FloatField()

#     image = TextField(default='')
#     imageListSlide = TextField(default='')
#     video = TextField(default='')

#     screenTech = serializers.CharField(max_length=100,default='')
#     pixelRadio = serializers.CharField(max_length=100,default='')
#     screenSize = serializers.CharField(max_length=100,default='')
#     brightness = serializers.CharField(max_length=100,default='')
#     frontCamera = serializers.CharField(max_length=100,default='')
#     rearCamera = serializers.CharField(max_length=100,default='')
#     cpu = serializers.CharField(max_length=100,default='')
#     chip = serializers.CharField(max_length=100,default='')
#     speed = serializers.CharField(max_length=100,default='')
#     ram = serializers.CharField(max_length=100,default='')
#     rom = serializers.CharField(max_length=100,default='')
#     sdCard = serializers.CharField(max_length=100,default='')
    