import Layout from '../components/Layout';
import CartView from '../components/cart/CartView';
import CheckoutForm from '../components/cart/CheckoutForm';

import { Elements } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
    'pk_test_51MXR40LQKZpRvvuEz5IWRCdRssn1c3pOCIwXRYqky1GhyiiCyiuwBjAXJ4IHTMGblLCyuaXlv3SCPtwtDM1iv8OV00EoL8GlJq'
);

export const Cart = () => {
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        fetch('/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] }),
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
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
