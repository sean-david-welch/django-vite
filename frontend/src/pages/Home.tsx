import Layout from '../components/Layout';
import Hero from '../components/Hero';
import BenefitsHome from '../components/home/BenefitsHome';

export const Home = () => {
    return (
        <div>
            <Layout>
                <section id="home">
                    <Hero />
                    <BenefitsHome />
                </section>
            </Layout>
        </div>
    );
};

export default Home;
