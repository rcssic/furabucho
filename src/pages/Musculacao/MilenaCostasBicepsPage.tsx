import React from 'react';

export const MilenaCostasBicepsPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const exercises = [
        { nome: 'Puxada Frontal', serie: '4x8' },
        { nome: 'Remada Baixa', serie: '4x10' },
        { nome: 'Pulldown', serie: '3x12' },
        { nome: 'Rosca Direta', serie: '3x12' },
        { nome: 'Rosca Martelo', serie: '3x10' },
        { nome: 'Adução de Costas', serie: '3x15' },
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
                    <h1>Milena - Treino B</h1>
                    <p>Superiores: costas e bíceps.</p>
                </header>

                <div className="musculacao-card">
                    <div className="musculacao-card-header">
                        <h2>Treino B</h2>
                        <span className="musculacao-badge">B</span>
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
