import React from 'react';
import { Link } from 'react-router-dom';
import { LiquidGlass } from './LiquidGlass';
import { ServiceDetail } from '../src/data/services';

interface ServicesCardProps {
    title: string;
    description: string;
    services: ServiceDetail[];
}

export const ServicesCard: React.FC<ServicesCardProps> = ({ title, description, services }) => {
    return (
        <div>
            <div className="services-header">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <div className="services-grid">
                {services.map((service) => (
                    <Link to={`/services/${service.slug}`} key={service.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <LiquidGlass className="service-card" style={{ height: '100%', cursor: 'pointer' }}>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.shortTitle}</h3>
                            <p>{service.shortDescription}</p>
                        </LiquidGlass>
                    </Link>
                ))}
            </div>
        </div>
    );
};
