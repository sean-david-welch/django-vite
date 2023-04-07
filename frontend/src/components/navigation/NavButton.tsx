import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface NavButtonProps extends LinkProps {
    children: React.ReactNode;
    icon: React.ReactNode;
}

function NavButton({ to, children, icon }: NavButtonProps) {
    return (
        <li className="nav-item">
            <button className="btn btn-primary">
                <Link to={to}>
                    {children} {icon}
                </Link>
            </button>
        </li>
    );
}

export default NavButton;
