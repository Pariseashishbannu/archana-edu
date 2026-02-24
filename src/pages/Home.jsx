import React from 'react';
import { Link } from 'react-router-dom';
import {
    CheckCircle2,
    Users,
    BookOpen,
    Trophy,
    ArrowRight,
    Quote,
    Sparkles,
    MousePointer2,
    Zap,
    MessageSquare,
    PlayCircle
} from 'lucide-react';

const Home = () => (
    <div className="animate-fade-in">
        {/* HERO SECTION */}
        <header className="section" style={{ padding: '140px 0 100px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, opacity: 0.05 }}>
                <div style={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px', background: 'var(--primary)', filter: 'blur(100px)', borderRadius: '50%' }}></div>
                <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '300px', height: '300px', background: 'var(--secondary)', filter: 'blur(100px)', borderRadius: '50%' }}></div>
            </div>

            <div className="container hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
                <div style={{ textAlign: 'left' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '50px', color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                        <Sparkles size={16} /> Best for UGC-NET 2026
                    </div>
                    <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', lineHeight: '1.1', fontWeight: 800 }}>
                        The Most <span className="gradient-text">Efficient</span> <br /> Literature Courses
                    </h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '600px', marginBottom: '3rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                        Master Literature & UGC-NET with to-the-point courses, section-wise PYQs, and dedicated reading groups. Stop over-studying, start smart-studying.
                    </p>
                    <div className="hero-cta" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <Link to="/courses" className="btn btn-primary shadow-lg" style={{ height: '60px', padding: '0 2.5rem', fontSize: '1.1rem' }}>
                            Explore Courses <ArrowRight size={20} />
                        </Link>
                        <Link to="/reading-groups" className="btn btn-secondary" style={{ height: '60px', padding: '0 2rem' }}>
                            Join Reading Group
                        </Link>
                    </div>
                </div>
                <div className="glass-premium hero-image glow-hover" style={{
                    borderRadius: 'var(--radius-lg)',
                    height: '500px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    boxShadow: '0 40px 80px -20px rgba(99, 102, 241, 0.25)'
                }}>
                    <img
                        src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop"
                        alt="Literature"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(99, 102, 241, 0.1), transparent)' }}></div>
                    <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', background: 'white', padding: '1rem', borderRadius: '16px', display: 'flex', gap: '0.75rem', alignItems: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                        <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                            <PlayCircle size={24} />
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Intro Video</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>2 Min Preview</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* STATS SECTION */}
        <section style={{ padding: '60px 0', background: 'var(--dark)', color: 'white' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
                    {[
                        { label: 'Active Students', value: '15,000+', icon: <Users size={24} /> },
                        { label: 'Courses Live', value: '45+', icon: <BookOpen size={24} /> },
                        { label: 'Pass Rate', value: '94%', icon: <Trophy size={24} /> },
                        { label: 'PYQs Solved', value: '5,000+', icon: <Zap size={24} /> }
                    ].map((stat, i) => (
                        <div key={i}>
                            <div style={{ color: 'var(--primary)', marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.25rem' }}>{stat.value}</div>
                            <div style={{ fontSize: '0.9rem', opacity: 0.6, letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 600 }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="section bg-light">
            <div className="container">
                <h2 className="section-title">Why Choose <span className="gradient-text">Archana Education?</span></h2>
                <div className="grid">
                    {[
                        { title: 'Section-wise PYQs', desc: 'Strategically organized Previous Year Questions to master every unit with precision.', icon: <CheckCircle2 size={32} /> },
                        { title: 'Bilingual Support', desc: 'Complex literary concepts explained in simple English-Hindi mix for better clarity.', icon: <MessageSquare size={32} /> },
                        { title: 'Reading Groups', desc: 'Interactive monthly subscriptions for deep-diving into classics with Dr. Varma Sir.', icon: <Users size={32} /> }
                    ].map((feature, i) => (
                        <div key={i} className="card glass glow-hover" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>{feature.icon}</div>
                            <h3 style={{ marginBottom: '1rem', color: 'var(--dark)', fontSize: '1.5rem' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* LEARNING PATH SECTION */}
        <section className="section">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="section-title">Your 3-Step <span className="gradient-text">Learning Path</span></h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem', position: 'relative', marginTop: '4rem' }}>
                    {[
                        { step: '01', title: 'Conceptual Clarity', desc: 'Watch concise, to-the-point video lectures on every unit of UGC-NET English.' },
                        { step: '02', title: 'Practice Unit-wise', desc: 'Solve section-wise PYQs after every topic to cement your understanding.' },
                        { step: '03', title: 'Live Discussions', desc: 'Clarify doubts in real-time reading groups and lounge discussions.' }
                    ].map((path, i) => (
                        <div key={i} style={{ position: 'relative' }}>
                            <div style={{ fontSize: '5rem', fontWeight: 900, color: 'var(--primary)', opacity: 0.1, position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)' }}>
                                {path.step}
                            </div>
                            <div className="card glass" style={{ padding: '2.5rem', borderRadius: '24px', position: 'relative', zIndex: 1 }}>
                                <h4 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{path.title}</h4>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{path.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section bg-light" style={{ overflow: 'hidden' }}>
            <div className="container">
                <h2 className="section-title">What Our <span className="gradient-text">Scholars</span> Say</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                    {[
                        { name: 'Ankita Sharma', role: 'Qualified JRF 2025', text: 'Dr. Arjun\'s way of explaining Literary Theory is magical. I cleared JRF in my first attempt only because of this platform!' },
                        { name: 'Rohan Mehta', role: 'Asst. Professor', text: 'The section-wise PYQs are a game changer. No other platform organizes literature content so efficiently.' }
                    ].map((t, i) => (
                        <div key={i} className="card glass-premium" style={{ padding: '3rem', borderRadius: '32px' }}>
                            <Quote size={40} color="var(--primary)" style={{ opacity: 0.3, marginBottom: '1.5rem' }} />
                            <p style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '2rem', lineHeight: '1.6' }}>"{t.text}"</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800 }}>{t.name[0]}</div>
                                <div>
                                    <h5 style={{ fontWeight: 700 }}>{t.name}</h5>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* THE EDUCATORS */}
        <section className="section bg-dark text-white" style={{ padding: '120px 0' }}>
            <div className="container">
                <h2 className="section-title" style={{ color: 'white' }}>Meet Your <span className="gradient-text">Mentors</span></h2>
                <div className="educators-flex" style={{ display: 'flex', justifyContent: 'center', gap: '8rem', textAlign: 'center' }}>
                    <div className="educator glow-hover">
                        <div style={{
                            width: '180px',
                            height: '180px',
                            borderRadius: 'var(--radius-lg)',
                            margin: '0 auto 2rem',
                            overflow: 'hidden',
                            border: '6px solid rgba(255,255,255,0.05)',
                            transform: 'rotate(-3deg)'
                        }}>
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" alt="Bharat Sir" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h4 style={{ color: 'white', fontSize: '1.75rem', marginBottom: '0.5rem' }}>Dr. Arjun Varma</h4>
                        <p style={{ opacity: 0.7, fontWeight: 600 }}>Lead Educator & UGC-NET Expert</p>
                        <p style={{ opacity: 0.5, fontSize: '0.85rem', maxWidth: '300px', margin: '1rem auto' }}>Former IIT-D scholar with 5+ years of experience in English Literature.</p>
                    </div>
                    <div className="educator glow-hover">
                        <div style={{
                            width: '180px',
                            height: '180px',
                            borderRadius: 'var(--radius-lg)',
                            margin: '0 auto 2rem',
                            overflow: 'hidden',
                            border: '6px solid rgba(255,255,255,0.05)',
                            transform: 'rotate(3deg)'
                        }}>
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop" alt="Sunaina Ma'am" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h4 style={{ color: 'white', fontSize: '1.75rem', marginBottom: '0.5rem' }}>Prof. Elena Gilbert</h4>
                        <p style={{ opacity: 0.7, fontWeight: 600 }}>Core Educator (English Literature)</p>
                        <p style={{ opacity: 0.5, fontSize: '0.85rem', maxWidth: '300px', margin: '1rem auto' }}>Specialist in British Literature and Literary Criticism.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* FINAL CTA */}
        <section className="section bg-primary" style={{ padding: '100px 0', background: 'linear-gradient(135deg, var(--primary), #4f46e5)', color: 'white', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1.5rem' }}>Start Your Success Story Today</h2>
                <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto 3rem' }}>Join thousands of scholars who are mastering literature the right way.</p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <Link to="/courses" className="btn" style={{ background: 'white', color: 'var(--primary)', height: '64px', padding: '0 3rem', fontSize: '1.2rem', borderRadius: '16px' }}>Enrol Now</Link>
                    <button className="btn" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', height: '64px', padding: '0 2.5rem', fontSize: '1.2rem', borderRadius: '16px' }}>Free Content</button>
                </div>
            </div>
        </section>
    </div>
);

export default Home;
