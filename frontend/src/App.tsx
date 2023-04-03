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
                <h1>Welcome to ProShops!</h1>
                <ProductList />
            </main>
            <Footer />
        </div>
    );
}

export default App;
