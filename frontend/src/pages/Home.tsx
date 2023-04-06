import React from 'react';
import Layout from '../components/Layout';
import Products from './Products';
import Hero from '../components/Hero';

export const Home = () => {
    return (
        <div>
            <Layout>
                <section id="home">
                    <Hero />
                </section>
            </Layout>
        </div>
    );
};

export default Home;
