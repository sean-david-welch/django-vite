import { useState } from 'react';

import Header from './components/header';
import Footer from './components/footer';
import ProductList from './components/productList';

import './styles/App.css';

function App() {
    return (
        <div>
            <Header />
            <main>
                <ProductList />
            </main>
            <Footer />
        </div>
    );
}

export default App;
