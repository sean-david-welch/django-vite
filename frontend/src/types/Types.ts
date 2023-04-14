import { LinkProps } from 'react-router-dom';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// Product Types
export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
}

// Layout Types
export interface LayoutProps {
    children: React.ReactNode;
}

export interface NavItemProps extends LinkProps {
    children: React.ReactNode;
}

export interface NavButtonProps {
    to: string;
    children: React.ReactNode;
    icon: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface UseSideNavbar {
    isOpen: boolean;
    toggleSideNavbar: () => void;
}

// Home Types
export interface BenefitItemProps {
    icon: IconDefinition;
    title: string;
    description: string;
}

// Cart Types
export interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

export interface CartItemProps {
    item: CartItem;
    handleChangeQuantity: (
        id: string,
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    handleRemove: (id: string) => void;
}

export interface CartContextData {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
}

export interface CartProviderProps {
    children: React.ReactNode;
}
