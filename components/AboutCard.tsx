import React from 'react';
import { LiquidGlass } from './LiquidGlass';

export const AboutCard: React.FC = () => {
    return (
        <div>
            <div className="about-grid">
                <div className="about-text">
                    <h2>Who We Are</h2>
                    <p>
                        AIxAI is a next-generation AI agency based in India. We combine deep
                        machine learning expertise with sharp product thinking to build
                        solutions that actually move the needle — from intelligent automation
                        to generative AI and computer vision.
                    </p>
                    <p>
                        Our team of data scientists, engineers, and designers work as an
                        extension of your team, turning complex problems into elegant,
                        scalable AI products.
                    </p>
                </div>

                <div className="stats-row">
                    <LiquidGlass className="stat-item">
                        <span className="stat-number">50+</span>
                        <span className="stat-label">Projects Delivered</span>
                    </LiquidGlass>
                    <LiquidGlass className="stat-item">
                        <span className="stat-number">30+</span>
                        <span className="stat-label">Happy Clients</span>
                    </LiquidGlass>
                    <LiquidGlass className="stat-item">
                        <span className="stat-number">99%</span>
                        <span className="stat-label">Client Retention</span>
                    </LiquidGlass>
                </div>
            </div>
        </div>
    );
};
