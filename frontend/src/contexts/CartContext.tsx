import React, { createContext, useContext, useState } from 'react';
import { CartItem, CartContextData, CartProviderProps } from '../types/Types';

const CartContext = createContext<CartContextData>({} as CartContextData);

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        console.log('Adding item:', item);
        const existingItem = cart.find(cartItem => cartItem.id === item.id);

        if (existingItem) {
            updateQuantity(item.id, existingItem.quantity + 1);
        } else {
            setCart([...cart, item]);
        }
    };

    const removeFromCart = (id: string) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const updateQuantity = (id: string, quantity: number) => {
        setCart(
            cart.map(item => {
                if (item.id === id) {
                    return { ...item, quantity };
                }
                return item;
            })
        );
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, updateQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
};
