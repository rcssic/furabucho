import React, { useEffect, useState } from 'react';

interface StaticExerciseEntry {
    id?: string;
    slug?: string;
    name?: string;
    muscle?: string;
    bodyPart?: string;
    equipment?: string;
    category?: string;
    secondaryMuscles?: string[];
    instructions?: string[];
    file?: string;
    gifUrl?: string;
}

const STATIC_API_BASE = 'https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0';
const STATIC_API_URL = `${STATIC_API_BASE}/api/es/muscles/quads.json`;

export const MilenaInferioresPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [exercises, setExercises] = useState<StaticExerciseEntry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const loadExercises = async () => {
            try {
                const response = await fetch(STATIC_API_URL);
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }

                const payload = await response.json() as { exercises?: StaticExerciseEntry[] };
                const items = Array.isArray(payload.exercises) ? payload.exercises.slice(0, 7) : [];

                if (isMounted) {
                    setExercises(items);
                }
            } catch {
                if (isMounted) {
                    setExercises([]);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        void loadExercises();

        return () => {
            isMounted = false;
        };
    }, []);

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
                    <p>Inferiores: lista de exercícios com GIF e referência visual dos músculos ativos.</p>
                </header>

                <section className="musculacao-summary">
                    <div className="musculacao-summary-card">
                        <p>Treino</p>
                        <strong>A</strong>
                    </div>
                    <div className="musculacao-summary-card">
                        <p>Região</p>
                        <strong>Inferiores</strong>
                    </div>
                    <div className="musculacao-summary-card">
                        <p>Status</p>
                        <strong>{loading ? 'Carregando' : 'Pronto'}</strong>
                    </div>
                </section>

                <div className="musculacao-exercise-grid">
                    {exercises.map((exercise) => (
                        <article key={exercise.id || exercise.slug || exercise.name} className="musculacao-exercise-card">
                            <div className="musculacao-exercise-header">
                                <div>
                                    <h2>{exercise.name || 'Exercício'}</h2>
                                    <span>{exercise.equipment || 'Corpo'} • {exercise.category || 'Força'}</span>
                                </div>
                            </div>

                            <div className="musculacao-media-grid single-gif-grid">
                                <div className="musculacao-media-box">
                                    <p>GIF do exercício</p>
                                    {exercise.gifUrl ? (
                                        <img src={exercise.gifUrl} alt={`${exercise.name || 'Exercício'} em execução`} />
                                    ) : (
                                        <div className="musculacao-media-placeholder">
                                            <span>GIF indisponível</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="musculacao-info-list">
                                <div>
                                    <label>Grupo muscular:</label>
                                    <strong>{exercise.bodyPart || 'Pernas'}</strong>
                                </div>
                                <div>
                                    <label>Foco principal:</label>
                                    <strong>{exercise.muscle || 'Quadríceps'}</strong>
                                </div>
                                <div>
                                    <label>Ativação secundária:</label>
                                    <strong>{exercise.secondaryMuscles && exercise.secondaryMuscles.length > 0 ? exercise.secondaryMuscles.join(', ') : 'Não informado'}</strong>
                                </div>
                                <div>
                                    <label>Instrução:</label>
                                    <strong>{exercise.instructions && exercise.instructions.length > 0 ? exercise.instructions[0] : 'Sem instrução disponível.'}</strong>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};
