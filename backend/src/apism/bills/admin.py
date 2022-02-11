from django.contrib import admin
from .models import Bills
# Register your models here.


@admin.register(Bills)
class CartAdmin(admin.ModelAdmin):
    list_display = ["username", "product_name", "price", "quantity"]
