import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { User, LogOut, Menu, X, Star } from 'lucide-react';
import { AuthProvider, useAuth } from './lib/AuthContext';

const Home = lazy(() => import('./pages/Home'));
const Courses = lazy(() => import('./pages/Courses'));
const ReadingGroups = lazy(() => import('./pages/ReadingGroups'));
const QuizPage = lazy(() => import('./pages/QuizPage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Checkout = lazy(() => import('./pages/Checkout'));
const PYQCatalog = lazy(() => import('./pages/PYQCatalog'));
const DiscussionLounge = lazy(() => import('./pages/DiscussionLounge'));
const NotFound = lazy(() => import('./pages/NotFound'));
const AuthPage = lazy(() => import('./pages/AuthPage'));
const PaymentPage = lazy(() => import('./pages/PaymentPage'));


const navLinks = [
    { to: '/courses', label: 'Courses' },
    { to: '/reading-groups', label: 'Reading Groups' },
    { to: '/quizzes', label: 'PYQ Solver' },
    { to: '/community', label: 'Community' },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { user, signOut } = useAuth();

    React.useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    const handleSignOut = async () => {
        await signOut();
        navigate('/');
    };

    return (
        <nav className="glass navbar" style={{ height: '80px', borderBottom: '1px solid rgba(0,0,0,0.05)', background: 'rgba(255,255,255,0.7)' }}>
            <div className="container navbar-inner">
                <Link to="/" className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', fontWeight: 800 }}>
                    <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                        <Star size={20} fill="white" />
                    </div>
                    Archana<span className="gradient-text">Edu</span>
                </Link>

                <div className="navbar-links">
                    {navLinks.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`navbar-link${location.pathname === link.to ? ' navbar-link--active' : ''}`}
                            style={{ fontWeight: 700, fontSize: '0.95rem' }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div style={{ width: '1px', height: '24px', background: 'rgba(0,0,0,0.1)', margin: '0 0.5rem' }}></div>
                    {user ? (
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div className="glass" style={{ padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
                                850 pts
                            </div>
                            <Link to="/dashboard" className="btn btn-primary shadow-sm" style={{ padding: '0.6rem 1.5rem', borderRadius: '12px' }}>
                                <User size={18} />
                            </Link>
                            <button
                                className="btn btn-secondary"
                                style={{ padding: '0.6rem', borderRadius: '12px' }}
                                onClick={handleSignOut}
                            >
                                <LogOut size={18} />
                            </button>
                        </div>
                    ) : (
                        <Link to="/auth" className="btn btn-primary shimmer" style={{ padding: '0.7rem 2rem', borderRadius: '12px', textDecoration: 'none', fontWeight: 700 }}>
                            Join Pro
                        </Link>
                    )}
                </div>

                <button className="navbar-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation menu">
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {mobileOpen && (
                <div className="navbar-mobile glass animate-fade-in" style={{ padding: '2rem' }}>
                    {navLinks.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`navbar-mobile-link${location.pathname === link.to ? ' navbar-link--active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                        {user ? (
                            <Link to="/dashboard" className="btn btn-primary" style={{ width: '100%' }}>
                                My Dashboard
                            </Link>
                        ) : (
                            <Link to="/auth" className="btn btn-primary" style={{ width: '100%', textDecoration: 'none' }}>
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

const AppRoutes = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="container section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                <div className="gradient-text animate-pulse" style={{ fontSize: '1.5rem', fontWeight: 800 }}>Initializing Academic Portal...</div>
            </div>
        );
    }

    return (
        <Suspense fallback={
            <div className="container section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                <div className="gradient-text animate-pulse" style={{ fontSize: '1.5rem', fontWeight: 800 }}>Syncing Scholar Data...</div>
            </div>
        }>
            <div style={{ paddingTop: '80px' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/reading-groups" element={<ReadingGroups />} />
                    <Route path="/quizzes" element={<PYQCatalog />} />
                    <Route path="/quiz-player" element={<QuizPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/community" element={<DiscussionLounge />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/payment" element={<PaymentPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Suspense>
    );
};

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                    <Navbar />
                    <main style={{ flexGrow: 1 }}>
                        <AppRoutes />
                    </main>

                    <footer className="section" style={{ background: '#0a0a0c', color: 'white', padding: '100px 0 50px' }}>
                        <div className="container">
                            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '4rem', marginBottom: '80px' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', color: 'white' }}>
                                        Archana<span className="gradient-text">Edu</span>
                                    </h3>
                                    <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.7', marginBottom: '2rem', maxWidth: '300px' }}>
                                        Empowering literary scholars with premium tools, expert mentorship, and a community of excellence.
                                    </p>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', transition: 'all 0.3s' }} className="hover-lift"></div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '2rem' }}>Learning</h4>
                                    <div style={{ display: 'grid', gap: '1rem' }}>
                                        <Link to="/courses" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }} className="hover-lift">All Courses</Link>
                                        <Link to="/reading-groups" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Reading Circle</Link>
                                        <Link to="/quizzes" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>PYQ Solver</Link>
                                        <Link to="/community" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Student Lounge</Link>
                                    </div>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '2rem' }}>Resources</h4>
                                    <div style={{ display: 'grid', gap: '1rem' }}>
                                        <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Study Planners</a>
                                        <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Literature Blog</a>
                                        <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>UGC-NET Tips</a>
                                        <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Help Center</a>
                                    </div>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '2rem' }}>Legal</h4>
                                    <div style={{ display: 'grid', gap: '1rem' }}>
                                        <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Privacy Policy</a>
                                        <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Terms of Service</a>
                                        <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Cookie Policy</a>
                                        <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Security</a>
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem' }}>&copy; 2026 Archana Education Platform. Built for Scholars.</p>
                                <div style={{ display: 'flex', gap: '1rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem' }}>
                                    <span>English (India)</span>
                                    <span>Support: hello@archanaedu.com</span>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </AuthProvider>
        </Router>
    );
};


export default App;
