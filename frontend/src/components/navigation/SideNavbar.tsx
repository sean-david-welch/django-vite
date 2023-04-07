import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faX,
    faCartShopping,
    faCircleUser,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import useSideNavbar from '../../hooks/useSideNavbar';

import NavItem from './NavItem';
import NavButton from './NavButton';

function SideNavbar() {
    const { isOpen, toggleSideNavbar } = useSideNavbar();

    return (
        <>
            <div className={`side-nav ${isOpen ? 'open' : 'closed'}`}>
                <nav className="side-nav__menu">
                    <ul>
                        <NavItem to="/about">About</NavItem>
                        <NavItem to="/products">Products</NavItem>
                        <NavItem to="/cart">Cart</NavItem>
                        <NavItem to="/login">Login</NavItem>
                    </ul>
                    <ul className="icon-nav">
                        <NavItem to="/cart">
                            <FontAwesomeIcon icon={faCartShopping} size="lg" />
                        </NavItem>
                        <NavItem to="/login">
                            <FontAwesomeIcon icon={faCircleUser} size="xl" />
                        </NavItem>
                    </ul>
                </nav>
                {isOpen && (
                    <div className="side-nav__icon" onClick={toggleSideNavbar}>
                        <FontAwesomeIcon icon={faX} />
                        <p>Primal Formulas</p>
                    </div>
                )}
            </div>
            {!isOpen && (
                <div className="side-nav__icon" onClick={toggleSideNavbar}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            )}
        </>
    );
}

export default SideNavbar;
