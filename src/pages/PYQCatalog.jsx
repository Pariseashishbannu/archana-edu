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
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 className="section-title">Section-wise <span className="gradient-text">PYQ Solver</span></h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
                    Select a unit to start practicing Previous Year Questions. Master each section strategically for the UGC-NET exam.
                </p>
            </div>

            <div className="grid">
                {sections.map((section) => (
                    <div key={section} className="card glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'all 0.3s' }}>
                        <div style={{
                            background: 'rgba(99, 102, 241, 0.1)',
                            width: '64px',
                            height: '64px',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--primary)',
                            marginBottom: '1.5rem'
                        }}>
                            {icons[section] || <ClipboardList size={32} />}
                        </div>
                        <h3 style={{ marginBottom: '0.5rem' }}>{section}</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem', flexGrow: 1 }}>
                            Practice {pyqData[section].length} essential questions from previous years.
                        </p>
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <Link to={`/quiz-player?section=${section}&mode=practice`} className="btn btn-secondary" style={{ padding: '0.6rem 1rem', fontSize: '0.85rem', flex: 1 }}>
                                Practice
                            </Link>
                            <Link to={`/quiz-player?section=${section}&mode=mock`} className="btn btn-primary" style={{ padding: '0.6rem 1rem', fontSize: '0.85rem', flex: 1 }}>
                                Mock Test
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PYQCatalog;
