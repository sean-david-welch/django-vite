import React, { useEffect, useState } from 'react';
import {
    PaymentElement,
    LinkAuthenticationElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

interface CheckoutFormProps {
    clientSecret: string;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ clientSecret }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        const paymentElement = elements.getElement(PaymentElement);

        if (!paymentElement) {
            return;
        }

        const { error } = await stripe.confirmPayment(clientSecret, {
            payment_method: {
                card: paymentElement,
            },
        });

        if (error) {
            setMessage(error.message);
        } else {
            setMessage('Payment succeeded!');
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: 'tabs',
    };

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <LinkAuthenticationElement
                id="link-authentication-element"
                onChange={e => setEmail(e.target.value)}
            />
            <PaymentElement
                id="payment-element"
                options={paymentElementOptions}
            />
            <button disabled={isLoading || !stripe || !elements} id="submit">
                <span id="button-text">
                    {isLoading ? (
                        <div className="spinner" id="spinner"></div>
                    ) : (
                        'Pay now'
                    )}
                </span>
            </button>
            {message && <div id="payment-message">{message}</div>}
        </form>
    );
};

export default CheckoutForm;
