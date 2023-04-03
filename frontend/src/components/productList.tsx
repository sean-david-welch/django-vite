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
        <section id="products">
            <div className="products">
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            <h2>
                                {product.name} <br></br> Price: €{product.price}
                            </h2>
                            <img
                                src={`${url}/${product.image}`}
                                alt={product.name}
                            />
                            <p>{product.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default ProductList;
