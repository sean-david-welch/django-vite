import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartShopping,
    faCircleUser,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

import logo from '/logo.png';

function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [isTransparent, setIsTransparent] = useState(isHomePage);

    useEffect(() => {
        const handleScroll = () => {
            if (isHomePage) {
                const heroImageHeight = 600;
                const showTransparent = window.scrollY < heroImageHeight;
                setIsTransparent(showTransparent);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    return (
        <header>
            <nav id="navbar" className={isTransparent ? 'transparent' : ''}>
                <ul className="nav-list">
                    <Link to="/">
                        <img src={logo} id="logo" alt="Logo" />
                    </Link>
                    <li className="nav-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Ingredients & Benefits</Link>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-primary">
                            <Link to="/products">
                                Products{' '}
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="icon"
                                />
                            </Link>
                        </button>
                    </li>
                    <li className="nav-item">
                        <Link to="/cart">
                            <FontAwesomeIcon icon={faCartShopping} size="lg" />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login">
                            <FontAwesomeIcon icon={faCircleUser} size="xl" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
