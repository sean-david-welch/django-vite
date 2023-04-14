import useProductDetail from '../../hooks/useProductDetail';
import NavButton from '../navigation/NavButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../hooks/useCartContext';

const productDetail = () => {
    const { product, loading } = useProductDetail();
    const { addToCart } = useCartContext();

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
        });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section id="product-detail">
            <h2 className="section-heading">
                Primal Formula's - {product.name}:
            </h2>
            <div className="product-detail">
                <img src={product.image} alt={product.name} />

                <div className="product-info">
                    <h2>Price: €{product.price}</h2>
                    <ul className="product-nav">
                        <NavButton
                            to="/cart"
                            icon={<FontAwesomeIcon icon={faCartPlus} />}
                            onClick={handleAddToCart}
                        >
                            Add to Cart - €{product.price}
                        </NavButton>
                    </ul>
                    <p>{product.description}</p>
                </div>
            </div>
        </section>
    );
};

export default productDetail;
