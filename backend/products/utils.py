import os
import json
from django.http import JsonResponse
import stripe
import stripe.error

public_key = os.environ.get('STRIPE_PUBLIC_TEST_KEY')
secret_key = os.environ.get('STRIPE_SECRET_TEST_KEY')

stripe.api_key = secret_key

def caclulate_cart_total(cart):
    total_price = 0
    for item in cart:
        price_in_cents = int(item['price'] * 100)
        total_price += price_in_cents * item['quantity']
    return total_price

def process_payment(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        cart = data['cart']
        total_amount = caclulate_cart_total(cart)

        try:
            payment_intent = stripe.PaymentIntent.create(
                amount=total_amount,
                currency='eur',
            )
            return JsonResponse({'client_secret': payment_intent.client_secret})
        except (Exception, stripe.error.CardError) as e:
            return JsonResponse({'error': str(e) if isinstance(e, Exception) else e.user_message}, status=400)
