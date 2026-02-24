import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    CreditCard,
    ShieldCheck,
    CheckCircle2,
    Smartphone,
    Building2,
    Wallet,
    ArrowLeft,
    Lock,
    Shield
} from 'lucide-react';
import confetti from 'canvas-confetti';

const PaymentPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('card');
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Get order details from location state or default
    const orderDetails = location.state || {
        amount: 499,
        itemName: 'Elite Scholar Membership'
    };

    const handlePayment = (e) => {
        e.preventDefault();
        setIsProcessing(true);

        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 },
                colors: ['#6366f1', '#ec4899', '#ffffff']
            });
        }, 3000);
    };

    if (isSuccess) {
        return (
            <div className="container section animate-fade-in" style={{ textAlign: 'center' }}>
                <div className="card glass-premium" style={{ maxWidth: '650px', margin: '0 auto', padding: '6rem 4rem', borderRadius: '40px' }}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        background: 'rgba(16, 185, 129, 0.1)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 3rem',
                        boxShadow: '0 0 40px rgba(16, 185, 129, 0.2)'
                    }}>
                        <CheckCircle2 size={60} color="#10b981" />
                    </div>
                    <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1.5rem' }}>Transaction Successful</h1>
                    <p style={{ margin: '1.5rem 0', color: 'var(--text-muted)', fontSize: '1.25rem', lineHeight: '1.6' }}>
                        Your academic access has been provisioned. Welcome to the elite community, Scholar!
                    </p>

                    <div className="card glass" style={{ padding: '2rem', marginBottom: '4rem', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.05)', textAlign: 'left' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <span style={{ color: 'var(--text-muted)', fontWeight: 700 }}>Order ID</span>
                            <span style={{ fontWeight: 800 }}>#EDU-{Math.floor(Math.random() * 89999 + 10000)}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <span style={{ color: 'var(--text-muted)', fontWeight: 700 }}>Service Tier</span>
                            <span style={{ fontWeight: 800, color: 'var(--primary)' }}>{orderDetails.itemName}</span>
                        </div>
                        <div style={{ height: '1px', background: 'rgba(0,0,0,0.05)', margin: '1rem 0' }}></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 900 }}>
                            <span>Amount Paid</span>
                            <span className="gradient-text">₹{orderDetails.amount}</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <button className="btn btn-primary shadow-lg shimmer" onClick={() => navigate('/dashboard')} style={{ flex: 1, height: '64px', borderRadius: '20px', fontSize: '1.1rem', fontWeight: 800 }}>
                            Access Dashboard
                        </button>
                        <button className="btn btn-secondary" onClick={() => navigate('/courses')} style={{ height: '64px', padding: '0 2rem', borderRadius: '20px', fontWeight: 700 }}>
                            View More
                        </button>
                    </div>

                    <div style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', opacity: 0.7 }}>
                        <div style={{ width: '40px', height: '40px', background: 'rgba(0,0,0,0.05)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Shield size={20} /></div>
                        <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>Receipt sent to {orderDetails.customer?.email || 'your email'}</span>
                    </div>
                </div>
            </div>
        );
    }

    const tabs = [
        { id: 'card', icon: <CreditCard size={20} />, label: 'Card' },
        { id: 'upi', icon: <Smartphone size={20} />, label: 'UPI' },
        { id: 'netbank', icon: <Building2 size={20} />, label: 'Bank' },
        { id: 'wallet', icon: <Wallet size={20} />, label: 'Wallet' }
    ];

    return (
        <div className="container section animate-fade-in" style={{ maxWidth: '1100px' }}>
            <button
                onClick={() => navigate(-1)}
                style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', marginBottom: '3rem', cursor: 'pointer', fontWeight: 700, fontSize: '1rem' }}
            >
                <ArrowLeft size={20} /> Revise Checkout Details
            </button>

            <div className="checkout-grid grid" style={{ gridTemplateColumns: '1.7fr 1.3fr', gap: '3rem' }}>
                <div className="card glass-premium" style={{ padding: '0', overflow: 'hidden', borderRadius: '32px' }}>
                    <div style={{ display: 'flex', borderBottom: '1px solid rgba(0,0,0,0.05)', background: 'rgba(0,0,0,0.02)' }}>
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    flex: 1,
                                    padding: '1.75rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    background: activeTab === tab.id ? 'white' : 'transparent',
                                    border: 'none',
                                    borderBottom: activeTab === tab.id ? '4px solid var(--primary)' : '4px solid transparent',
                                    color: activeTab === tab.id ? 'var(--primary)' : 'var(--text-muted)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    fontWeight: 800,
                                    fontSize: '0.9rem'
                                }}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div style={{ padding: '4rem' }}>
                        {isProcessing ? (
                            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                                <div className="spinner" style={{ width: '70px', height: '70px', border: '5px solid rgba(99, 102, 241, 0.1)', borderTop: '5px solid var(--primary)', borderRadius: '50%', margin: '0 auto 2.5rem', animation: 'spin 1s linear infinite' }}></div>
                                <h2 style={{ fontSize: '2rem', fontWeight: 900 }}>Securing Transaction...</h2>
                                <p style={{ color: 'var(--text-muted)', marginTop: '1.25rem', fontSize: '1.1rem' }}>Validating payment with your financial institution.</p>
                            </div>
                        ) : (
                            <form onSubmit={handlePayment}>
                                {activeTab === 'card' && (
                                    <div style={{ display: 'grid', gap: '2.5rem' }}>
                                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                                            <label style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--dark)' }}>Cardholder Identifier</label>
                                            <input type="text" className="glass" placeholder="Exact name as on card" required style={{ padding: '1.25rem', borderRadius: '18px', border: '2px solid rgba(0,0,0,0.05)', width: '100%', outline: 'none', fontSize: '1rem', fontWeight: 600 }} />
                                        </div>
                                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                                            <label style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--dark)' }}>Secure Card Number</label>
                                            <div style={{ position: 'relative' }}>
                                                <input type="text" className="glass" placeholder="4242 4242 4242 4242" required style={{ padding: '1.25rem 1.25rem 1.25rem 3.5rem', borderRadius: '18px', border: '2px solid rgba(0,0,0,0.05)', width: '100%', outline: 'none', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '2px' }} />
                                                <div style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }}><CreditCard size={20} /></div>
                                            </div>
                                        </div>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem' }}>
                                            <div style={{ display: 'grid', gap: '0.75rem' }}>
                                                <label style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--dark)' }}>Expiry Timeline</label>
                                                <input type="text" className="glass" placeholder="MM / YY" required style={{ padding: '1.25rem', borderRadius: '18px', border: '2px solid rgba(0,0,0,0.05)', width: '100%', outline: 'none', fontSize: '1rem', fontWeight: 600 }} />
                                            </div>
                                            <div style={{ display: 'grid', gap: '0.75rem' }}>
                                                <label style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--dark)' }}>CVC / CVV</label>
                                                <div style={{ position: 'relative' }}>
                                                    <input type="password" className="glass" placeholder="***" required style={{ padding: '1.25rem 1.25rem 1.25rem 3.5rem', borderRadius: '18px', border: '2px solid rgba(0,0,0,0.05)', width: '100%', outline: 'none' }} />
                                                    <div style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }}><Lock size={18} /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'upi' && (
                                    <div style={{ display: 'grid', gap: '2.5rem', textAlign: 'center' }}>
                                        <div style={{ padding: '3rem', border: '3px dashed rgba(99, 102, 241, 0.1)', borderRadius: '32px', background: 'rgba(99, 102, 241, 0.02)' }}>
                                            <div style={{ width: '180px', height: '180px', background: 'white', margin: '0 auto 2rem', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                                <Smartphone size={80} color="var(--primary)" />
                                            </div>
                                            <p style={{ fontWeight: 800, fontSize: '1.1rem' }}>Scan QR via GPay, PhonePe, or Paytm</p>
                                        </div>
                                        <div style={{ display: 'grid', gap: '0.75rem', textAlign: 'left' }}>
                                            <label style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--dark)', marginLeft: '0.5rem' }}>UPI ID (VPA)</label>
                                            <input type="text" className="glass" placeholder="username@bank" style={{ padding: '1.25rem', borderRadius: '18px', border: '2px solid rgba(0,0,0,0.05)', width: '100%', outline: 'none', fontWeight: 600 }} />
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'netbank' || activeTab === 'wallet' ? (
                                    <div style={{ display: 'grid', gap: '1.25rem' }}>
                                        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 700 }}>Select Preferred Channel:</p>
                                        {['HDFC Academic Link', 'ICICI Institutional', 'State Bank Scholar', 'Axis Excellence'].map(bank => (
                                            <label key={bank} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', border: '2px solid rgba(0,0,0,0.03)', borderRadius: '20px', cursor: 'pointer', transition: 'all 0.2s' }} className="glow-hover">
                                                <input type="radio" name="bank" style={{ width: '20px', height: '20px', accentColor: 'var(--primary)' }} />
                                                <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{bank}</span>
                                            </label>
                                        ))}
                                    </div>
                                ) : null}

                                <button
                                    type="submit"
                                    className="btn btn-primary shadow-lg shimmer"
                                    style={{ width: '100%', marginTop: '3.5rem', height: '72px', fontSize: '1.25rem', fontWeight: 900, borderRadius: '24px' }}
                                >
                                    Authorize Payment of ₹{orderDetails.amount}
                                </button>

                                <div style={{ marginTop: '2.5rem', padding: '1.25rem', background: 'rgba(16, 185, 129, 0.05)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', color: '#10b981', fontSize: '0.9rem', fontWeight: 800 }}>
                                    <ShieldCheck size={20} />
                                    PCI-DSS 4.0 Compliant Gateway
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                <div>
                    <div className="card glass-premium" style={{ position: 'sticky', top: '100px', borderRadius: '32px', padding: '3rem' }}>
                        <h3 style={{ marginBottom: '2.5rem', fontSize: '1.5rem', fontWeight: 800 }}>Final Order Breakdown</h3>

                        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '3rem', padding: '1.5rem', background: 'rgba(99, 102, 241, 0.05)', borderRadius: '24px' }}>
                            <div style={{ width: '56px', height: '56px', background: 'var(--primary)', color: 'white', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <ShieldCheck size={28} />
                            </div>
                            <div>
                                <div style={{ fontWeight: 800, fontSize: '1rem' }}>{orderDetails.itemName}</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>ArchanaEdu Premium Access</div>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontWeight: 600 }}>
                                <span>Platform Enrolment</span>
                                <span style={{ color: 'var(--text-main)' }}>₹{orderDetails.amount}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontWeight: 600 }}>
                                <span>Administrative Fee</span>
                                <span style={{ color: '#10b981' }}>WAIVED</span>
                            </div>
                            <div style={{ height: '1px', background: 'rgba(0,0,0,0.05)', margin: '0.5rem 0' }}></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.75rem', fontWeight: 900 }}>
                                <span>Total Due</span>
                                <span className="gradient-text">₹{orderDetails.amount}</span>
                            </div>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(0,0,0,0.02)', borderRadius: '20px' }}>
                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100" style={{ width: '40px', height: '40px', borderRadius: '12px', objectFit: 'cover' }} />
                                <div>
                                    <div style={{ fontSize: '0.85rem', fontWeight: 800 }}>Dr. Arjun Varma</div>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700 }}>"Looking forward to mentoring you!"</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ padding: '3rem 2rem', textAlign: 'center', opacity: 0.6 }}>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png" style={{ height: '20px', filter: 'grayscale(1)' }} />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Razorpay_logo.svg/1200px-Razorpay_logo.svg.png" style={{ height: '20px', filter: 'grayscale(1)' }} />
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                            Encrypted by 256-bit SSL certificate. Verified by GlobalSec.
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .checkout-grid {
                    align-items: start;
                }
            `}</style>
        </div>
    );
};

export default PaymentPage;
