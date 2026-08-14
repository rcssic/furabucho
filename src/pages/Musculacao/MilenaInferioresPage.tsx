import React, { useState } from 'react';

interface ExerciseSpec {
    name: string;
    series: string;
    repRange: string;
    primaryMuscles: string;
    gifUrl: string;
}

const STATIC_API_BASE = 'https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0';

const EXERCISES: ExerciseSpec[] = [
    {
        name: 'Leg Press',
        series: '3 séries',
        repRange: '8 a 12 repetições',
        primaryMuscles: 'Quadríceps, glúteos e panturrilhas',
        gifUrl: `${STATIC_API_BASE}/glutes/sled-45-leg-press.gif`,
    },
    {
        name: 'Elevação pélvica',
        series: '3 séries',
        repRange: '8 a 12 repetições',
        primaryMuscles: 'Glúteos, isquiotibiais e core',
        gifUrl: `${STATIC_API_BASE}/glutes/barbell-glute-bridge.gif`,
    },
    {
        name: 'Coice na polia',
        series: '3 séries',
        repRange: '8 a 12 repetições',
        primaryMuscles: 'Glúteos, posterior da coxa e core',
        gifUrl: `${STATIC_API_BASE}/glutes/cable-standing-hip-extension.gif`,
    },
    {
        name: 'Cadeira abdutora',
        series: '3 séries',
        repRange: '8 a 12 repetições',
        primaryMuscles: 'Músculos glúteos médios e laterais',
        gifUrl: `${STATIC_API_BASE}/abductors/lever-seated-hip-abduction.gif`,
    },
    {
        name: 'Cadeira adutora',
        series: '3 séries',
        repRange: '8 a 12 repetições',
        primaryMuscles: 'Adutores da coxa e glúteos',
        gifUrl: `${STATIC_API_BASE}/adductors/lever-seated-hip-adduction.gif`,
    },
    {
        name: 'Cadeira extensora',
        series: '3 séries',
        repRange: '8 a 12 repetições',
        primaryMuscles: 'Quadríceps e joelho',
        gifUrl: `${STATIC_API_BASE}/quads/lever-leg-extension.gif`,
    },
    {
        name: 'Cadeira flexora',
        series: '3 séries',
        repRange: '8 a 12 repetições',
        primaryMuscles: 'Isquiotibiais e panturrilhas',
        gifUrl: `${STATIC_API_BASE}/hamstrings/lever-seated-leg-curl.gif`,
    },
];

export const MilenaInferioresPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [exercises] = useState<ExerciseSpec[]>(EXERCISES);

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
                    <h1>Milena - Treino A</h1>
                </header>

                <div className="musculacao-exercise-grid">
                    {exercises.map((exercise) => (
                        <article key={exercise.name} className="musculacao-exercise-card">
                            <div className="musculacao-exercise-header">
                                <div>
                                    <h2>{exercise.name}</h2>
                                </div>
                            </div>

                            <div className="musculacao-meta-row single-stat-row">
                                <div className="musculacao-meta-pill">
                                    <strong>{exercise.series}</strong>
                                </div>
                                <div className="musculacao-meta-pill highlight">
                                    <strong>{exercise.repRange}</strong>
                                </div>
                            </div>

                            <div className="musculacao-media-grid single-gif-grid">
                                <div className="musculacao-media-box single-gif-box">
                                    {exercise.gifUrl ? (
                                        <img src={exercise.gifUrl} alt={`${exercise.name} em execução`} />
                                    ) : (
                                        <div className="musculacao-media-placeholder">
                                            <span>GIF indisponível</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="musculacao-info-list">
                                <div>
                                    <label>Foco principal:</label>
                                    <strong>{exercise.primaryMuscles}</strong>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};
