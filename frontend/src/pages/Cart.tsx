import Layout from '../components/Layout';
import CartView from '../components/CartView';

export const Cart = () => {
    return (
        <Layout>
            <section id="cart">
                <CartView />
            </section>
        </Layout>
    );
};

export default Cart;
