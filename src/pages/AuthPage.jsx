import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const { signIn, signUp } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        if (isLogin) {
            const { error } = await signIn(email, password);
            if (error) {
                setError(error.message);
            } else {
                navigate('/dashboard');
            }
        } else {
            if (password.length < 6) {
                setError('Password must be at least 6 characters');
                setLoading(false);
                return;
            }
            const { error } = await signUp(email, password, fullName);
            if (error) {
                setError(error.message);
            } else {
                setSuccess('Account created! Check your email to confirm, then sign in.');
                setIsLogin(true);
            }
        }
        setLoading(false);
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', background: 'var(--light)', overflow: 'hidden' }}>
            {/* Left Content Column */}
            <div className="bg-dark" style={{
                flex: '1.2',
                color: 'white',
                padding: '5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background Glow */}
                <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', background: 'var(--primary)', filter: 'blur(150px)', opacity: 0.1 }}></div>
                <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '400px', height: '400px', background: 'var(--secondary)', filter: 'blur(150px)', opacity: 0.1 }}></div>

                <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '2.5rem' }}>
                        <Lock size={16} /> Secure Portal
                    </div>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '2rem', lineHeight: '1.1', color: 'white' }}>
                        The Future of <br /> <span className="gradient-text">Academic Excellence</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', marginBottom: '4rem' }}>
                        Join 15,000+ scholars mastering English Literature & UGC-NET with Elite tools and expert mentorship.
                    </p>

                    <div style={{ display: 'grid', gap: '2.5rem' }}>
                        {[
                            { title: 'Interactive Learning', desc: 'Engage with dynamic course content and live discussions.' },
                            { title: 'Data-Driven Progress', desc: 'Track every milestone with our advanced analytics dashboard.' },
                            { title: 'Global Community', desc: 'Connect with aspirants from across the country in real-time.' }
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <ArrowRight size={20} />
                                </div>
                                <div>
                                    <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{item.title}</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Form Column */}
            <div style={{ flex: '0.8', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem' }}>
                <div className="card glass-premium" style={{ maxWidth: '480px', width: '100%', padding: '3.5rem', borderRadius: '32px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h1 style={{ fontSize: '2.25rem', marginBottom: '0.75rem', fontWeight: 800 }}>
                            {isLogin ? 'Sign In' : 'Create Account'}
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>
                            {isLogin ? 'Welcome back, scholar!' : 'Join our elite academic circle'}
                        </p>
                    </div>

                    {error && (
                        <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '16px', color: '#ef4444', fontSize: '0.9rem', marginBottom: '2rem', display: 'flex', gap: '0.75rem' }}>
                            <div style={{ fontWeight: 800 }}>Error:</div> {error}
                        </div>
                    )}

                    {success && (
                        <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '16px', color: '#10b981', fontSize: '0.9rem', marginBottom: '2rem' }}>
                            {success}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                        {!isLogin && (
                            <div style={{ display: 'grid', gap: '0.75rem' }}>
                                <label style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--dark)' }}>Full Name</label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder="Full Name"
                                        required
                                        style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.08)', fontSize: '1rem', outline: 'none', background: 'rgba(255,255,255,0.8)' }}
                                    />
                                    <User size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }} />
                                </div>
                            </div>
                        )}

                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <label style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--dark)' }}>Email Address</label>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="email@example.com"
                                    required
                                    style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.08)', fontSize: '1rem', outline: 'none', background: 'rgba(255,255,255,0.8)' }}
                                />
                                <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }} />
                            </div>
                        </div>

                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <label style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--dark)' }}>Password</label>
                                {isLogin && <a href="#" style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700 }}>Forgot?</a>}
                            </div>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    required
                                    style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.08)', fontSize: '1rem', outline: 'none', background: 'rgba(255,255,255,0.8)' }}
                                />
                                <Lock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }} />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary shadow-lg shimmer"
                            disabled={loading}
                            style={{ width: '100%', height: '60px', marginTop: '1rem', borderRadius: '16px', fontSize: '1.1rem', fontWeight: 800 }}
                        >
                            {loading ? 'Authenticating...' : (isLogin ? 'Sign In Now' : 'Create My Account')}
                            {!loading && <ArrowRight size={20} />}
                        </button>
                    </form>

                    <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 600 }}>
                            {isLogin ? "New to our platform?" : 'Already a member?'}{' '}
                            <button
                                onClick={() => { setIsLogin(!isLogin); setError(''); setSuccess(''); }}
                                style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: 800, cursor: 'pointer', fontSize: '0.95rem' }}
                            >
                                {isLogin ? 'Create Account' : 'Login Here'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AuthPage;
