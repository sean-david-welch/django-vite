import { useEffect, useState, useCallback } from 'react';
import { debounce } from 'lodash';
import { loadStripe } from '@stripe/stripe-js';
import fetchData from '../../utils/fetchData';
import { useCartContext } from './useCartContext';

const stripePromise = loadStripe(
    'pk_test_51MXR40LQKZpRvvuEz5IWRCdRssn1c3pOCIwXRYqky1GhyiiCyiuwBjAXJ4IHTMGblLCyuaXlv3SCPtwtDM1iv8OV00EoL8GlJq'
);

export const usePaymentIntent = () => {
    const [clientSecret, setClientSecret] = useState<string | null>('');
    const cartContext = useCartContext();

    const debouncedFetchPaymentIntent = useCallback(
        debounce(async () => {
            console.log('fetchPaymentIntent called');

            if (cartContext.cart.length === 0) {
                return;
            }

            const totalAmount = cartContext.cart.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            );

            console.log('Cart content:', cartContext.cart);
            console.log('Total amount:', totalAmount);

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
        }, 10),
        [cartContext.cart]
    );

    useEffect(() => {
        debouncedFetchPaymentIntent();
    }, [cartContext.cart, debouncedFetchPaymentIntent]);

    useEffect(() => {
        if (!clientSecret) {
            return;
        }
        console.log('Client secret updated:', clientSecret);
    }, [clientSecret]);

    const options = clientSecret
        ? {
              clientSecret,
          }
        : {};

    return {
        clientSecret,
        stripePromise,
        options,
        updateClientSecret: setClientSecret,
    };
};
