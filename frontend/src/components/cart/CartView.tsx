import React from 'react';
import { useCartContext } from '../../hooks/useCartContext';
import CartItem from './CartItem';
import SectionHeading from '../navigation/SectionHeading';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import NavButton from '../navigation/NavButton';

const CartView: React.FC = () => {
    const { cart, removeFromCart, updateQuantity } = useCartContext();

    if (cart.length === 0) {
        return (
            <div className="empty-cart">
                <SectionHeading
                    headingText="Your Shopping Cart Is Empty:"
                    buttonLabel="Shop Primal Formulas"
                    buttonUrl="/Shop"
                    buttonIcon={
                        <FontAwesomeIcon icon={faArrowRight} className="icon" />
                    }
                />
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
            <SectionHeading
                headingText="View Your Shopping Cart:"
                buttonLabel="Continue Shopping"
                buttonUrl="/Shop"
                buttonIcon={
                    <FontAwesomeIcon icon={faArrowRight} className="icon" />
                }
            />
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
