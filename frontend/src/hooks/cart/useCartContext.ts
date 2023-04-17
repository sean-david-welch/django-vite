import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export const useCartContext = () => {
    const { cart, addToCart, removeFromCart, updateQuantity } =
        useContext(CartContext);

    if (
        cart === undefined ||
        addToCart === undefined ||
        removeFromCart === undefined ||
        updateQuantity === undefined
    ) {
        throw new Error('useCartContext must be used within a CartProvider');
    }

    return { cart, addToCart, removeFromCart, updateQuantity };
};
