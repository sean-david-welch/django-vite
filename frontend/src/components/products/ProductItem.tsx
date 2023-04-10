import React, { useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

import { Product } from '../../types/Product';
import { BASE_URL } from '../../utils/config';
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
                <img src={`${BASE_URL}/${product.image}`} alt={product.name} />
                <h2>Price: €{product.price}</h2>

                <div className="product-nav">
                    <button className="btn btn-nav btn-primary">
                        {'View product '}
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    <button className="btn btn-nav btn-primary">
                        {'Add to cart '}
                        <FontAwesomeIcon icon={faCartPlus} />
                    </button>
                </div>
            </div>
        </li>
    );
};

export default ProductItem;
