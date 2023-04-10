import useProductList from '../hooks/useProductList';
import Layout from '../components/Layout';
import ProductItem from '../components/products/ProductItem';

export const Products = () => {
    const { products } = useProductList();

    return (
        <Layout>
            <section id="products">
                <div className="products">
                    <ul>
                        {products.map(product => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

export default Products;
