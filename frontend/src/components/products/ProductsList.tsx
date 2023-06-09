import useProductList from '../../hooks/productHooks/useProductList';
import ProductItem from './ProductItem';

function ProductsList() {
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

export default ProductsList;
