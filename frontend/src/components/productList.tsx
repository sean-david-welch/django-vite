import { useEffect, useState } from 'react';

interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
}

function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const url = 'http://127.0.0.1:8000';

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${url}/api/products/`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                        <img
                            src={`${url}/${product.image}`}
                            alt={product.name}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
