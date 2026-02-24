import React from 'react';
import { Link } from 'react-router-dom';
import courses from '../data/courses.json';
import { Book, Clock, Star, BookOpen, Search, Users } from 'lucide-react';

const Courses = () => {
    const [selectedCategory, setSelectedCategory] = React.useState('All');
    const categories = ['All', 'Theory', 'Literature', 'World Lit', 'General', 'Cultural'];

    const filteredCourses = selectedCategory === 'All'
        ? courses
        : courses.filter(c => c.category === selectedCategory || (selectedCategory === 'Literature' && c.category === 'Genre'));

    return (
        <div className="container section animate-fade-in">
            {/* Search & Filter Header */}
            <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                    <BookOpen size={16} /> Elite Catalog
                </div>
                <h1 className="section-title" style={{ marginBottom: '2.5rem', fontSize: '3.5rem' }}>
                    Master Your <span className="gradient-text">Literary Destiny</span>
                </h1>

                <div className="glass-premium" style={{
                    maxWidth: '800px',
                    margin: '0 auto 4rem',
                    padding: '0.75rem',
                    borderRadius: '24px',
                    display: 'flex',
                    background: 'rgba(255,255,255,0.8)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)'
                }}>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '0 1.5rem', gap: '1rem' }}>
                        <Search size={20} color="var(--text-muted)" />
                        <input
                            type="text"
                            placeholder="Find a course, module, or topic..."
                            style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', fontSize: '1.1rem', fontWeight: 600 }}
                        />
                    </div>
                    <button className="btn btn-primary shadow-lg shimmer" style={{ padding: '1rem 2.5rem', borderRadius: '16px', fontSize: '1rem' }}>Search Catalog</button>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className="glass glow-hover"
                            style={{
                                padding: '0.75rem 1.75rem',
                                borderRadius: '50px',
                                border: selectedCategory === cat ? '2px solid var(--primary)' : '1px solid rgba(0,0,0,0.05)',
                                background: selectedCategory === cat ? 'var(--primary)' : 'white',
                                color: selectedCategory === cat ? 'white' : 'var(--text-main)',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                transition: 'all 0.3s'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '3rem' }}>
                {filteredCourses.map((course, idx) => (
                    <div key={course.id} className="card glass-premium glow-hover" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '0', overflow: 'hidden', borderRadius: '32px', border: '1px solid rgba(0,0,0,0.03)', transition: 'transform 0.4s' }}>
                        <div style={{ height: '240px', width: '100%', position: 'relative', overflow: 'hidden' }}>
                            <img
                                src={`https://images.unsplash.com/photo-${idx % 2 === 0 ? '1491841573634-28140fc7ced7' : '1513475382585-d06e58f7e05d'}?q=80&w=600&auto=format&fit=crop`}
                                alt={course.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                className="course-card-img"
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}></div>

                            {course.badge && (
                                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'var(--secondary)', color: 'white', padding: '0.5rem 1.25rem', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', boxShadow: '0 10px 20px rgba(236, 72, 153, 0.4)' }}>
                                    {course.badge}
                                </div>
                            )}

                            <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'white', fontSize: '0.8rem', fontWeight: 700, background: 'rgba(255,255,255,0.2)', padding: '0.4rem 0.8rem', borderRadius: '10px', backdropFilter: 'blur(10px)' }}>
                                            <Clock size={14} /> {idx % 2 === 0 ? '12 Weeks' : '8 Weeks'}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'white', fontSize: '0.8rem', fontWeight: 700, background: 'rgba(255,255,255,0.2)', padding: '0.4rem 0.8rem', borderRadius: '10px', backdropFilter: 'blur(10px)' }}>
                                            <Users size={14} /> {course.modules || 10} Units
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#fbbf24', fontWeight: 800 }}>
                                        <Star size={16} fill="#fbbf24" /> 4.9
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: '2.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
                                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{course.category}</span>
                                <span style={{ color: 'rgba(0,0,0,0.1)' }}>|</span>
                                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Intermediate</span>
                            </div>

                            <h3 style={{ marginBottom: '1.25rem', fontSize: '1.6rem', fontWeight: 800, lineHeight: '1.3' }}>{course.title}</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', flexGrow: 1, fontSize: '1rem', lineHeight: '1.7' }}>{course.description}</p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem', padding: '1rem', background: 'rgba(0,0,0,0.02)', borderRadius: '16px' }}>
                                <img src={`https://images.unsplash.com/photo-${idx % 2 === 0 ? '1500648767791-00dcc994a43e' : '1494790108377-be9c29b29330'}?q=80&w=100`} style={{ width: '40px', height: '40px', borderRadius: '12px', objectFit: 'cover' }} />
                                <div>
                                    <div style={{ fontSize: '0.85rem', fontWeight: 800 }}>{idx % 2 === 0 ? 'Dr. Arjun Varma' : 'Prof. Elena Gilbert'}</div>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>Lead Academic Mentor</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                                <div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Full Course Fee</div>
                                    <span style={{ fontWeight: 900, fontSize: '2rem', color: 'var(--dark)' }}>{course.price}</span>
                                </div>
                                <Link to={`/checkout?course=${course.id}`} className="btn btn-primary shadow-lg shimmer" style={{ padding: '1rem 2rem', borderRadius: '16px', textDecoration: 'none', fontWeight: 800 }}>Enrol Now</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                .card:hover .course-card-img {
                    transform: scale(1.1);
                }
            `}</style>
        </div>
    );
};


export default Courses;
