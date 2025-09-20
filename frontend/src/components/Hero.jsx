// Hero.jsx - Updated with Mobile Centering
import React from 'react';
import '../style/Hero.css';
import { assets } from '../assets/assets.js';

const Hero = () => {
    return (
        <div className='mobile-hero-container'>
            <div className='border-box'>
                <div className='content-wrapper'>
                    <div className='box-content'>
                        <p className='box-content-small'>OUR BESTSELLERS</p>
                        <p className='box-content-large'>LATEST ARRIVALS</p>
                        <p className='box-content-small'>SHOP NOW</p>
                    </div>
                    <div className='hero-image-container'>
                        <img className='hero-img' src={assets.hero_img} alt="Hero fashion model" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;