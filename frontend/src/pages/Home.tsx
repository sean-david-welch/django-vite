import Layout from '../components/Layout';
import Hero from '../components/home/Hero';
import BenefitsHome from '../components/home/BenefitsHome';
import ProductsList from '../components/products/ProductsList';

export const Home = () => {
    return (
        <div>
            <Layout>
                <section id="home">
                    <Hero />
                    <BenefitsHome />
                    <ProductsList />
                </section>
            </Layout>
        </div>
    );
};

export default Home;
