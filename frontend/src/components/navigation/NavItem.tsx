import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface NavItemProps extends LinkProps {
    children: React.ReactNode;
}

function NavItem({ to, children }: NavItemProps) {
    return (
        <li className="nav-item">
            <Link to={to}>{children}</Link>
        </li>
    );
}

export default NavItem;
