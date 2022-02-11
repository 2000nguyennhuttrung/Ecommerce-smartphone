from django.contrib import admin
from .models import Carts
# Register your models here.


@admin.register(Carts)
class CartAdmin(admin.ModelAdmin):
    list_display = ["idCart", "name", "image", "price", "quantity"]
