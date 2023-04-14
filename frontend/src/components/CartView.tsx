import React from 'react';
import { useCart } from '../contexts/CartContext';

const CartView: React.FC = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();

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
                    <li key={item.id}>
                        <img
                            src={item.image}
                            alt={item.name}
                            width="50"
                            height="50"
                        />
                        <span>{item.name}</span>
                        <span>€{Number(item.price).toFixed(2)}</span>
                        <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={event =>
                                handleChangeQuantity(item.id, event)
                            }
                        />
                        <button onClick={() => handleRemove(item.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <div>
                <strong>Total: €{total.toFixed(2)}</strong>
            </div>
        </div>
    );
};

export default CartView;
