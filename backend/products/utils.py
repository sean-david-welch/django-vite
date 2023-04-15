def calculate_cart_total(cart):
    total_price = 0
    print(f"Cart: {cart}")
    for item in cart:
        print(f"Item: {item}")
        price_in_cents = int(float(item['price']) * 100)
        total_price += price_in_cents * item['quantity']
    return total_price
