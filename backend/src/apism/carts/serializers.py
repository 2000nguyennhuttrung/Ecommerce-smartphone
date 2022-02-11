from rest_framework import serializers
from .models import Carts
from django.db.models.fields import TextField
# import django.db.models.fields.TextField


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carts
        fields = (
            "idCart",
            "name",
            "price",
            "image",
            "quantity"
        )


class CartSerializerModel(serializers.Serializer):
    idCart = serializers.IntegerField()
    name = serializers.CharField(max_length=255)
    price = serializers.FloatField()
    image = TextField(default='')
    quantity = serializers.IntegerField(default=1)
