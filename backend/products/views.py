from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

import os
import json
import stripe
import stripe.error

from .utils import calculate_cart_total

from .models import Product
from .serializers import ProductSerializer

class ProductList(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True, context={'request': request})
        return Response(serializer.data)

class ProductDetail(APIView):
    def get_object(self, pk):
        try:
            return Product.objects.get(pk=pk)
        except Product.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        product = self.get_object(pk)
        serializer = ProductSerializer(product, context={'request': request})
        return Response(serializer.data)
    
#####################################
###### Stripe Payments Intents ######
#####################################
public_key = os.environ.get('STRIPE_PUBLIC_TEST_KEY')
secret_key = os.environ.get('STRIPE_SECRET_TEST_KEY')

stripe.api_key = secret_key

class ProcessPayment(APIView):

    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        cart = data['cart']
        total_amount = calculate_cart_total(cart)

        try:
            payment_intent = stripe.PaymentIntent.create(
                amount=total_amount,
                currency='eur',
                automatic_payment_methods={'enabled': True},
            )
            return Response({'client_secret': payment_intent.client_secret})
        except (Exception, stripe.error.CardError) as e:
            return Response({'error': str(e) if isinstance(e, Exception) else e.user_message}, status=status.HTTP_400_BAD_REQUEST)

