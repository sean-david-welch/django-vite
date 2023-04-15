def caclulate_cart_total(cart):
    total_price = 0
    for item in cart:
        price_in_cents = int(item['price'] * 100)
        total_price += price_in_cents * item['quantity']
    return total_price