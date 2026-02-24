import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, ShieldCheck, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const Checkout = () => {
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handlePayment = (e) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simulate payment API call
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }, 2000);
    };

    if (isSuccess) {
        return (
            <div className="container section animate-fade-in" style={{ textAlign: 'center' }}>
                <div className="card glass" style={{ maxWidth: '500px', margin: '0 auto', padding: '4rem 2rem' }}>
                    <CheckCircle2 size={64} color="#10b981" style={{ marginBottom: '2rem' }} />
                    <h1>Subscription Active!</h1>
                    <p style={{ margin: '1.5rem 0', color: 'var(--text-muted)' }}>
                        Welcome to the Victorian Classics Club. You now have full access to our monthly meetings and archives.
                    </p>
                    <button className="btn btn-primary" onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
                </div>
            </div>
        );
    }

    return (
        <div className="container section animate-fade-in" style={{ maxWidth: '900px' }}>
            <h1 className="section-title">Complete Your <span className="gradient-text">Subscription</span></h1>
            <div className="checkout-grid grid" style={{ gridTemplateColumns: '1.5fr 1fr' }}>
                <div className="card glass">
                    <h3 style={{ marginBottom: '2rem' }}>Payment Method</h3>
                    <form onSubmit={handlePayment}>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gap: '0.5rem' }}>
                                <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Cardholder Name</label>
                                <input type="text" className="glass" placeholder="John Doe" required style={{ padding: '1rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }} />
                            </div>
                            <div style={{ display: 'grid', gap: '0.5rem' }}>
                                <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Card Number</label>
                                <div style={{ position: 'relative' }}>
                                    <input type="text" className="glass" placeholder="**** **** **** 1234" required style={{ padding: '1rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', width: '100%' }} />
                                    <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}><CreditCard size={20} /></div>
                                </div>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div style={{ display: 'grid', gap: '0.5rem' }}>
                                    <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Expiry</label>
                                    <input type="text" className="glass" placeholder="MM/YY" required style={{ padding: '1rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }} />
                                </div>
                                <div style={{ display: 'grid', gap: '0.5rem' }}>
                                    <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>CVC</label>
                                    <input type="password" className="glass" placeholder="***" required style={{ padding: '1rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }} />
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isProcessing}
                            style={{ width: '100%', marginTop: '2.5rem', height: '56px' }}
                        >
                            {isProcessing ? 'Processing...' : 'Subscribe Now - ₹499'}
                        </button>
                        <p style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            <ShieldCheck size={16} /> Secure Encrypted Transaction
                        </p>
                    </form>
                </div>

                <div>
                    <div className="card glass">
                        <h3 style={{ marginBottom: '1.5rem' }}>Order Summary</h3>
                        <div style={{ display: 'grid', gap: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: 'var(--text-muted)' }}>Victorian Classics Club</span>
                                <span style={{ fontWeight: 600 }}>₹499/mo</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: 'var(--text-muted)' }}>Plan Type</span>
                                <span style={{ fontWeight: 600 }}>Monthly Membership</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 700 }}>
                            <span>Total</span>
                            <span>₹499</span>
                        </div>
                    </div>
                    <div style={{ padding: '2rem', textAlign: 'center' }}>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                            By subscribing, you agree to our Terms of Service and automatic monthly billing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
