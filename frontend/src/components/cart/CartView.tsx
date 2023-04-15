import React from 'react';
import { useCartContext } from '../../hooks/useCartContext';
import CartItem from './CartItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import NavButton from '../navigation/NavButton';

const CartView: React.FC = () => {
    const { cart, removeFromCart, updateQuantity } = useCartContext();

    if (cart.length === 0) {
        return (
            <div className="empty-cart">
                <h2 className="section-heading">
                    Your Shopping cart is empty{' '}
                </h2>
                <p>Click the link below to view some of our formulas</p>
                <ul>
                    <NavButton
                        to="/Shop"
                        icon={
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="icon"
                            />
                        }
                    >
                        Shop Primal Formulas
                    </NavButton>
                </ul>
            </div>
        );
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
        <div className="cart-view">
            <h2 className="section-heading">Your Shopping Cart:</h2>
            <ul>
                <NavButton
                    to="/Shop"
                    icon={
                        <FontAwesomeIcon icon={faArrowRight} className="icon" />
                    }
                >
                    Continue Shopping
                </NavButton>
            </ul>
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
    );
};

export default CartView;
