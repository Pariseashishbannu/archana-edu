import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import generalQuestions from '../data/quizzes.json';
import pyqData from '../data/pyqs.json';
import { Timer, CheckCircle, ArrowRight, ArrowLeft, Info, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const QuizPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const section = queryParams.get('section');
    const mode = queryParams.get('mode') || 'mock'; // 'mock' or 'practice'

    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [timeLeft, setTimeLeft] = useState(3600);
    const [score, setScore] = useState(0);
    const [revealed, setRevealed] = useState([]); // For practice mode feedback

    useEffect(() => {
        let qSet = [];
        if (section && pyqData[section]) {
            qSet = pyqData[section];
        } else {
            qSet = generalQuestions;
        }
        setQuestions(qSet);
        setUserAnswers(new Array(qSet.length).fill(null));
        setRevealed(new Array(qSet.length).fill(false));
    }, [section]);

    useEffect(() => {
        if (showResult || mode === 'practice') return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, [showResult, mode]);

    const handleSelect = (optionIndex) => {
        if (mode === 'practice' && revealed[currentIndex]) return;

        const newAnswers = [...userAnswers];
        newAnswers[currentIndex] = optionIndex;
        setUserAnswers(newAnswers);

        if (mode === 'practice') {
            const newRevealed = [...revealed];
            newRevealed[currentIndex] = true;
            setRevealed(newRevealed);
        }
    };

    const handleSubmit = () => {
        let finalScore = 0;
        userAnswers.forEach((ans, i) => {
            if (ans === questions[i].answer) finalScore++;
        });
        setScore(finalScore);
        setShowResult(true);
        if (finalScore >= questions.length * 0.7) {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    if (questions.length === 0) return <div className="container section">Loading...</div>;

    if (showResult) {
        const percentage = Math.round((score / questions.length) * 100);
        return (
            <div className="container section animate-fade-in">
                <div className="card glass-premium" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '5rem 3rem', borderRadius: '40px' }}>
                    <div style={{ width: '120px', height: '120px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2.5rem', color: 'var(--primary)' }}>
                        <CheckCircle size={60} />
                    </div>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{mode === 'mock' ? 'Exam Complete' : 'Practice Finalized'}</h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '3rem' }}>Your performance metrics have been updated in your profile.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
                        <div className="glass" style={{ padding: '2rem', borderRadius: '24px' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)' }}>{score}</div>
                            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Correct</div>
                        </div>
                        <div className="glass" style={{ padding: '2rem', borderRadius: '24px' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--secondary)' }}>{percentage}%</div>
                            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Accuracy</div>
                        </div>
                        <div className="glass" style={{ padding: '2rem', borderRadius: '24px' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{formatTime(3600 - timeLeft)}</div>
                            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Time Taken</div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                        <button className="btn btn-primary shadow-lg" style={{ height: '56px', padding: '0 2.5rem' }} onClick={() => { setShowResult(false); setCurrentIndex(0); setUserAnswers(new Array(questions.length).fill(null)); setRevealed(new Array(questions.length).fill(false)); setTimeLeft(3600); setScore(0); }}>Retake Session</button>
                        <button className="btn btn-secondary" style={{ height: '56px', padding: '0 2rem' }} onClick={() => navigate('/quizzes')}>View Other Units</button>
                    </div>
                </div>
            </div>
        );
    }

    const q = questions[currentIndex];
    const isCorrect = userAnswers[currentIndex] === q.answer;
    const isRevealed = revealed[currentIndex] && mode === 'practice';

    return (
        <div className="container section animate-fade-in" style={{ maxWidth: '900px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ width: '56px', height: '56px', background: 'var(--primary)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '1.2rem' }}>
                        {currentIndex + 1}
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{section || 'Scholar Quiz'}</h2>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%' }}></div>
                            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Simulation Active</span>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    {mode === 'mock' && (
                        <div className="card glass" style={{ padding: '0.5rem 1.5rem', borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--secondary)', fontWeight: 800, border: '1px solid rgba(236, 72, 153, 0.2)' }}>
                            <Timer size={18} />
                            {formatTime(timeLeft)}
                        </div>
                    )}
                    <div className="card glass" style={{ padding: '0.5rem 1.25rem', borderRadius: '30px', color: 'var(--text-muted)', fontWeight: 700, fontSize: '0.85rem' }}>
                        Progress: {Math.round(((currentIndex + 1) / questions.length) * 100)}%
                    </div>
                </div>
            </div>

            <div style={{ marginBottom: '3rem', background: 'rgba(0,0,0,0.05)', height: '10px', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ height: '100%', background: 'linear-gradient(to right, var(--primary), var(--secondary))', width: `${((currentIndex + 1) / questions.length) * 100}%`, transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}></div>
            </div>

            <div className="card glass-premium" style={{ marginBottom: '3rem', padding: '3.5rem', borderRadius: '32px' }}>
                <h3 style={{ marginBottom: '3rem', fontSize: '1.75rem', lineHeight: '1.4', fontWeight: 700 }}>{q.question}</h3>
                <div style={{ display: 'grid', gap: '1.25rem' }}>
                    {q.options.map((opt, i) => {
                        let borderColor = 'rgba(0,0,0,0.06)';
                        let bgColor = 'rgba(255,255,255,0.5)';
                        let shadow = 'none';

                        if (userAnswers[currentIndex] === i) {
                            borderColor = 'var(--primary)';
                            bgColor = 'rgba(99, 102, 241, 0.08)';
                            shadow = '0 10px 25px -10px rgba(99, 102, 241, 0.3)';
                        }

                        if (isRevealed) {
                            if (i === q.answer) {
                                borderColor = '#10b981';
                                bgColor = 'rgba(16, 185, 129, 0.08)';
                            } else if (userAnswers[currentIndex] === i) {
                                borderColor = '#ef4444';
                                bgColor = 'rgba(239, 68, 68, 0.08)';
                            }
                        }

                        return (
                            <button
                                key={i}
                                onClick={() => handleSelect(i)}
                                disabled={isRevealed}
                                style={{
                                    padding: '1.5rem 2rem',
                                    textAlign: 'left',
                                    borderRadius: '20px',
                                    cursor: isRevealed ? 'default' : 'pointer',
                                    border: `2px solid ${borderColor}`,
                                    background: bgColor,
                                    boxShadow: shadow,
                                    fontWeight: 600,
                                    transition: 'all 0.25s',
                                    fontSize: '1.1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1.5rem',
                                    color: 'var(--text-main)'
                                }}
                                className="glow-hover"
                            >
                                <div style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '10px',
                                    background: userAnswers[currentIndex] === i ? 'var(--primary)' : 'rgba(0,0,0,0.05)',
                                    color: userAnswers[currentIndex] === i ? 'white' : 'var(--text-muted)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    fontSize: '0.9rem',
                                    fontWeight: 800
                                }}>
                                    {String.fromCharCode(65 + i)}
                                </div>
                                <span>{opt}</span>
                            </button>
                        );
                    })}
                </div>

                {isRevealed && q.explanation && (
                    <div className="animate-fade-in" style={{ marginTop: '2.5rem', padding: '2rem', background: 'rgba(99, 102, 241, 0.05)', borderRadius: '24px', borderLeft: '6px solid var(--primary)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--primary)', fontWeight: 800 }}>
                            <HelpCircle size={20} /> Insight & Reasoning
                        </div>
                        <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: '1.6' }}>{q.explanation}</p>
                    </div>
                )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                    className="btn btn-secondary"
                    disabled={currentIndex === 0}
                    onClick={() => setCurrentIndex(currentIndex - 1)}
                    style={{ height: '56px', padding: '0 2rem', borderRadius: '16px' }}
                >
                    <ArrowLeft size={18} /> Previous Question
                </button>

                <div style={{ textAlign: 'center' }}>
                    {isRevealed && (
                        <div style={{ color: isCorrect ? '#10b981' : '#ef4444', fontWeight: 800, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            {isCorrect ? <CheckCircle size={20} /> : <HelpCircle size={20} />}
                            {isCorrect ? 'Stellar Accuracy!' : 'Knowledge Gap Found'}
                        </div>
                    )}
                </div>

                {currentIndex === questions.length - 1 ? (
                    <button className="btn btn-primary shadow-lg shimmer" style={{ height: '56px', padding: '0 2.5rem', borderRadius: '16px' }} onClick={handleSubmit}>Finalize Solution</button>
                ) : (
                    <button
                        className="btn btn-primary shadow-lg"
                        disabled={mode === 'practice' && !revealed[currentIndex]}
                        onClick={() => setCurrentIndex(currentIndex + 1)}
                        style={{ height: '56px', padding: '0 2.5rem', borderRadius: '16px' }}
                    >
                        Next Challenge <ArrowRight size={18} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuizPage;
