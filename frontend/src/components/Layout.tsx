// src/components/Layout.tsx
import React from 'react';

import Header from './navigation/Header';
import Footer from './navigation/Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
