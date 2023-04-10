import Layout from '../components/Layout';
import Hero from '../components/Hero';
import BenefitsHome from '../components/home/BenefitsHome';
import Products from '../components/Products';

export const Home = () => {
    return (
        <div>
            <Layout>
                <section id="home">
                    <Hero />
                    <BenefitsHome />
                    <div className="marginless"></div>
                    <Products />
                </section>
            </Layout>
        </div>
    );
};

export default Home;
