import React from 'react';
import { useCartContext } from '../../hooks/useCartContext';
import CartItem from './CartItem';

const CartView: React.FC = () => {
    const { cart, removeFromCart, updateQuantity } = useCartContext();

    if (cart.length === 0) {
        return <div>Your cart is empty.</div>;
    }

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

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div>
            <h2>Your Cart</h2>
            <ul>
                {cart.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                        handleChangeQuantity={handleChangeQuantity}
                        handleRemove={handleRemove}
                    />
                ))}
            </ul>
            <div>
                <strong>Total: €{total.toFixed(2)}</strong>
            </div>
        </div>
    );
};

export default CartView;
