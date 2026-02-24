import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import courses from '../data/courses.json';
import {
    ShieldCheck,
    CheckCircle2,
    ChevronRight,
    User,
    Mail,
    MapPin,
    Shield,
    Zap,
    Lock,
    Clock,
    BookOpen
} from 'lucide-react';

const Checkout = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const courseId = searchParams.get('course');

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        plan: courseId ? 'one-time' : 'monthly'
    });

    const selectedCourse = courses.find(c => c.id === courseId);

    const handleNext = (e) => {
        e.preventDefault();
        let amount = formData.plan === 'monthly' ? 499 : 4999;
        let itemName = formData.plan === 'monthly' ? 'Monthly Membership' : 'Annual Membership';

        if (selectedCourse) {
            amount = parseInt(selectedCourse.price.replace(/[^0-9]/g, ''));
            itemName = selectedCourse.title;
        }

        navigate('/payment', {
            state: {
                paymentType: 'course',
                amount: amount,
                itemName: itemName,
                customer: {
                    name: formData.fullName,
                    email: formData.email
                }
            }
        });
    };

    return (
        <div className="container section animate-fade-in" style={{ maxWidth: '1200px' }}>
            {/* Step Indicator */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3rem', marginBottom: '5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>1</div>
                    <span style={{ fontWeight: 800, color: 'var(--primary)' }}>Checkout</span>
                </div>
                <div style={{ width: '60px', height: '2px', background: 'rgba(0,0,0,0.05)' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(0,0,0,0.05)', color: 'var(--text-muted)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>2</div>
                    <span style={{ fontWeight: 700, color: 'var(--text-muted)' }}>Payment</span>
                </div>
                <div style={{ width: '60px', height: '2px', background: 'rgba(0,0,0,0.05)' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(0,0,0,0.05)', color: 'var(--text-muted)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>3</div>
                    <span style={{ fontWeight: 700, color: 'var(--text-muted)' }}>Success</span>
                </div>
            </div>

            <div className="checkout-grid grid" style={{ gridTemplateColumns: '1.8fr 1.2fr', gap: '3rem', alignItems: 'start' }}>
                {/* Left Side: Order Details */}
                <div style={{ display: 'grid', gap: '2.5rem' }}>
                    <div className="card glass-premium" style={{ padding: '3.5rem', borderRadius: '40px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '3rem' }}>
                            <div style={{ width: '60px', height: '60px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                                <User size={28} />
                            </div>
                            <div>
                                <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Billing Information</h2>
                                <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Enter your details to finalize the enrolment</p>
                            </div>
                        </div>

                        <form onSubmit={handleNext} style={{ display: 'grid', gap: '2rem' }}>
                            <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr 1fr' }}>
                                <div style={{ display: 'grid', gap: '0.75rem' }}>
                                    <label style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--dark)', marginLeft: '0.5rem' }}>Full Legal Name</label>
                                    <div style={{ position: 'relative' }}>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Shubham Kumar"
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                            style={{ width: '100%', padding: '1.25rem 1.25rem 1.25rem 3.5rem', borderRadius: '18px', border: '2px solid rgba(0,0,0,0.05)', outline: 'none', background: 'white', transition: 'all 0.3s' }}
                                        />
                                        <User size={20} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }} />
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gap: '0.75rem' }}>
                                    <label style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--dark)', marginLeft: '0.5rem' }}>Email Workspace</label>
                                    <div style={{ position: 'relative' }}>
                                        <input
                                            type="email"
                                            required
                                            placeholder="shubham@university.edu"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            style={{ width: '100%', padding: '1.25rem 1.25rem 1.25rem 3.5rem', borderRadius: '18px', border: '2px solid rgba(0,0,0,0.05)', outline: 'none', background: 'white', transition: 'all 0.3s' }}
                                        />
                                        <Mail size={20} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }} />
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gap: '0.75rem' }}>
                                <label style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--dark)', marginLeft: '0.5rem' }}>Permanent Address</label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Flat 402, Academic Enclave, Delhi"
                                        value={formData.address}
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                        style={{ width: '100%', padding: '1.25rem 1.25rem 1.25rem 3.5rem', borderRadius: '18px', border: '2px solid rgba(0,0,0,0.05)', outline: 'none', background: 'white' }}
                                    />
                                    <MapPin size={20} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }} />
                                </div>
                            </div>

                            {!courseId && (
                                <div style={{ marginTop: '1rem' }}>
                                    <h4 style={{ fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Zap size={18} color="var(--primary)" /> Learning Tier Selection</h4>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                        {[
                                            { id: 'monthly', title: 'Monthly Elite', price: '₹499', period: 'billed monthly' },
                                            { id: 'annual', title: 'Annual Legend', price: '₹4,999', period: 'billed annually', extra: 'Save 20%' }
                                        ].map(plan => (
                                            <div
                                                key={plan.id}
                                                onClick={() => setFormData({ ...formData, plan: plan.id })}
                                                className="glass glow-hover"
                                                style={{
                                                    padding: '2rem',
                                                    borderRadius: '24px',
                                                    cursor: 'pointer',
                                                    border: formData.plan === plan.id ? '2px solid var(--primary)' : '2px solid rgba(0,0,0,0.05)',
                                                    background: formData.plan === plan.id ? 'rgba(99, 102, 241, 0.05)' : 'white',
                                                    transition: 'all 0.3s',
                                                    position: 'relative'
                                                }}>
                                                {plan.extra && (
                                                    <span style={{ position: 'absolute', top: '-10px', right: '15px', background: 'var(--secondary)', color: 'white', fontSize: '0.7rem', fontWeight: 800, padding: '0.3rem 0.7rem', borderRadius: '50px' }}>
                                                        {plan.extra}
                                                    </span>
                                                )}
                                                <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.5rem' }}>{plan.title}</div>
                                                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--primary)' }}>{plan.price}</div>
                                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>{plan.period}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="btn btn-primary shadow-lg shimmer"
                                style={{ width: '100%', height: '72px', borderRadius: '24px', fontSize: '1.25rem', fontWeight: 800, marginTop: '2rem' }}
                            >
                                Secure Checkout Now <ChevronRight size={22} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Side: Order Insight */}
                <div style={{ position: 'sticky', top: '100px' }}>
                    <div className="card glass-premium" style={{ padding: '3rem', borderRadius: '40px', border: '1px solid rgba(99, 102, 241, 0.1)' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2.5rem' }}>Scholarship Summary</h3>

                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '3rem', padding: '1.5rem', background: 'rgba(99, 102, 241, 0.05)', borderRadius: '24px' }}>
                            <div style={{ width: '64px', height: '64px', background: 'var(--primary)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                <BookOpen size={30} />
                            </div>
                            <div>
                                <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>{selectedCourse ? selectedCourse.title : (formData.plan === 'monthly' ? 'Elite Membership' : 'Legend Membership')}</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>{selectedCourse ? selectedCourse.category : 'All-Access Platform'}</div>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontWeight: 600 }}>
                                <span>Platform Access</span>
                                <span style={{ color: 'var(--text-main)' }}>{selectedCourse ? 'Lifetime' : 'Ongoing'}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontWeight: 600 }}>
                                <span>Mentor Support</span>
                                <span style={{ color: 'var(--text-main)' }}>Included</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontWeight: 600 }}>
                                <span>Study Catalog Access</span>
                                <span style={{ color: 'var(--text-main)' }}>Full</span>
                            </div>
                            <div style={{ height: '1px', background: 'rgba(0,0,0,0.05)', margin: '0.5rem 0' }}></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.5rem', fontWeight: 900 }}>
                                <span>Total Due</span>
                                <span className="gradient-text">{selectedCourse ? selectedCourse.price : (formData.plan === 'monthly' ? '₹499' : '₹4,999')}</span>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {[
                                { icon: <Shield size={18} />, text: 'Secure SSA-Standard Payment', color: '#10b981' },
                                { icon: <Lock size={18} />, text: 'AES-256 Bit Encryption', color: '#6366f1' },
                                { icon: <CheckCircle2 size={18} />, text: '30-Day Happiness Guarantee', color: '#ec4899' }
                            ].map((trust, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(0,0,0,0.02)', borderRadius: '16px', fontSize: '0.85rem', fontWeight: 700, color: trust.color }}>
                                    {trust.icon}
                                    {trust.text}
                                </div>
                            ))}
                        </div>
                    </div>

                    <p style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.6', padding: '0 2rem' }}>
                        Need help with your enrolment? Contact our support dean at <strong style={{ color: 'var(--primary)' }}>help@archanaedu.com</strong>
                    </p>
                </div>
            </div>

            <style>{`
                input:focus {
                    border-color: var(--primary) !important;
                    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
                }
            `}</style>
        </div>
    );
};

export default Checkout;
