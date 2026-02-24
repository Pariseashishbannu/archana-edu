import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="animate-fade-in">
        <header className="section" style={{ padding: '120px 0 80px', position: 'relative', overflow: 'hidden' }}>
            <div className="container hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
                <div style={{ textAlign: 'left' }}>
                    <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        The Most <span className="gradient-text">Efficient</span> Literature Courses
                    </h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '600px', marginBottom: '2.5rem', color: 'var(--text-muted)' }}>
                        Master Literature & UGC-NET with to-the-point courses, section-wise PYQs, and dedicated reading groups.
                    </p>
                    <div className="hero-cta" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
                        <Link to="/reading-groups" className="btn btn-secondary">Join Reading Group</Link>
                    </div>
                </div>
                <div className="glass hero-image" style={{
                    borderRadius: 'var(--radius)',
                    height: '450px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                }}>
                    <img
                        src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop"
                        alt="Literature"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(99, 102, 241, 0.1), transparent)' }}></div>
                </div>
            </div>
        </header>

        <section className="section bg-light">
            <div className="container">
                <h2 className="section-title">Why Choose Archana Education?</h2>
                <div className="grid">
                    {[
                        { title: 'Section-wise PYQs', desc: 'Strategically organized Previous Year Questions to master every unit.' },
                        { title: 'Full Literature Coverage', desc: 'From Literary Theory to Indian Literature, we cover it all.' },
                        { title: 'Reading Groups', desc: 'Interactive monthly subscriptions for deep-diving into classics.' }
                    ].map((feature, i) => (
                        <div key={i} className="card glass" style={{ padding: '2rem', borderRadius: 'var(--radius)' }}>
                            <h3 style={{ marginBottom: '1rem' }}>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="section bg-dark text-white" style={{ padding: '100px 0' }}>
            <div className="container">
                <h2 className="section-title" style={{ color: 'white' }}>The Educators</h2>
                <div className="educators-flex" style={{ display: 'flex', justifyContent: 'center', gap: '6rem', textAlign: 'center' }}>
                    <div className="educator">
                        <div style={{
                            width: '140px',
                            height: '140px',
                            borderRadius: '50%',
                            margin: '0 auto 1.5rem',
                            overflow: 'hidden',
                            border: '4px solid rgba(255,255,255,0.1)'
                        }}>
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" alt="Bharat Archana" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h4 style={{ color: 'white', fontSize: '1.25rem' }}>Bharat Archana</h4>
                        <p style={{ opacity: 0.7 }}>Lead Educator</p>
                    </div>
                    <div className="educator">
                        <div style={{
                            width: '140px',
                            height: '140px',
                            borderRadius: '50%',
                            margin: '0 auto 1.5rem',
                            overflow: 'hidden',
                            border: '4px solid rgba(255,255,255,0.1)'
                        }}>
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop" alt="Sunaina Jethani" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h4 style={{ color: 'white', fontSize: '1.25rem' }}>Sunaina Jethani</h4>
                        <p style={{ opacity: 0.7 }}>Core Educator</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default Home;
