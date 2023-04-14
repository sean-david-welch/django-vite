import useProductDetail from '../../hooks/useProductDetail';

const productDetail = () => {
    const { product, loading } = useProductDetail();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section id="product-detail">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </section>
    );
};

export default productDetail;
