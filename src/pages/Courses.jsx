import React from 'react';
import courses from '../data/courses.json';
import { Book, Clock, Star } from 'lucide-react';

const Courses = () => {
    return (
        <div className="container section animate-fade-in">
            <h1 className="section-title">Explore Our <span className="gradient-text">Literature</span> Courses</h1>
            <div className="grid">
                {courses.map((course) => (
                    <div key={course.id} className="card glass" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '0', overflow: 'hidden' }}>
                        <div style={{ height: '180px', width: '100%', position: 'relative' }}>
                            <img
                                src={`https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=600&auto=format&fit=crop`}
                                alt={course.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            {course.badge && (
                                <span style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'var(--secondary)',
                                    color: 'white',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '20px',
                                    fontSize: '0.75rem',
                                    fontWeight: 700
                                }}>
                                    {course.badge}
                                </span>
                            )}
                        </div>
                        <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ marginBottom: '1rem' }}>{course.title}</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flexGrow: 1 }}>{course.description}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1rem' }}>
                                <span style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--primary)' }}>{course.price}</span>
                                <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Enroll Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
