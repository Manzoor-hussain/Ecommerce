from django.db import models

# Create your models here.
import uuid

from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib import admin

class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    price = models.IntegerField()
    discount = models.IntegerField()
    name = models.CharField(max_length=200)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.name
    
class Image(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='images/')

    
class Order(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False )
    product = models.ForeignKey(Product, on_delete=models.CASCADE)  # Add this line
    quentity = models.IntegerField()
    TotalPrice = models.IntegerField()
    name = models.CharField(max_length=200)
    mobile = models.IntegerField()
    province = models.CharField(max_length=200)
    district = models.CharField(max_length=200)
    address = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.name



  

