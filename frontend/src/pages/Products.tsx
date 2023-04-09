import useProductList from '../hooks/useProductList';
import Layout from '../components/Layout';

import { BASE_URL } from '../utils/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const Products = () => {
    const { products } = useProductList();

    return (
        <Layout>
            <section id="products">
                <div className="products">
                    <ul>
                        {products.map(product => (
                            <li key={product.id}>
                                <div className="product-card">
                                    <h2>{product.name}</h2>
                                    <img
                                        src={`${BASE_URL}/${product.image}`}
                                        alt={product.name}
                                    />
                                    <h2>Price: €{product.price}</h2>
                                    <div className="product-nav">
                                        <button className="btn btn-nav btn-primary">
                                            {'View product '}
                                            <FontAwesomeIcon
                                                icon={faArrowRight}
                                            />
                                        </button>
                                        <button className="btn btn-nav btn-primary">
                                            {'Add to cart '}
                                            <FontAwesomeIcon
                                                icon={faCartPlus}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

export default Products;
