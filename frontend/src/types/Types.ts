import { LinkProps } from 'react-router-dom';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
}

export interface LayoutProps {
    children: React.ReactNode;
}

export interface NavButtonProps extends LinkProps {
    children: React.ReactNode;
    icon: React.ReactNode;
}

export interface UseSideNavbar {
    isOpen: boolean;
    toggleSideNavbar: () => void;
}

export interface NavItemProps extends LinkProps {
    children: React.ReactNode;
}

export interface BenefitItemProps {
    icon: IconDefinition;
    title: string;
    description: string;
}