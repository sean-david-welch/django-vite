import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import { useCartContext } from '../../hooks/useCartContext';
import { usePaymentIntent } from '../../hooks/usePaymentIntent';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

interface CartViewProps {
    renderSectionHeading?: React.ReactNode;
}

const CartView: React.FC<CartViewProps> = ({ renderSectionHeading }) => {
    console.log('Parent component rendered');
    console.log('MyComponent rendered');

    const { cart, removeFromCart, updateQuantity } = useCartContext();

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newTotal = cart.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );
        setTotal(newTotal);
    }, [cart]);

    const { clientSecret, stripePromise, options } = usePaymentIntent(total);

    const handleRemove = (id: string) => {
        removeFromCart(id);
    };

    const handleChangeQuantity = (
        id: string,
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newQuantity = parseInt(event.target.value);
        if (!isNaN(newQuantity) && newQuantity >= 1) {
            updateQuantity(id, newQuantity);
        }
    };

    return (
        <>
            {renderSectionHeading}
            {cart.length === 0 ? (
                <div className="empty-cart" />
            ) : (
                <div className="cart-view">
                    <div className="cart">
                        <ul className="cart-list-grid">
                            <h1 className="section-heading">Cart Items(s)</h1>
                            {cart.map(item => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    handleChangeQuantity={handleChangeQuantity}
                                    handleRemove={handleRemove}
                                />
                            ))}
                        </ul>
                        <div className="cart-total">
                            <h1 className="section-heading">
                                Sub-Total: €{total.toFixed(2)}
                            </h1>
                        </div>
                    </div>
                    {clientSecret && (
                        <Elements stripe={stripePromise} options={options}>
                            <CheckoutForm
                                clientSecret={clientSecret}
                                totalAmount={total}
                            />
                        </Elements>
                    )}
                </div>
            )}
        </>
    );
};

export default React.memo(CartView);
