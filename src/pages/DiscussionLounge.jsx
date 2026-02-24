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
            <div style={{ marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Student <span className="gradient-text">Community Lounge</span></h1>
                <p style={{ color: 'var(--text-muted)' }}>Discuss literature, share notes, and connect with fellow aspirants.</p>
            </div>

            <div className="community-grid grid" style={{ gridTemplateColumns: '1fr 350px', gap: '2rem', height: '70vh' }}>
                {/* Chat Area */}
                <div className="card glass" style={{ display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden' }}>
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{ width: '10px', height: '100%', background: '#10b981', borderRadius: '5px' }}></div>
                            <h3 style={{ fontSize: '1.1rem' }}>General Discussion</h3>
                        </div>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>12 members online</span>
                    </div>

                    <div style={{ flexGrow: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {messages.map((msg, i) => (
                            <div key={i} style={{
                                alignSelf: msg.user === 'You' ? 'flex-end' : 'flex-start',
                                maxWidth: '80%'
                            }}>
                                <div style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--text-muted)',
                                    marginBottom: '0.4rem',
                                    textAlign: msg.user === 'You' ? 'right' : 'left',
                                    fontWeight: 700
                                }}>
                                    {msg.user} • {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </div>
                                <div style={{
                                    padding: '1rem 1.25rem',
                                    borderRadius: msg.user === 'You' ? '20px 4px 20px 20px' : '4px 20px 20px 20px',
                                    background: msg.user === 'You' ? 'var(--primary)' : 'white',
                                    color: msg.user === 'You' ? 'white' : 'var(--text-main)',
                                    boxShadow: 'var(--shadow-sm)',
                                    border: msg.user === 'You' ? 'none' : '1px solid rgba(0,0,0,0.03)'
                                }}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSendMessage} style={{ padding: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', display: 'flex', gap: '1rem' }}>
                        <input
                            type="text"
                            className="glass"
                            placeholder="Type your message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            style={{ flexGrow: 1, padding: '0.8rem 1.25rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }}
                        />
                        <button type="submit" className="btn btn-primary" style={{ padding: '0.8rem' }}>
                            <Send size={20} />
                        </button>
                    </form>
                </div>

                {/* Sidebar */}
                <div style={{ display: 'grid', gap: '2rem', alignContent: 'start' }}>
                    <div className="card glass" style={{ padding: '1.5rem' }}>
                        <h4 style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <TrendingUp size={18} color="var(--primary)" /> Trending Topics
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {['#UGCNET2026', '#Postmodernism', '#Paper1Tips', '#LiteraryCriticism'].map(tag => (
                                <div key={tag} style={{
                                    padding: '0.75rem',
                                    background: 'rgba(255,255,255,0.5)',
                                    borderRadius: '10px',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }} className="hover-lift">
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="card glass" style={{ padding: '1.5rem' }}>
                        <h4 style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <Users size={18} color="var(--secondary)" /> Active Study Groups
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                    <Star size={20} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Theory Enthusiasts</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>42 Active Members</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscussionLounge;
