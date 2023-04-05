// src/utils/useProductList.tsx
import { useEffect, useState } from 'react';
import fetchData from '../utils/fetchData';

interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
}

function useProductList() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await fetchData('/api/products/');
                setProducts(data);
            } catch (err) {
                console.error(`Error fetching Products`, err);
            }
        };
        fetchProducts();
    }, []);
    return { products };
}

export default useProductList;

// function useProductList() {
//     const [products, setProducts] = useState<Product[]>([]);
//     const url = 'http://127.0.0.1:8000';

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await fetch(`${url}/api/products/`);
//                 const data = await response.json();
//                 setProducts(data);
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         };
//         fetchProducts();
//     }, []);

//     return { products, url }; // Return the products and the base URL
// }

// export default useProductList;
