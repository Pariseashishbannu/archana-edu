import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { User, LogOut, Menu, X } from 'lucide-react';
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

    const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User';

    return (
        <nav className="glass navbar">
            <div className="container navbar-inner">
                <Link to="/" className="navbar-brand">
                    Archana Education
                </Link>

                <div className="navbar-links">
                    {navLinks.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`navbar-link${location.pathname === link.to ? ' navbar-link--active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    {user ? (
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            <Link to="/dashboard" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>
                                <User size={18} /> Dashboard
                            </Link>
                            <button
                                className="btn btn-secondary"
                                style={{ padding: '0.5rem 0.75rem' }}
                                onClick={handleSignOut}
                                title="Sign Out"
                            >
                                <LogOut size={18} />
                            </button>
                        </div>
                    ) : (
                        <Link to="/auth" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', textDecoration: 'none' }}>
                            Sign In
                        </Link>
                    )}
                </div>

                <button className="navbar-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation menu">
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {mobileOpen && (
                <div className="navbar-mobile">
                    {navLinks.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`navbar-mobile-link${location.pathname === link.to ? ' navbar-link--active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    {user ? (
                        <>
                            <Link to="/dashboard" className="navbar-mobile-link navbar-link--active">
                                Dashboard
                            </Link>
                            <button className="btn btn-secondary" style={{ width: '100%', marginTop: '0.5rem' }} onClick={handleSignOut}>
                                <LogOut size={18} /> Sign Out
                            </button>
                        </>
                    ) : (
                        <Link to="/auth" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem', textDecoration: 'none' }}>
                            Sign In
                        </Link>
                    )}
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
                <div className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 700 }}>Loading Archana Education...</div>
            </div>
        );
    }

    return (
        <Suspense fallback={
            <div className="container section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                <div className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 700 }}>Loading Archana Education...</div>
            </div>
        }>
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
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Navbar />

                <main>
                    <AppRoutes />
                </main>

                <footer className="bg-dark text-white section" style={{ padding: '4rem 0 2rem', marginTop: 'auto' }}>
                    <div className="container">
                        <div className="footer-inner">
                            <p>&copy; 2026 Archana Education. All rights reserved.</p>
                            <div style={{ display: 'flex', gap: '2rem' }}>
                                <Link to="/privacy" style={{ color: 'white', textDecoration: 'none' }}>Privacy</Link>
                                <Link to="/terms" style={{ color: 'white', textDecoration: 'none' }}>Terms</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </AuthProvider>
        </Router>
    );
};

export default App;
