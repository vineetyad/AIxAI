import React from 'react';
import { LiquidGlass } from './LiquidGlass';

const steps = [
    {
        number: '01',
        title: 'Discovery',
        description: 'We dive deep into your business to understand your challenges and goals.',
    },
    {
        number: '02',
        title: 'Prototype',
        description: 'We build and test a proof-of-concept to validate the approach with real data.',
    },
    {
        number: '03',
        title: 'Build',
        description: 'We engineer the production-ready solution with rigorous testing and optimization.',
    },
    {
        number: '04',
        title: 'Scale',
        description: 'We deploy, monitor, and continuously improve the solution as your business grows.',
    },
];

export const ProcessCard: React.FC = () => {
    return (
        <div>
            <div className="process-header">
                <h2>How We Work</h2>
                <p>A streamlined process from concept to production.</p>
            </div>

            <div className="process-steps">
                {steps.map((step, index) => (
                    <LiquidGlass key={index} className="process-step">
                        <div className="step-number">{step.number}</div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </LiquidGlass>
                ))}
            </div>
        </div>
    );
};
