from django.http import Http404
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Product
from .serializers import ProductSerializer

class ProductList(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True, context={'request': request})

        # Check if the client expects JSON data
        if 'application/json' in request.META.get('HTTP_ACCEPT', ''):
            return Response(serializer.data)

        return render(request, 'products/product_list.html', {'products': serializer.data})

class ProductDetail(APIView):
    def get_object(self, pk):
        try:
            return Product.objects.get(pk=pk)
        except Product.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        product = self.get_object(pk)
        serializer = ProductSerializer(product, context={'request': request})

        # Check if the client expects JSON data
        if 'application/json' in request.META.get('HTTP_ACCEPT', ''):
            return Response(serializer.data)

        return render(request, 'products/product_detail.html', {'product': serializer.data})
