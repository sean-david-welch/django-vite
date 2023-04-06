import React from 'react';
import { Link } from 'react-router-dom';
import hero1 from '../assets/hero1.mp4';
import hero2 from '../assets/hero2.mp4';
import logo from '/logo.png';

export const Hero = () => {
    return (
        <div className="hero">
            <div className="overlay" />
            <video src={hero1} autoPlay loop muted />
            <Link to="/">
                <img src={logo} alt="Logo" id="logo" />
            </Link>
        </div>
    );
};

export default Hero;
