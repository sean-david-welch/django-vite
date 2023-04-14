import React, { useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import NavButton from '../navigation/NavButton';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { Product } from '../../types/Types';

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
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
                        to={`/${product.id}`}
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
