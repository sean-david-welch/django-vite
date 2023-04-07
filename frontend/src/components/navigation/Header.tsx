import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartShopping,
    faCircleUser,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/logo.png';
import useTransparentHeader from '../../hooks/useTransparentHeader';

import NavItem from './NavItem';
import NavButton from './NavButton';

function Header() {
    const isTransparent = useTransparentHeader();

    return (
        <header>
            <nav id="navbar" className={isTransparent ? 'transparent' : ''}>
                <ul className="nav-list">
                    <Link to="/">
                        <img src={logo} id="logo" alt="Logo" />
                    </Link>
                    <NavItem to="/about">About</NavItem>
                    <NavItem to="/">Ingredients & Benefits</NavItem>
                    <NavButton
                        to="/products"
                        icon={
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="icon"
                            />
                        }
                    >
                        Products
                    </NavButton>
                    <NavItem to="/cart">
                        <FontAwesomeIcon icon={faCartShopping} size="lg" />
                    </NavItem>
                    <NavItem to="/login">
                        <FontAwesomeIcon icon={faCircleUser} size="xl" />
                    </NavItem>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
