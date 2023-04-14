import React, { useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

import { Product } from '../../types/Product';

import NavButton from '../navigation/NavButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons';

type ProductItemProps = {
    product: Product;
};

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    const productCardRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(productCardRef);

    return (
        <li key={product.id}>
            <div ref={productCardRef} className="product-card hidden">
                <h2>{product.name}</h2>
                <img src={product.image} alt={product.name} />
                <h2>Price: €{product.price}</h2>

                <ul className="product-nav">
                    <NavButton
                        to="/shop"
                        icon={<FontAwesomeIcon icon={faArrowRight} />}
                    >
                        View Product
                    </NavButton>
                    <NavButton
                        to="/cart"
                        icon={<FontAwesomeIcon icon={faCartPlus} />}
                    >
                        Add to Cart
                    </NavButton>
                </ul>
            </div>
        </li>
    );
};

export default ProductItem;
