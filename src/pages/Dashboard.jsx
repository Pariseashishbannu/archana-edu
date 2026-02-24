import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, CreditCard, Star, Clock, ChevronRight, Trophy, Medal, Zap } from 'lucide-react';
import { useAuth } from '../lib/AuthContext';
import gamificationData from '../data/gamification.json';

const Dashboard = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    if (!user) {
        return (
            <div className="container section animate-fade-in" style={{ textAlign: 'center' }}>
                <div className="card glass-premium" style={{ maxWidth: '600px', margin: '15vh auto', padding: '5rem 3rem', borderRadius: '40px' }}>
                    <div style={{ width: '80px', height: '80px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2.5rem', color: 'var(--primary)' }}>
                        <Zap size={40} />
                    </div>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>Unauthorized Access</h2>
                    <p style={{ marginBottom: '3rem', color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 600 }}>Please authenticate to access your personalized dashboard.</p>
                    <button className="btn btn-primary shadow-lg shimmer" style={{ height: '60px', padding: '0 3rem', borderRadius: '18px', fontSize: '1.1rem', fontWeight: 800 }} onClick={() => navigate('/auth')}>Return to Gateway</button>
                </div>
            </div>
        );
    }

    const displayName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Scholar';
    const { badges } = gamificationData;
    const mockLeaderboard = [
        { name: 'Sunaina J.', points: 1250, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100' },
        { name: 'Rahul K.', points: 1100, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100' },
        { name: displayName, points: 850, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100', isUser: true },
        { name: 'Priya S.', points: 720, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100' }
    ];

    return (
        <div className="container section animate-fade-in">
            {/* Immersive Profile Header */}
            <div className="card glass-premium" style={{
                padding: '4rem',
                marginBottom: '3rem',
                background: 'linear-gradient(165deg, rgba(255,255,255,0.9), rgba(99, 102, 241, 0.05))',
                borderRadius: '48px',
                border: '1px solid rgba(255,255,255,0.4)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '250px', height: '250px', background: 'var(--primary)', opacity: 0.03, borderRadius: '50%', filter: 'blur(50px)' }}></div>

                <div className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '3rem', position: 'relative' }}>
                    <div className="profile-info" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
                        <div style={{ position: 'relative' }}>
                            <div style={{
                                width: '130px',
                                height: '130px',
                                borderRadius: '40px',
                                overflow: 'hidden',
                                border: '6px solid white',
                                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
                                background: 'white'
                            }}>
                                <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                                    alt="Profile"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', background: '#10b981', color: 'white', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 900, border: '4px solid white', boxShadow: '0 4px 10px rgba(16, 185, 129, 0.3)' }}>ONLINE</div>
                        </div>
                        <div>
                            <span style={{
                                background: 'rgba(99, 102, 241, 0.1)',
                                color: 'var(--primary)',
                                padding: '0.4rem 1.25rem',
                                borderRadius: '50px',
                                fontSize: '0.75rem',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                marginBottom: '1rem',
                                display: 'inline-block',
                                letterSpacing: '1px'
                            }}>Verified Scholar</span>
                            <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0.5rem', letterSpacing: '-1px' }}>Greetings, <span className="gradient-text">{displayName}</span></h1>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 600 }}>Your intellectual journey is <strong>85% complete</strong> this month.</p>
                        </div>
                    </div>

                    <div className="dashboard-stats" style={{ display: 'flex', gap: '2rem' }}>
                        {[
                            { label: 'Courses', val: '02', color: 'var(--primary)' },
                            { label: 'Points', val: '850', color: 'var(--secondary)' },
                            { label: 'Accuracy', val: '92%', color: '#10b981' }
                        ].map((stat, i) => (
                            <React.Fragment key={i}>
                                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 900, color: stat.color, lineHeight: 1 }}>{stat.val}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', marginTop: '0.5rem' }}>{stat.label}</div>
                                </div>
                                {i < 2 && <div style={{ width: '1px', height: '60px', background: 'rgba(0,0,0,0.05)', alignSelf: 'center' }}></div>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            {/* Achievement Ribbon */}
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '4rem', overflowX: 'auto', paddingBottom: '1rem', scrollbarWidth: 'none' }}>
                {badges.map(badge => (
                    <div key={badge.id} className="glass-premium glow-hover" style={{
                        padding: '1.25rem 2rem',
                        borderRadius: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.25rem',
                        minWidth: 'max-content',
                        background: 'rgba(255,255,255,0.8)',
                        border: '1px solid rgba(0,0,0,0.03)'
                    }}>
                        <div style={{ fontSize: '2.5rem', filter: 'drop-shadow(0 5px 10px rgba(0,0,0,0.1))' }}>{badge.icon}</div>
                        <div>
                            <div style={{ fontWeight: 800, fontSize: '1rem' }}>{badge.title}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>{badge.requirement}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="dashboard-grid grid" style={{ gridTemplateColumns: '1.3fr 0.7fr', gap: '3rem', alignItems: 'start' }}>
                {/* Learning Hub */}
                <div style={{ display: 'grid', gap: '3rem' }}>
                    <div className="card glass-premium" style={{ padding: '3.5rem', borderRadius: '40px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3.5rem' }}>
                            <div>
                                <h2 style={{ fontSize: '2rem', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <BookOpen size={32} color="var(--primary)" /> Academic Enrolments
                                </h2>
                                <p style={{ color: 'var(--text-muted)', fontWeight: 600, marginTop: '0.5rem' }}>Track your progress and continue where you left off</p>
                            </div>
                            <button className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem', borderRadius: '15px', fontWeight: 700 }}>Explore Catalog</button>
                        </div>

                        <div style={{ display: 'grid', gap: '2rem' }}>
                            {[
                                { title: 'UGC-NET Strategic Paper 1', progress: 65, status: 'Active Research', instructor: 'Dr. Arjun Varma' },
                                { title: 'Modern Literary Theory Mastery', progress: 30, status: 'Foundation Stage', instructor: 'Prof. Elena Gilbert' }
                            ].map((course, i) => (
                                <div key={i} className="glass glow-hover" style={{
                                    padding: '2.5rem',
                                    borderRadius: '32px',
                                    border: '1px solid rgba(0,0,0,0.04)',
                                    background: 'rgba(255,255,255,0.5)',
                                    position: 'relative'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                                        <div>
                                            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{course.status}</span>
                                            <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '0.5rem' }}>{course.title}</h4>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem', opacity: 0.7 }}>
                                                <div style={{ width: '18px', height: '18px', background: 'rgba(0,0,0,0.1)', borderRadius: '50%' }}></div>
                                                <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{course.instructor}</span>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary shadow-sm" style={{ height: '48px', padding: '0 2rem', borderRadius: '14px', fontWeight: 800 }}>Resume Module</button>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                        <div style={{ flexGrow: 1, height: '12px', background: 'rgba(0,0,0,0.05)', borderRadius: '20px', overflow: 'hidden', padding: '3px' }}>
                                            <div className="shimmer" style={{ width: `${course.progress}%`, height: '100%', background: 'var(--primary)', borderRadius: '20px' }}></div>
                                        </div>
                                        <span style={{ fontSize: '1.1rem', fontWeight: 900 }}>{course.progress}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Elite Leaderboard */}
                    <div className="card glass-premium" style={{ padding: '3.5rem', borderRadius: '40px' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Trophy size={32} color="#f59e0b" /> Hall of Scholars
                        </h2>
                        <div style={{ display: 'grid', gap: '1.25rem' }}>
                            {mockLeaderboard.map((scholar, i) => (
                                <div key={i} className="glow-hover" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '1.5rem 2rem',
                                    background: scholar.isUser ? 'rgba(99, 102, 241, 0.03)' : 'white',
                                    borderRadius: '24px',
                                    border: scholar.isUser ? '2px solid var(--primary)' : '1px solid rgba(0,0,0,0.03)',
                                    transform: scholar.isUser ? 'scale(1.02)' : 'scale(1)',
                                    zIndex: scholar.isUser ? 2 : 1
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                                        <div style={{ width: '32px', textAlign: 'center', fontSize: '1.25rem', fontWeight: 900, color: i < 3 ? 'var(--primary)' : '#cbd5e1' }}>
                                            {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i + 1}
                                        </div>
                                        <div style={{ position: 'relative' }}>
                                            <img src={scholar.avatar} alt={scholar.name} style={{ width: '56px', height: '56px', borderRadius: '18px', objectFit: 'cover', border: '3px solid white', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }} />
                                            {scholar.isUser && <div style={{ position: 'absolute', top: '-5px', right: '-5px', background: 'var(--primary)', color: 'white', fontSize: '0.6rem', padding: '0.2rem 0.5rem', borderRadius: '10px', fontWeight: 800 }}>YOU</div>}
                                        </div>
                                        <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>{scholar.name}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(245, 158, 11, 0.1)', padding: '0.6rem 1.25rem', borderRadius: '50px', color: '#f59e0b' }}>
                                        <Zap size={18} fill="#f59e0b" />
                                        <span style={{ fontWeight: 900, fontSize: '1rem' }}>{scholar.points} EXP</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tactical Sidebar */}
                <div style={{ display: 'grid', gap: '3rem', position: 'sticky', top: '100px' }}>
                    <div className="card glass-premium" style={{ padding: '2.5rem', borderRadius: '32px' }}>
                        <h2 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Medal size={24} color="var(--secondary)" /> Active Tier
                        </h2>
                        <div style={{ padding: '2rem', background: 'rgba(236, 72, 153, 0.04)', borderRadius: '28px', border: '1px solid rgba(236, 72, 153, 0.1)', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                                <div style={{ background: 'white', padding: '1rem', borderRadius: '20px', color: 'var(--secondary)', boxShadow: '0 15px 30px -10px rgba(236, 72, 153, 0.3)' }}><Star size={24} fill="currentColor" /></div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Legendary Access</h4>
                                    <span style={{ fontSize: '0.75rem', fontWeight: 900, color: 'var(--secondary)', letterSpacing: '1px' }}>ANNUAL BILLING</span>
                                </div>
                            </div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem', paddingLeft: '0.5rem', fontWeight: 600 }}>
                                Your scholarship is secured until <strong>Mar 2027</strong>.
                            </div>
                            <button className="btn btn-secondary shadow-sm" style={{ width: '100%', height: '52px', fontSize: '0.95rem', fontWeight: 800, borderRadius: '16px' }}>Enrolment Details</button>
                        </div>
                    </div>

                    <div className="card glass-premium glow-hover" style={{
                        background: 'var(--dark)',
                        color: 'white',
                        padding: '3rem',
                        borderRadius: '32px',
                        border: 'none',
                        textAlign: 'center'
                    }}>
                        <div style={{ width: '64px', height: '64px', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                            <Zap size={32} color="var(--primary)" fill="var(--primary)" />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>Unit 5 LIVE PYQs</h3>
                        <p style={{ opacity: 0.7, fontSize: '1rem', lineHeight: '1.6', marginBottom: '2.5rem' }}>
                            New practice simulations for Structural Research are now available for Legend members.
                        </p>
                        <button className="btn btn-primary shimmer" style={{ width: '100%', height: '60px', borderRadius: '20px', background: 'white', color: 'var(--dark)', fontWeight: 900 }}>
                            Start Practicing <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
