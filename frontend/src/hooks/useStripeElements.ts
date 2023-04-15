import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const useStripeElements = () => {
    const [clientSecret, setClientSecret] = useState('');
    const stripePromise = loadStripe(
        'pk_test_51MXR40LQKZpRvvuEz5IWRCdRssn1c3pOCIwXRYqky1GhyiiCyiuwBjAXJ4IHTMGblLCyuaXlv3SCPtwtDM1iv8OV00EoL8GlJq'
    );

    useEffect(() => {
        fetch('/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] }),
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, []);

    const options = {
        locale: 'en',
    };

    return { stripePromise, options, clientSecret };
};
export default useStripeElements;
