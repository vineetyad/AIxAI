import React from 'react';
import { LiquidGlass } from './LiquidGlass';

export const ContactCard: React.FC = () => {
    return (
        <div>
            <div className="contact-wrapper">
                <div className="contact-info">
                    <h2>Let's Build Something Amazing</h2>
                    <p>
                        Ready to leverage AI for your business? Get in touch and let's
                        discuss how we can help you achieve your goals.
                    </p>

                    <div className="contact-detail">
                        <div className="contact-detail-icon">📧</div>
                        <span>HQ@aixai.co.in</span>
                    </div>
                    <div className="contact-detail">
                        <div className="contact-detail-icon">📍</div>
                        <span>Jaipur, Rajasthan, India</span>
                    </div>
                    <div className="contact-detail">
                        <div className="contact-detail-icon">📞</div>
                        <span>+91 80055 07037</span>
                    </div>
                </div>

                <LiquidGlass className="contact-form">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text" placeholder="Your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" placeholder="you@example.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" placeholder="Tell us about your project..." />
                        </div>
                        <button type="submit" className="form-submit">
                            Send Message
                        </button>
                    </form>
                </LiquidGlass>
            </div>

            <div className="footer">
                <p>© 2026 AIxAI — AI Agency India. All rights reserved.</p>
            </div>
        </div>
    );
};
