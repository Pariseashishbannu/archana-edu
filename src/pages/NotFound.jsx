import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="container section animate-fade-in" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ fontSize: '8rem', fontWeight: 800, lineHeight: 1 }} className="gradient-text">404</h1>
        <h2 style={{ marginBottom: '1rem' }}>Page Not Found</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '400px' }}>
            The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">Go Home</Link>
    </div>
);

export default NotFound;
