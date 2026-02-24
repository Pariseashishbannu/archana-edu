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
                <div className="card glass" style={{ maxWidth: '500px', margin: '0 auto', padding: '3rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Please Sign In</h2>
                    <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>You need to be logged in to view your dashboard.</p>
                    <button className="btn btn-primary" onClick={() => navigate('/auth')}>Sign In</button>
                </div>
            </div>
        );
    }

    const displayName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Student';
    const { badges } = gamificationData;
    const mockLeaderboard = [
        { name: 'Sunaina J.', points: 1250, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100' },
        { name: 'Rahul K.', points: 1100, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100' },
        { name: displayName, points: 850, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100', isUser: true },
        { name: 'Priya S.', points: 720, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100' }
    ];

    return (
        <div className="container section animate-fade-in">
            {/* Header / Profile Section */}
            <div className="card glass" style={{
                padding: '2.5rem',
                marginBottom: '2rem',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(236, 72, 153, 0.05))',
                borderRadius: '24px',
                border: '1px solid rgba(0,0,0,0.05)'
            }}>
            <div className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                    <div className="profile-info" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <div style={{
                            width: '110px',
                            height: '110px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '4px solid var(--white)',
                            boxShadow: 'var(--shadow)',
                            background: 'white'
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                                alt="Profile"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div>
                            <span style={{
                                background: 'var(--primary)',
                                color: 'white',
                                padding: '0.2rem 0.8rem',
                                borderRadius: '20px',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                marginBottom: '0.5rem',
                                display: 'inline-block'
                            }}>Student Account</span>
                            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>Hey, <span className="gradient-text">{displayName}</span>!</h1>
                            <p style={{ color: 'var(--text-muted)' }}>Ready for some literature exploration today?</p>
                        </div>
                    </div>

                    <div className="dashboard-stats" style={{ display: 'flex', gap: '1.5rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)' }}>2</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>COURSES</div>
                        </div>
                        <div style={{ width: '1px', height: '40px', background: 'rgba(0,0,0,0.1)', alignSelf: 'center' }}></div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--secondary)' }}>850</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>POINTS</div>
                        </div>
                        <div style={{ width: '1px', height: '40px', background: 'rgba(0,0,0,0.1)', alignSelf: 'center' }}></div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#10b981' }}>85%</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>PROGRESS</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Badges Quick View */}
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem', overflowX: 'auto', paddingBottom: '1rem' }}>
                {badges.map(badge => (
                    <div key={badge.id} className="glass" style={{
                        padding: '1rem 1.5rem',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        minWidth: 'max-content',
                        border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                        <span style={{ fontSize: '2rem' }}>{badge.icon}</span>
                        <div>
                            <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{badge.title}</div>
                            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{badge.requirement}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="dashboard-grid grid" style={{ gridTemplateColumns: '1.2fr 0.8fr', gap: '2.5rem' }}>
                {/* Main Content: Courses & Leaderboard */}
                <div style={{ display: 'grid', gap: '2.5rem' }}>
                    <div className="card glass" style={{ padding: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <BookOpen size={24} color="var(--primary)" /> Active Learning
                            </h2>
                            <button style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem' }}>View All Courses</button>
                        </div>

                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {[
                                { title: 'UGC-NET Paper 1 Full Course', progress: 65, lastActive: '2 hours ago', icon: <Star size={16} /> },
                                { title: 'Mastering Literary Theory', progress: 30, lastActive: 'Yesterday', icon: <BookOpen size={16} /> }
                            ].map((course, i) => (
                                <div key={i} className="glass" style={{ padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.03)', background: 'rgba(255,255,255,0.5)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                        <div>
                                            <h4 style={{ marginBottom: '0.25rem', fontSize: '1.1rem' }}>{course.title}</h4>
                                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                                <Clock size={12} /> Last accessed: {course.lastActive}
                                            </p>
                                        </div>
                                        <button className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>Continue</button>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{ flexGrow: 1, height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                                            <div style={{ width: `${course.progress}%`, height: '100%', background: 'var(--primary)', borderRadius: '4px' }}></div>
                                        </div>
                                        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>{course.progress}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Leaderboard Section */}
                    <div className="card glass" style={{ padding: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Trophy size={24} color="#f59e0b" /> Top Scholars
                        </h2>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {mockLeaderboard.map((scholar, i) => (
                                <div key={i} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '1rem',
                                    background: scholar.isUser ? 'rgba(99, 102, 241, 0.05)' : 'white',
                                    borderRadius: '12px',
                                    border: scholar.isUser ? '1px solid var(--primary)' : '1px solid rgba(0,0,0,0.05)'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <span style={{ fontWeight: 800, color: 'var(--text-muted)', width: '20px' }}>{i + 1}</span>
                                        <img src={scholar.avatar} alt={scholar.name} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                                        <span style={{ fontWeight: 600 }}>{scholar.name} {scholar.isUser && '(You)'}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Zap size={16} color="var(--secondary)" />
                                        <span style={{ fontWeight: 700 }}>{scholar.points} <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>pts</span></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar: Subs & Notices */}
                <div style={{ display: 'grid', gap: '2.5rem', alignContent: 'start' }}>
                    <div className="card glass" style={{ padding: '2rem' }}>
                        <h2 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <CreditCard size={22} color="var(--secondary)" /> My Subscription
                        </h2>
                        <div style={{ padding: '1.5rem', background: 'rgba(236, 72, 153, 0.03)', borderRadius: '20px', border: '1px solid rgba(236, 72, 153, 0.08)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <div style={{ color: 'var(--secondary)', background: 'white', padding: '0.75rem', borderRadius: '14px', boxShadow: 'var(--shadow-sm)' }}><CreditCard size={20} /></div>
                                <div>
                                    <h4 style={{ fontSize: '1rem', marginBottom: '0.1rem' }}>Victorian Classics Club</h4>
                                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--secondary)' }}>PREMIUM</span>
                                </div>
                            </div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem', paddingLeft: '0.5rem' }}>
                                <strong>Next billing:</strong> 15 Mar 2026
                            </div>
                            <button className="btn btn-secondary" style={{ width: '100%', padding: '0.6rem', fontSize: '0.9rem' }}>Manage Billing</button>
                        </div>
                    </div>

                    <div className="card glass" style={{
                        background: 'var(--dark)',
                        color: 'white',
                        padding: '2rem',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'var(--primary)', opacity: 0.2, filter: 'blur(40px)', borderRadius: '50%' }}></div>
                        <h3 style={{ color: 'white', marginBottom: '1rem', position: 'relative' }}>Latest Update</h3>
                        <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '2rem', lineHeight: '1.5', position: 'relative' }}>
                            New Section-wise PYQs for Unit 5 are now officially live! Check your readiness today.
                        </p>
                        <button className="btn btn-primary" style={{ width: '100%', padding: '0.65rem', fontSize: '0.9rem', position: 'relative' }}>Practice Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
