import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { servicesData } from '../src/data/services';
import './ServiceDetail.css';

export const ServiceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // Find the matching service from our data array
    const service = servicesData.find(s => s.slug === id);

    if (!service) {
        return (
            <div className="service-not-found glass">
                <h2>Service Not Found</h2>
                <Link to="/" className="back-link">
                    <ArrowLeft size={20} /> Return Home
                </Link>
            </div>
        );
    }

    return (
        <div className="service-page-container">
            <nav className="service-nav">
                <Link to="/" className="back-link">
                    <ArrowLeft size={20} /> Back to Services
                </Link>
            </nav>

            <main className="service-content glass">
                <header className="service-header">
                    <div className="service-icon-large">{service.icon}</div>
                    <h1 className="service-title">{service.longTitle}</h1>
                </header>

                <section className="service-body">
                    <div className="service-description">
                        <p>{service.longDescription}</p>
                    </div>

                    <div className="service-details-grid">
                        <div className="service-benefits glass-card">
                            <h3>Key Benefits</h3>
                            <ul>
                                {service.benefits.map((benefit, idx) => (
                                    <li key={idx}>{benefit}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="service-usecases glass-card">
                            <h3>Primary Use Cases</h3>
                            <ul>
                                {service.useCases.map((useCase, idx) => (
                                    <li key={idx}>{useCase}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <footer className="service-cta">
                    <h2>Ready to Transform Your Business?</h2>
                    <p>Book a consultation with our AI strategists to discuss how {service.shortTitle} can accelerate your growth.</p>
                    <a href="mailto:contact@aixai.com" className="cta-button glass-card">Contact Us</a>
                </footer>
            </main>
        </div>
    );
};
