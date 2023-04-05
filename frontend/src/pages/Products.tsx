// src/pages/Products.tsx
import React from 'react';
import useProductList from '../hooks/useProductList';
import Layout from '../components/layout';
import { BASE_URL } from '../utils/config';

export const Products = () => {
    const { products } = useProductList();

    return (
        <Layout>
            <section id="products">
                <div className="products">
                    <ul>
                        {products.map(product => (
                            <li key={product.id}>
                                <h2>{product.name}</h2>
                                <img
                                    src={`${BASE_URL}/${product.image}`}
                                    alt={product.name}
                                />
                                <h2>Price: €{product.price}</h2>
                                <p>{product.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

export default Products;
