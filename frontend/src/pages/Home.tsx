import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import ProductList from '../utils/productList';

export const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <ProductList />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
