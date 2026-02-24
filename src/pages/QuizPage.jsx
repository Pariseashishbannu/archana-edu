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
        return (
            <div className="container section animate-fade-in">
                <div className="card glass" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '4rem 2rem' }}>
                    <CheckCircle size={64} color="var(--primary)" style={{ marginBottom: '2rem' }} />
                    <h1>{mode === 'mock' ? 'Test Completed!' : 'Practice Session Done!'}</h1>
                    <div style={{ margin: '2rem 0' }}>
                        <span style={{ fontSize: '4rem', fontWeight: 700, color: 'var(--primary)' }}>{score}</span>
                        <span style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}> / {questions.length}</span>
                    </div>
                    <p style={{ marginBottom: '3rem', fontSize: '1.2rem' }}>
                        {score >= questions.length * 0.7 ? "Excellent performance! You're ready for the exam." : "Good effort! Keep practicing to improve your score."}
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button className="btn btn-primary" onClick={() => { setShowResult(false); setCurrentIndex(0); setUserAnswers(new Array(questions.length).fill(null)); setRevealed(new Array(questions.length).fill(false)); setTimeLeft(3600); setScore(0); }}>Try Again</button>
                        <button className="btn btn-secondary" onClick={() => navigate('/quizzes')}>Back to Catalog</button>
                    </div>
                </div>
            </div>
        );
    }

    const q = questions[currentIndex];
    const isCorrect = userAnswers[currentIndex] === q.answer;
    const isRevealed = revealed[currentIndex] && mode === 'practice';

    return (
        <div className="container section animate-fade-in" style={{ maxWidth: '800px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>
                        {section || 'General Quiz'}
                    </h2>
                    <span style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        background: mode === 'mock' ? 'rgba(236, 72, 153, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                        color: mode === 'mock' ? 'var(--secondary)' : 'var(--primary)',
                        padding: '0.2rem 0.8rem',
                        borderRadius: '20px',
                        textTransform: 'uppercase'
                    }}>
                        {mode} Mode
                    </span>
                </div>
                {mode === 'mock' && (
                    <div className="glass" style={{ padding: '0.5rem 1.5rem', borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)', fontWeight: 700 }}>
                        <Timer size={20} />
                        {formatTime(timeLeft)}
                    </div>
                )}
            </div>

            <div style={{ marginBottom: '1rem', background: '#eee', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ height: '100%', background: 'var(--primary)', width: `${((currentIndex + 1) / questions.length) * 100}%`, transition: 'width 0.3s' }}></div>
            </div>

            <div className="card glass" style={{ marginBottom: '2rem', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    Q {currentIndex + 1} of {questions.length}
                </span>
                <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', pr: '4rem' }}>{q.question}</h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {q.options.map((opt, i) => {
                        let bgColor = 'white';
                        let borderColor = 'rgba(0,0,0,0.1)';
                        let iconColor = 'var(--text-muted)';
                        let radioBg = 'transparent';

                        if (userAnswers[currentIndex] === i) {
                            borderColor = 'var(--primary)';
                            bgColor = 'rgba(99, 102, 241, 0.05)';
                            iconColor = 'var(--primary)';
                            radioBg = 'var(--primary)';
                        }

                        if (isRevealed) {
                            if (i === q.answer) {
                                borderColor = '#10b981';
                                bgColor = 'rgba(16, 185, 129, 0.05)';
                                iconColor = '#10b981';
                                radioBg = '#10b981';
                            } else if (userAnswers[currentIndex] === i) {
                                borderColor = '#ef4444';
                                bgColor = 'rgba(239, 68, 68, 0.05)';
                                iconColor = '#ef4444';
                                radioBg = '#ef4444';
                            }
                        }

                        return (
                            <button
                                key={i}
                                onClick={() => handleSelect(i)}
                                className="glass"
                                disabled={isRevealed}
                                style={{
                                    padding: '1.25rem 2rem',
                                    textAlign: 'left',
                                    borderRadius: '16px',
                                    cursor: isRevealed ? 'default' : 'pointer',
                                    border: `2px solid ${borderColor}`,
                                    background: bgColor,
                                    fontWeight: 600,
                                    transition: 'all 0.2s',
                                    fontSize: '1rem'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{
                                        width: '28px',
                                        height: '28px',
                                        borderRadius: '50%',
                                        border: '2px solid currentColor',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: radioBg,
                                        color: iconColor,
                                        flexShrink: 0
                                    }}>
                                        {isRevealed && i === q.answer ? '✓' : isRevealed && userAnswers[currentIndex] === i ? '✕' : String.fromCharCode(65 + i)}
                                    </div>
                                    <span style={{ color: isRevealed && i === q.answer ? '#10b981' : isRevealed && userAnswers[currentIndex] === i ? '#ef4444' : 'inherit' }}>
                                        {opt}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {isRevealed && q.explanation && (
                    <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(99, 102, 241, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--primary)', animation: 'fadeInUp 0.3s ease-out' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--primary)', fontWeight: 700 }}>
                            <Info size={18} /> Explanation
                        </div>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>{q.explanation}</p>
                    </div>
                )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                    className="btn btn-secondary"
                    disabled={currentIndex === 0}
                    onClick={() => setCurrentIndex(currentIndex - 1)}
                >
                    <ArrowLeft size={18} /> Previous
                </button>

                {isRevealed && !revealed.every(r => r === true) && currentIndex < questions.length - 1 && (
                    <div style={{ color: isCorrect ? '#10b981' : '#ef4444', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {isCorrect ? 'Correct Answer!' : 'Incorrect Answer'}
                    </div>
                )}

                {currentIndex === questions.length - 1 ? (
                    <button className="btn btn-primary" onClick={handleSubmit}>Submit Solution</button>
                ) : (
                    <button
                        className="btn btn-primary"
                        disabled={mode === 'practice' && !revealed[currentIndex]}
                        onClick={() => setCurrentIndex(currentIndex + 1)}
                    >
                        Next Question <ArrowRight size={18} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuizPage;
