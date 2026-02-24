import React from 'react';
import { Link } from 'react-router-dom';
import groups from '../data/readingGroups.json';
import { Users, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

const ReadingGroups = () => {
    return (
        <div className="container section animate-fade-in">
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.25rem', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '50px', color: 'var(--secondary)', fontWeight: 800, fontSize: '0.85rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    <Users size={16} /> Community & Discussion
                </div>
                <h1 className="section-title" style={{ marginBottom: '1.5rem' }}>Monthly <span className="gradient-text">Reading Groups</span></h1>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                    Deep-dive into classical and modern literature with a community of scholars. Interactive sessions, expert analysis, and peer-to-peer discussions.
                </p>
            </div>

            {/* How it Works */}
            <div className="card glass-premium" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)', marginBottom: '5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
                    {[
                        { title: 'Read at Your Pace', desc: 'Every month we pick a masterpiece. Follow our curated reading schedule.', icon: '📖' },
                        { title: 'Weekly Briefings', desc: 'Get expert insights and context videos delivered to your dashboard.', icon: '✉️' },
                        { title: 'Live Meetups', desc: 'Join the weekend live discussion group hosted by our core mentors.', icon: '🎥' }
                    ].map((step, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{step.icon}</div>
                            <h4 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>{step.title}</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Groups Grid */}
            <div className="grid" style={{ gap: '3rem' }}>
                {groups.map((group, i) => (
                    <div key={group.id} className="card glass glow-hover" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(0,0,0,0.03)' }}>
                        <div style={{ height: '240px', width: '100%', position: 'relative' }}>
                            <img
                                src={i === 0 ? "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format" : "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=600&auto=format"}
                                alt={group.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
                            <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem' }}>
                                <div style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', color: 'white', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 800, border: '1px solid rgba(255,255,255,0.3)' }}>
                                    {group.subscription}
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: '2.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                                <div style={{ width: '40px', height: '40px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                                    <Users size={20} />
                                </div>
                                <h3 style={{ fontSize: '1.6rem' }}>{group.title}</h3>
                            </div>
                            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)', fontSize: '1rem', flexGrow: 1, lineHeight: '1.6' }}>{group.description}</p>

                            <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 600 }}>
                                    <Calendar size={18} color="var(--primary)" />
                                    <span>Next Meeting: {group.nextMeet}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: '#10b981', fontWeight: 600 }}>
                                    <CheckCircle2 size={18} />
                                    <span>Curated Reading List Included</span>
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                                <div>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Monthly</div>
                                    <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)' }}>{group.price}</span>
                                </div>
                                <Link to="/checkout" className="btn btn-primary shimmer" style={{ padding: '0.8rem 1.5rem', textDecoration: 'none', borderRadius: '16px' }}>
                                    Subscribe <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* FAQ Section */}
            <div style={{ marginTop: '8rem', maxWidth: '800px', margin: '8rem auto 0' }}>
                <h2 className="section-title" style={{ fontSize: '2rem' }}>Frequently Asked <span className="gradient-text">Questions</span></h2>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {[
                        { q: 'How do I join the live session?', a: 'Once you subscribe, you will see a "Join Meeting" button on your dashboard 15 minutes before the scheduled time.' },
                        { q: 'What if I miss a meeting?', a: 'All sessions are recorded and uploaded to your library within 24 hours of the live call.' },
                        { q: 'Can I switch groups midway?', a: 'Yes, you can manage your subscription and change your active group from your account settings at any time.' }
                    ].map((item, i) => (
                        <div key={i} className="glass" style={{ padding: '1.5rem 2rem', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.03)' }}>
                            <h4 style={{ marginBottom: '0.5rem', color: 'var(--dark)' }}>{item.q}</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default ReadingGroups;
