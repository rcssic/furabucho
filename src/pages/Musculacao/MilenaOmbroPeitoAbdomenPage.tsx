import React from 'react';

export const MilenaOmbroPeitoAbdomenPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const exercises = [
        { nome: 'Supino Reto', serie: '4x8' },
        { nome: 'Supino Inclinado', serie: '3x10' },
        { nome: 'Desenvolvimento', serie: '3x12' },
        { nome: 'Crucifixo', serie: '3x12' },
        { nome: 'Elevação Lateral', serie: '3x15' },
        { nome: 'Abdominal', serie: '4x15' },
    ];

    return (
        <div className="cargo-glass-wrapper musculacao-page">
            <div className="cargo-content-max">
                <header className="cargo-header">
                    <button className="glass-btn-pill" onClick={onBack}>
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        Voltar
                    </button>
                    <h1>Milena - Treino C</h1>
                    <p>Superiores: ombro, peito e abdômen.</p>
                </header>

                <div className="musculacao-card">
                    <div className="musculacao-card-header">
                        <h2>Treino C</h2>
                        <span className="musculacao-badge">C</span>
                    </div>
                    <ul className="musculacao-list">
                        {exercises.map((exercise) => (
                            <li key={exercise.nome} className="musculacao-item">
                                <strong>{exercise.nome}</strong>
                                <span>{exercise.serie}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
