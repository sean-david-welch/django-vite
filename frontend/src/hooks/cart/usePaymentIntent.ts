import { useEffect, useState, useRef, useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import fetchData from '../../utils/fetchData';
import { useCartContext } from './useCartContext';

const stripePromise = loadStripe(
    'pk_test_51MXR40LQKZpRvvuEz5IWRCdRssn1c3pOCIwXRYqky1GhyiiCyiuwBjAXJ4IHTMGblLCyuaXlv3SCPtwtDM1iv8OV00EoL8GlJq'
);

export const usePaymentIntent = (total: number) => {
    const [clientSecret, setClientSecret] = useState('');
    const cartContext = useCartContext();

    const fetchPaymentIntent = useCallback(async () => {
        console.log('fetchPaymentIntent called');

        if (cartContext.cart.length === 0) {
            return;
        }

        const totalAmount = cartContext.cart.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );

        try {
            const data = await fetchData(
                '/api/products/create-payment-intent/',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        cart: cartContext.cart,
                        total: totalAmount,
                    }),
                }
            );

            setClientSecret(data.client_secret);
        } catch (error) {
            console.log(error);
        }
    }, [cartContext.cart]);

    useEffect(() => {
        console.log('useEffect called');
        fetchPaymentIntent();
    }, [cartContext.cart, total]);

    const options = clientSecret
        ? {
              clientSecret,
          }
        : {};

    return { clientSecret, stripePromise, options };
};
