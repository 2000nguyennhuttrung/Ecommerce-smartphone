from django.db import models

# Create your models here.

class Carts(models.Model):
    idCart = models.IntegerField()
    name = models.CharField(max_length=255)
    image = models.TextField(null=True,default='',blank=True)
    price = models.FloatField()
    quantity= models.IntegerField(default=1)
    
    def __str__(self):
        return self.name

