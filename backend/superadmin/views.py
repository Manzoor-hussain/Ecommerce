from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Product, Order
from django.http import Http404
from .email_handler import send_email
from .serializers import ProductSerializer, OrderSerializer

import pdb
class AllProduct(APIView):
    """
    List all Product, or create a new Product.
    """
    def get(self, request, format=None):
        products = Product.objects.prefetch_related('images').all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ProductDetail(APIView):
    """
    Retrieve, update or delete a Product instance.
    """
    def get_object(self, pk):
        try:
            return Product.objects.prefetch_related('images').get(id=pk)
        except Product.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        
        product = self.get_object(pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)


class PostOrder(APIView):
    """
    List all Product, or create a new Product.
    """
    def get(self, request, format=None):
        products = Product.objects.prefetch_related('images').all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        data_=request.data['updatedFormData']
        serializer = OrderSerializer(data=data_)
        if serializer.is_valid():
            # serializer.save()
            # send_email('Thank You', 'superadmin/order.html',
            #    "manzoor.hussain@ml1.ai" , context={"data":data_})
            pdb.set_trace()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        pdb.set_trace()
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)