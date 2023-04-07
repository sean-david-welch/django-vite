import { useState } from 'react';

interface UseSideNavbar {
    isOpen: boolean;
    toggleSideNavbar: () => void;
}

const useSideNavbar = (): UseSideNavbar => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleSideNavbar = () => {
        setIsOpen(!isOpen);
    };

    return { isOpen, toggleSideNavbar };
};

export default useSideNavbar;
