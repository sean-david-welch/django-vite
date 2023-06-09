import React, { createContext, useState, useCallback } from 'react';
import { CartItem, CartContextData, CartProviderProps } from '../types/Types';

export const CartContext = createContext<CartContextData>(
    {} as CartContextData
);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const findItemById = (id: string) =>
        cart.find(cartItem => cartItem.id === id);

    const updateQuantity = useCallback(
        (id: string, quantity: number) => {
            setCart(
                cart.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity, updated: true };
                    }
                    return item;
                })
            );
        },
        [cart]
    );

    const addToCart = useCallback(
        (item: CartItem) => {
            const existingItem = findItemById(item.id);

            if (existingItem) {
                updateQuantity(item.id, existingItem.quantity + 1);
            } else {
                setCart([...cart, item]);
            }
        },
        [cart]
    );

    const removeFromCart = useCallback(
        (id: string) => {
            setCart(cart.filter(item => item.id !== id));
        },
        [cart]
    );

    const value = { cart, addToCart, removeFromCart, updateQuantity };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
