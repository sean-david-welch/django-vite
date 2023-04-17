import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchData from '../../utils/fetchData';

function useProductDetail() {
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const data = await fetchData(`/api/products/${productId}`);
                setProduct(data);
            } catch (err) {
                console.error('Error fetching Product', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    return { product, loading };
}

export default useProductDetail;
