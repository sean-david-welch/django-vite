import { useEffect, useState } from 'react';
import fetchData from '../../utils/fetchData';

import { Product } from '../../types/Types';

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
