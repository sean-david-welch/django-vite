import Layout from '../components/Layout';
import CartView from '../components/cart/CartView';
import CheckoutForm from '../components/cart/CheckoutForm';

import { Elements } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

import fetchData from '../utils/fetchData';

import { useCartContext } from '../hooks/useCartContext';

const stripePromise = loadStripe(
    'pk_test_51MXR40LQKZpRvvuEz5IWRCdRssn1c3pOCIwXRYqky1GhyiiCyiuwBjAXJ4IHTMGblLCyuaXlv3SCPtwtDM1iv8OV00EoL8GlJq'
);

export const Cart = () => {
    const [clientSecret, setClientSecret] = useState('');
    const cart = useCartContext();

    useEffect(() => {
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

                setClientSecret(data.clientSecret);
            } catch (error) {
                console.log(error);
            }
        };

        fetchPaymentIntent();
    }, []);

    return (
        <Layout>
            <section id="cart">
                <CartView />
                {clientSecret && (
                    <Elements stripe={stripePromise}>
                        <CheckoutForm clientSecret={clientSecret} />
                    </Elements>
                )}
            </section>
        </Layout>
    );
};

export default Cart;
