import useProductList from '../hooks/useProductList';
import ProductItem from './products/ProductItem';

function Products() {
    const { products } = useProductList();

    return (
        <section id="products">
            <h2 className="section-heading">
                Browse Primal Formula's Products:
            </h2>
            <div className="products">
                <ul>
                    {products.map(product => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Products;
