from django.contrib import admin
from .models import Product, Order, Image
from django.contrib import admin
# from nested_admin import NestedTabularInline, NestedModelAdmin

# class ImageInline(NestedTabularInline):
#     model = Product.images_list.through
#     extra = 1

# class ProductAdmin(NestedModelAdmin):
#     inlines = [ImageInline]

admin.site.register(Product)
admin.site.register(Order)
admin.site.register(Image)
# Register your models here.
