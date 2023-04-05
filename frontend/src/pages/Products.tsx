// src/pages/Products.tsx
import React from 'react';
import useProductList from '../hooks/useProductList';
import Layout from '../components/layout';

export const Products = () => {
    const { products, url } = useProductList();

    return (
        <Layout>
            <section id="products">
                <div className="products">
                    <ul>
                        {products.map(product => (
                            <li key={product.id}>
                                <h2>{product.name}</h2>
                                <img
                                    src={`${url}/${product.image}`}
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
