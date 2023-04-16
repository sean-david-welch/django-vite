import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import fetchData from '../utils/fetchData';
import { useCartContext } from './useCartContext';

const stripePromise = loadStripe(
    'pk_test_51MXR40LQKZpRvvuEz5IWRCdRssn1c3pOCIwXRYqky1GhyiiCyiuwBjAXJ4IHTMGblLCyuaXlv3SCPtwtDM1iv8OV00EoL8GlJq'
);

export const usePaymentIntent = () => {
    const [clientSecret, setClientSecret] = useState('');
    const cart = useCartContext();

    const fetchPaymentIntent = async () => {
        try {
            const data = await fetchData(
                '/api/products/create-payment-intent/',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ cart }),
                }
            );

            setClientSecret(data.client_secret);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPaymentIntent();
    }, []);

    const options = clientSecret
        ? {
              clientSecret,
          }
        : {};

    return { clientSecret, stripePromise, options };
};
