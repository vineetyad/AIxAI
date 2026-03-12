import React, { useState } from 'react';
import { LiquidGlass } from './LiquidGlass';

export const ContactCard: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; text: string }>({ type: null, text: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!name || !email || !message) {
            setStatus({ type: 'error', text: 'Please fill in all fields.' });
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: null, text: '' });

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                setStatus({ type: 'success', text: 'Email sent successfully! We will be in touch shortly.' });
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus({ type: 'error', text: 'Failed to send email. Please try again later.' });
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus({ type: 'error', text: 'An unexpected error occurred. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

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
                    <form onSubmit={handleSubmit}>
                        {status.text && (
                            <div style={{
                                padding: '1rem',
                                marginBottom: '1.2rem',
                                borderRadius: '0.75rem',
                                backgroundColor: status.type === 'success' ? 'rgba(46, 125, 111, 0.1)' : 'rgba(220, 53, 69, 0.1)',
                                color: status.type === 'success' ? 'var(--color-success)' : '#dc3545',
                                border: `1px solid ${status.type === 'success' ? 'rgba(46, 125, 111, 0.2)' : 'rgba(220, 53, 69, 0.2)'}`,
                                fontSize: '0.95rem',
                                textAlign: 'center'
                            }}>
                                {status.text}
                            </div>
                        )}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" placeholder="Tell us about your project..." value={message} onChange={(e) => setMessage(e.target.value)} required />
                        </div>
                        <button type="submit" className="form-submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
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
