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
        <div className="container section animate-fade-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
            <div className="card glass" style={{ maxWidth: '460px', width: '100%', padding: '3rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                        {isLogin ? 'Welcome Back' : 'Create Account'}
                    </h1>
                    <p style={{ color: 'var(--text-muted)' }}>
                        {isLogin ? 'Sign in to continue your learning journey' : 'Join Archana Education today'}
                    </p>
                </div>

                {error && (
                    <div style={{
                        padding: '0.75rem 1rem',
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.2)',
                        borderRadius: '12px',
                        color: '#ef4444',
                        fontSize: '0.9rem',
                        marginBottom: '1.5rem'
                    }}>
                        {error}
                    </div>
                )}

                {success && (
                    <div style={{
                        padding: '0.75rem 1rem',
                        background: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid rgba(16, 185, 129, 0.2)',
                        borderRadius: '12px',
                        color: '#10b981',
                        fontSize: '0.9rem',
                        marginBottom: '1.5rem'
                    }}>
                        {success}
                    </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.25rem' }}>
                    {!isLogin && (
                        <div style={{ display: 'grid', gap: '0.5rem' }}>
                            <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Full Name</label>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="Your full name"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.85rem 1rem 0.85rem 2.75rem',
                                        borderRadius: '12px',
                                        border: '1px solid rgba(0,0,0,0.1)',
                                        fontSize: '1rem',
                                        outline: 'none',
                                    }}
                                />
                                <User size={18} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                            </div>
                        </div>
                    )}

                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                        <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Email</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                required
                                style={{
                                    width: '100%',
                                    padding: '0.85rem 1rem 0.85rem 2.75rem',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(0,0,0,0.1)',
                                    fontSize: '1rem',
                                    outline: 'none',
                                }}
                            />
                            <Mail size={18} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                        <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Password</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Min. 6 characters"
                                required
                                style={{
                                    width: '100%',
                                    padding: '0.85rem 1rem 0.85rem 2.75rem',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(0,0,0,0.1)',
                                    fontSize: '1rem',
                                    outline: 'none',
                                }}
                            />
                            <Lock size={18} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                        style={{ width: '100%', height: '52px', marginTop: '0.5rem' }}
                    >
                        {loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
                        {!loading && <ArrowRight size={18} />}
                    </button>
                </form>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                        <button
                            onClick={() => { setIsLogin(!isLogin); setError(''); setSuccess(''); }}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--primary)',
                                fontWeight: 700,
                                cursor: 'pointer',
                                fontSize: '0.9rem'
                            }}
                        >
                            {isLogin ? 'Sign Up' : 'Sign In'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
