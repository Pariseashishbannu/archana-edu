import React, { useState } from 'react';
import { MessageCircle, Send, Users, Star, TrendingUp } from 'lucide-react';
import gamificationData from '../data/gamification.json';

const DiscussionLounge = () => {
    const [messages, setMessages] = useState(gamificationData.messages);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        const msg = {
            user: 'You',
            text: newMessage,
            timestamp: new Date().toISOString()
        };
        setMessages([...messages, msg]);
        setNewMessage('');
    };

    return (
        <div className="container section animate-fade-in">
            {/* Header */}
            <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.25rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50px', color: '#10b981', fontWeight: 800, fontSize: '0.85rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    <Users size={16} /> Community Live
                </div>
                <h1 className="section-title" style={{ marginBottom: '1rem' }}>Student <span className="gradient-text">Community Lounge</span></h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>The central hub for literature aspirants to brainstorm, share, and grow together.</p>
            </div>

            <div className="community-grid grid" style={{ gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', height: '75vh' }}>
                {/* Chat Area */}
                <div className="card glass-premium" style={{ display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
                    <div style={{ padding: '1.5rem 2.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.4)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '12px', height: '12px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)' }}></div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem' }}>General Study Circle</h3>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>12 scholars online now</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button className="glass" style={{ width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0,0,0,0.05)' }}>
                                <Star size={18} color="var(--primary)" />
                            </button>
                        </div>
                    </div>

                    <div style={{ flexGrow: 1, padding: '2rem 2.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {messages.map((msg, i) => (
                            <div key={i} style={{
                                alignSelf: msg.user === 'You' ? 'flex-end' : 'flex-start',
                                maxWidth: '75%'
                            }}>
                                <div style={{
                                    fontSize: '0.8rem',
                                    color: 'var(--text-muted)',
                                    marginBottom: '0.5rem',
                                    textAlign: msg.user === 'You' ? 'right' : 'left',
                                    fontWeight: 700,
                                    letterSpacing: '0.5px'
                                }}>
                                    {msg.user} • {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </div>
                                <div style={{
                                    padding: '1.25rem 1.5rem',
                                    borderRadius: msg.user === 'You' ? '24px 4px 24px 24px' : '4px 24px 24px 24px',
                                    background: msg.user === 'You' ? 'linear-gradient(135deg, var(--primary), var(--primary-hover))' : 'white',
                                    color: msg.user === 'You' ? 'white' : 'var(--text-main)',
                                    boxShadow: '0 10px 20px -5px rgba(0,0,0,0.05)',
                                    border: msg.user === 'You' ? 'none' : '1px solid rgba(0,0,0,0.03)',
                                    lineHeight: '1.6'
                                }}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSendMessage} style={{ padding: '1.5rem 2.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', display: 'flex', gap: '1rem', background: 'rgba(255,255,255,0.4)' }}>
                        <div style={{ flexGrow: 1, position: 'relative' }}>
                            <input
                                type="text"
                                placeholder="Share an insight or ask a question..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                style={{ width: '100%', padding: '1rem 1.5rem', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.1)', outline: 'none', background: 'white' }}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary shimmer" style={{ width: '54px', height: '54px', padding: '0', borderRadius: '16px' }}>
                            <Send size={20} />
                        </button>
                    </form>
                </div>

                {/* Sidebar */}
                <div style={{ display: 'grid', gap: '2rem', alignContent: 'start' }}>
                    {/* User Profile Card */}
                    <div className="card glass-premium" style={{ padding: '1.5rem', borderRadius: '24px', textAlign: 'center' }}>
                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 1rem', overflow: 'hidden', border: '4px solid white', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100" alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h4 style={{ fontSize: '1.1rem' }}>Scholar Parise</h4>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Level 12 • 850 Points</div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                            <div className="glass" style={{ padding: '0.6rem', borderRadius: '10px', fontSize: '0.75rem', fontWeight: 700 }}>Profile</div>
                            <div className="glass" style={{ padding: '0.6rem', borderRadius: '10px', fontSize: '0.75rem', fontWeight: 700 }}>Settings</div>
                        </div>
                    </div>

                    {/* Trending Topics */}
                    <div className="card glass" style={{ padding: '2rem', borderRadius: '24px' }}>
                        <h4 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <TrendingUp size={20} color="var(--primary)" /> Trending Topics
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {['#UGCNET2026', '#Postmodernism', '#Paper1Tips', '#LiteraryCriticism', '#EnglishHacks'].map(tag => (
                                <div key={tag} style={{
                                    padding: '0.5rem 1rem',
                                    background: 'rgba(255,255,255,0.7)',
                                    borderRadius: '50px',
                                    fontSize: '0.85rem',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    border: '1px solid rgba(0,0,0,0.05)'
                                }}>
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pinned Insights */}
                    <div className="card glass" style={{ padding: '2rem', borderRadius: '24px', background: 'rgba(99, 102, 241, 0.05)' }}>
                        <h4 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Star size={20} color="#f59e0b" fill="#f59e0b" /> Pinned Insights
                        </h4>
                        <div style={{ display: 'grid', gap: '1.25rem' }}>
                            <div style={{ fontSize: '0.9rem', lineHeight: '1.5', paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                                <div style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.25rem' }}>Prof. Elena Gilbert</div>
                                "Focused on T.S. Eliot's 'The Waste Land' for tomorrow's group call. Read Unit 5 notes twice!"
                            </div>
                            <div style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                                <div style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.25rem' }}>Dr. Arjun Varma</div>
                                "Great news! New mock test for Paper 1 will be live at 8PM tonight. Get ready!"
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default DiscussionLounge;
