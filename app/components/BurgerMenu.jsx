import React, { useState } from 'react';

const BurgerMenu = ({toggleIsVisible}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        toggleIsVisible()
    };

    return (
        <div className="burger-menu text-accent" onClick={handleToggle}>
            <div className={`burger ${isOpen ? 'open' : ''}`}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    );
};

export default BurgerMenu;