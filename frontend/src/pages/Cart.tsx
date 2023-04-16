import Layout from '../components/Layout';
import CartView from '../components/cart/CartView';
import CheckoutForm from '../components/cart/CheckoutForm';
import SectionHeading from '../components/navigation/SectionHeading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { usePaymentIntent } from '../hooks/usePaymentIntent';
import { useCartContext } from '../hooks/useCartContext';
import { Elements } from '@stripe/react-stripe-js';

export const Cart = () => {
    const { clientSecret, stripePromise, options } = usePaymentIntent();
    const { cart } = useCartContext();

    const renderSectionHeading =
        cart.length === 0 ? (
            <SectionHeading
                headingText="Your Shopping Cart Is Empty:"
                buttonLabel="Shop Primal Formulas"
                buttonUrl="/Shop"
                buttonIcon={
                    <FontAwesomeIcon icon={faArrowRight} className="icon" />
                }
            />
        ) : (
            <SectionHeading
                headingText="View Your Shopping Cart:"
                buttonLabel="Continue Shopping"
                buttonUrl="/Shop"
                buttonIcon={
                    <FontAwesomeIcon icon={faArrowRight} className="icon" />
                }
            />
        );

    return (
        <Layout>
            <section id="cart">
                <CartView renderSectionHeading={renderSectionHeading} />
                {clientSecret && (
                    <Elements stripe={stripePromise} options={options}>
                        <CheckoutForm />
                    </Elements>
                )}
            </section>
        </Layout>
    );
};

export default Cart;
