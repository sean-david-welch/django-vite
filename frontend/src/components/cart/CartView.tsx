import React from 'react';
import CartItem from './CartItem';
import { useCartContext } from '../../hooks/useCartContext';

interface CartViewProps {
    renderSectionHeading?: React.ReactNode;
}

const CartView: React.FC<CartViewProps> = ({ renderSectionHeading }) => {
    const { cart, removeFromCart, updateQuantity } = useCartContext();

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
        <>
            {renderSectionHeading}
            {cart.length === 0 ? (
                <div className="empty-cart" />
            ) : (
                <div className="cart-view">
                    <div className="cart">
                        <ul className="cart-list-grid">
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
                </div>
            )}
        </>
    );
};

export default CartView;
