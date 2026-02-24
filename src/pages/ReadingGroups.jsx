import React from 'react';
import { Link } from 'react-router-dom';
import groups from '../data/readingGroups.json';
import { Users, Calendar, ArrowRight } from 'lucide-react';

const ReadingGroups = () => {
    return (
        <div className="container section animate-fade-in">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 className="section-title">Monthly <span className="gradient-text">Reading Groups</span></h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
                    Subscribe to our exclusive reading circles and engage in scholarly discussions with peers and experts.
                </p>
            </div>
            <div className="grid">
                {groups.map((group, i) => (
                    <div key={group.id} className="card glass" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'all 0.3s' }}>
                        <div style={{ height: '200px', width: '100%', position: 'relative' }}>
                            <img
                                src={i === 0 ? "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format" : "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=600&auto=format"}
                                alt={group.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}></div>
                            <div style={{ position: 'absolute', bottom: '1rem', left: '1.5rem', color: 'white' }}>
                                <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.9 }}>{group.subscription}</span>
                            </div>
                        </div>
                        <div style={{ padding: '1.5rem 2rem 2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                <div style={{ color: 'var(--primary)' }}><Users size={24} /></div>
                                <h3 style={{ fontSize: '1.5rem' }}>{group.title}</h3>
                            </div>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--text-main)', fontSize: '0.95rem', flexGrow: 1 }}>{group.description}</p>
                            <div style={{ background: 'var(--light)', padding: '0.75rem 1rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                    <Calendar size={14} />
                                    <span>Next Meeting: {group.nextMeet}</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>{group.price}</span>
                                <Link to="/checkout" className="btn btn-primary" style={{ padding: '0.5rem 1rem', textDecoration: 'none', fontSize: '0.9rem' }}>Subscribe <ArrowRight size={18} /></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReadingGroups;
