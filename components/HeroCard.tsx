import React from 'react';
import { LiquidGlass } from './LiquidGlass';

export const HeroCard: React.FC = () => {
    const handleScrollTarget = (e: React.MouseEvent<HTMLButtonElement>, targetIndex: number) => {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent('scrollToCylinderIndex', { detail: { index: targetIndex } }));
    };

    return (
        <div className="hero">
            <h1>Transform Your Business with AI</h1>

            <p>
                We build custom AI solutions that drive growth, efficiency, and
                innovation. Experience the future of intelligent business.
            </p>

            <div className="hero-cta">
                <button className="btn-primary" onClick={(e) => handleScrollTarget(e, 6)}>
                    Contact Us
                    <span>→</span>
                </button>
                <button className="btn-secondary" onClick={(e) => handleScrollTarget(e, 5)}>
                    Our Work
                </button>
            </div>
        </div>
    );
};
