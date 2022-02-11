from django.db import models
# from stringfield import StringField

# Create your models here.

class Products(models.Model):
    brand = models.CharField(max_length=100)
    name = models.CharField(max_length=255)
    price = models.FloatField()
    image = models.TextField(null=True,default='',blank=True)
    imageListSlide = models.TextField(null=True,default='',blank=True)
    video = models.TextField(null=True,default='',blank=True)
    screenTech = models.CharField(max_length=100,null=True,default='',blank=True)
    pixelRadio = models.CharField(max_length=100,null=True,default='',blank=True)
    screenSize = models.CharField(max_length=100,null=True,default='',blank=True)
    brightness = models.CharField(max_length=100,null=True,default='',blank=True)
    frontCamera = models.CharField(max_length=100,null=True,default='',blank=True)
    rearCamera = models.CharField(max_length=100,null=True,default='',blank=True)
    cpu = models.CharField(max_length=100,null=True,default='',blank=True)
    chip = models.CharField(max_length=100,null=True,default='',blank=True)
    speed = models.CharField(max_length=100,null=True,default='',blank=True)
    ram = models.CharField(max_length=100,null=True,default='',blank=True)
    rom = models.CharField(max_length=100,null=True,default='',blank=True)
    sdCard = models.CharField(max_length=100,null=True,default='',blank=True)
    
    def __str__(self):
        return self.name

