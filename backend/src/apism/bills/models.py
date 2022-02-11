from django.db import models

# Create your models here.


class Bills(models.Model):
    username = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)

    product_name = models.CharField(max_length=255)
    image = models.TextField(null=True, default='', blank=True)
    price = models.FloatField()
    quantity = models.IntegerField(default=1)
    status = models.BooleanField(default=False)

    def __str__(self):
        return self.username
