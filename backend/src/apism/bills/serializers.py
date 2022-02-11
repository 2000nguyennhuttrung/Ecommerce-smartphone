from rest_framework import serializers
from .models import Bills
from django.db.models.fields import TextField


class BillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bills
        fields = '__all__'
