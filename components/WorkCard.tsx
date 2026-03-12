import React from 'react';
import { LiquidGlass } from './LiquidGlass';

const projects = [
    {
        title: 'AI-Powered Quality Inspector',
        tag: 'Computer Vision',
        description:
            'Automated visual inspection system reducing defects by 94% for a manufacturing client.',
        image: '/work-1.webp',
    },
    {
        title: 'Intelligent Document Engine',
        tag: 'NLP',
        description:
            'Smart document processing pipeline extracting data from 10K+ documents daily.',
        image: '/work-2.webp',
    },
    {
        title: 'Predictive Analytics Dashboard',
        tag: 'Machine Learning',
        description:
            'Real-time forecasting platform improving demand planning accuracy by 40%.',
        image: '/work-3.webp',
    },
];

export const WorkCard: React.FC = () => {
    return (
        <div>
            <div className="work-header">
                <h2>Our Work</h2>
                <p>Selected projects that showcase our capabilities.</p>
            </div>

            <div className="work-grid">
                {projects.map((project, index) => (
                    <LiquidGlass key={index} className="work-item">
                        <div
                            style={{
                                width: '100%',
                                height: '220px',
                                background: `linear-gradient(135deg, rgba(184,212,232,${0.3 + index * 0.1}) 0%, rgba(74,127,181,${0.15 + index * 0.05}) 100%)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '3rem',
                            }}
                        >
                            {index === 0 ? '👁️' : index === 1 ? '📄' : '📊'}
                        </div>
                        <div className="work-info">
                            <span className="work-tag">{project.tag}</span>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </LiquidGlass>
                ))}
            </div>
        </div>
    );
};
