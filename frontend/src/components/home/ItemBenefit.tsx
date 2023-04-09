// BenefitItem.tsx
import React, { useRef } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

interface BenefitItemProps {
    icon: IconDefinition;
    title: string;
    description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({
    icon,
    title,
    description,
}) => {
    const benefitItemRef = useRef<HTMLLIElement>(null);

    useIntersectionObserver(benefitItemRef);

    return (
        <li className="benefits-list-item hidden" ref={benefitItemRef}>
            <FontAwesomeIcon icon={icon} />
            <h2>{title}</h2>
            <p>{description}</p>
        </li>
    );
};

export default BenefitItem;
