import React from 'react';
import { Link } from 'react-router-dom';
import pyqData from '../data/pyqs.json';
import { ClipboardList, BookOpen, MessageSquare, Terminal, ArrowRight } from 'lucide-react';

const icons = {
    "Teaching Aptitude": <BookOpen size={32} />,
    "Research Aptitude": <ClipboardList size={32} />,
    "Communication": <MessageSquare size={32} />,
    "ICT": <Terminal size={32} />
};

const PYQCatalog = () => {
    const sections = Object.keys(pyqData);

    return (
        <div className="container section animate-fade-in">
            {/* Header Area */}
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.25rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '50px', color: 'var(--primary)', fontWeight: 800, fontSize: '0.85rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    <ClipboardList size={16} /> Exam Readiness
                </div>
                <h1 className="section-title" style={{ marginBottom: '1.5rem' }}>Section-wise <span className="gradient-text">PYQ Solver</span></h1>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                    Elite collection of Previous Year Questions, meticulously organized by unit. Track your accuracy and master the exam pattern.
                </p>
            </div>

            {/* Global Stats Bar */}
            <div className="card glass-premium" style={{ padding: '2rem 3rem', borderRadius: 'var(--radius-lg)', marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '3rem' }}>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>4,250+</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Total Questions</div>
                    </div>
                    <div style={{ width: '1px', background: 'rgba(0,0,0,0.1)' }}></div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>85%</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Global Avg. Accuracy</div>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>Filter by Unit:</span>
                    <select className="glass" style={{ padding: '0.6rem 1.25rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', fontSize: '0.9rem', fontWeight: 600 }}>
                        <option>All Units</option>
                        {sections.map(s => <option key={s}>{s}</option>)}
                    </select>
                </div>
            </div>

            <div className="grid" style={{ gap: '2.5rem' }}>
                {sections.map((section, i) => (
                    <div key={section} className="card glass glow-hover" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(0,0,0,0.03)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                            <div style={{
                                background: 'rgba(99, 102, 241, 0.1)',
                                width: '64px',
                                height: '64px',
                                borderRadius: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--primary)'
                            }}>
                                {icons[section] || <ClipboardList size={32} />}
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)' }}>UNIT {i + 1}</div>
                                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary)' }}>{pyqData[section].length} Qs</div>
                            </div>
                        </div>

                        <h3 style={{ marginBottom: '0.75rem', fontSize: '1.4rem' }}>{section}</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2.5rem', flexGrow: 1, lineHeight: '1.5' }}>
                            Advanced problem-set covering core concepts and high-frequency topics from last 10 years.
                        </p>

                        {/* Progress Visual */}
                        <div style={{ marginBottom: '2.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                                <span style={{ color: 'var(--text-muted)' }}>Completion</span>
                                <span style={{ color: 'var(--primary)' }}>{Math.floor(Math.random() * 100)}%</span>
                            </div>
                            <div style={{ width: '100%', height: '8px', background: 'rgba(0,0,0,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                                <div style={{ width: '65%', height: '100%', background: 'linear-gradient(to right, var(--primary), var(--secondary))', borderRadius: '10px' }}></div>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <Link to={`/quiz-player?section=${section}&mode=practice`} className="btn btn-secondary" style={{ padding: '0.8rem', fontSize: '0.9rem', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.08)' }}>
                                Practice Mode
                            </Link>
                            <Link to={`/quiz-player?section=${section}&mode=mock`} className="btn btn-primary shimmer" style={{ padding: '0.8rem', fontSize: '0.9rem', borderRadius: '14px' }}>
                                Start Mock <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default PYQCatalog;
