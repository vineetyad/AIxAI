import React from 'react';
import { LiquidGlass } from './LiquidGlass';

export const HeroCard: React.FC = () => {
    return (
        <div className="hero">
            <h1>Transform Your Business with AI</h1>

            <p>
                We build custom AI solutions that drive growth, efficiency, and
                innovation. Experience the future of intelligent business.
            </p>

            <div className="hero-cta">
                <button className="btn-primary">
                    Get Started
                    <span>→</span>
                </button>
                <button className="btn-secondary">Our Work</button>
            </div>
        </div>
    );
};
