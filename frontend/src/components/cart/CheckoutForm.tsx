import React, { useEffect, useState } from 'react';
import {
    PaymentElement,
    LinkAuthenticationElement,
    useStripe,
    useElements,
    AddressElement,
} from '@stripe/react-stripe-js';
import { PaymentIntent } from '@stripe/stripe-js';

interface CheckoutFormProps {
    clientSecret: string | null;
    totalAmount: number;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
    clientSecret,
    totalAmount,
}) => {
    const stripe = useStripe();
    const elements = useElements();

    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!stripe || !clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(result => {
            const paymentIntent = result.paymentIntent as PaymentIntent;

            switch (paymentIntent.status) {
                case 'succeeded':
                    setMessage('Payment succeeded!');
                    break;
                case 'processing':
                    setMessage('Your payment is processing.');
                    break;
                case 'requires_payment_method':
                    setMessage(
                        'Your payment was not successful, please try again.'
                    );
                    break;
                default:
                    setMessage('Something went wrong.');
                    break;
            }
        });
    }, [stripe, clientSecret]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://localhost:3000',
                receipt_email: email,
            },
        });

        if (error.message) {
            setMessage(error.message);
        } else {
            setMessage('An unexpected error occurred.');
        }

        setIsLoading(false);
    };

    return (
        <div className="stripe-form">
            <form id="payment-form" className="stripe" onSubmit={handleSubmit}>
                <h2 className="section-heading">Stripe Checkout Form</h2>
                <LinkAuthenticationElement id="link-authentication-element" />
                {/* <AddressElement id="address-element" /> */}
                <PaymentElement id="payment-element" />
                <button
                    disabled={isLoading || !stripe || !elements}
                    id="submit"
                >
                    <span id="button-text">
                        {isLoading ? (
                            <div className="spinner" id="spinner"></div>
                        ) : (
                            `Pay now - €${totalAmount.toFixed(2)}`
                        )}
                    </span>
                </button>
                {message && <div id="payment-message">{message}</div>}
            </form>
        </div>
    );
};

export default CheckoutForm;
