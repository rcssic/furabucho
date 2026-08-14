import React, { useEffect, useMemo, useState } from 'react';

interface ExerciseSpec {
    name: string;
    series: string;
    repRange: string;
    primaryMuscles: string;
}

interface ExerciseDbItem {
    name?: string;
    gifUrl?: string;
    bodyPart?: string;
    target?: string;
    secondaryMuscles?: string[];
    equipment?: string;
    image?: string;
    images?: string[];
}

const EXERCISES: ExerciseSpec[] = [
    { name: 'Leg Press', series: '3 séries', repRange: '8 a 12 repetições', primaryMuscles: 'Quadríceps, glúteos e panturrilhas' },
    { name: 'Elevação pélvica', series: '3 séries', repRange: '8 a 12 repetições', primaryMuscles: 'Glúteos, isquiotibiais e core' },
    { name: 'Coice na polia', series: '3 séries', repRange: '8 a 12 repetições', primaryMuscles: 'Glúteos, posterior da coxa e core' },
    { name: 'Cadeira abdutora', series: '3 séries', repRange: '8 a 12 repetições', primaryMuscles: 'Músculos glúteos médios e laterais' },
    { name: 'Cadeira adutora', series: '3 séries', repRange: '8 a 12 repetições', primaryMuscles: 'Adutores da coxa e glúteos' },
    { name: 'Cadeira extensora', series: '3 séries', repRange: '8 a 12 repetições', primaryMuscles: 'Quadríceps e joelho' },
    { name: 'Cadeira flexora', series: '3 séries', repRange: '8 a 12 repetições', primaryMuscles: 'Isquiotibiais e panturrilhas' },
];

const normalizeExerciseName = (value: string): string => value.trim().toLowerCase();

const getExerciseApiUrl = (name: string) => `https://exercisedb.p.rapidapi.com/exercises/name/${encodeURIComponent(name)}`;

const getApiHeaders = () => {
    const apiKey = import.meta.env.VITE_EXERCISE_DB_API_KEY as string | undefined;
    const host = (import.meta.env.VITE_EXERCISE_DB_HOST as string | undefined) || 'exercisedb.p.rapidapi.com';

    return {
        'x-rapidapi-key': apiKey || '',
        'x-rapidapi-host': host,
        'Content-Type': 'application/json',
    };
};

export const MilenaInferioresPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [exerciseMap, setExerciseMap] = useState<Record<string, ExerciseDbItem | null>>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiKey = import.meta.env.VITE_EXERCISE_DB_API_KEY as string | undefined;

        if (!apiKey) {
            setLoading(false);
            return;
        }

        let isMounted = true;

        const loadExercises = async () => {
            try {
                const results = await Promise.all(
                    EXERCISES.map(async (exercise) => {
                        const response = await fetch(getExerciseApiUrl(exercise.name), {
                            headers: getApiHeaders(),
                        });

                        if (!response.ok) {
                            return { name: exercise.name, data: null as ExerciseDbItem | null };
                        }

                        const payload = await response.json();
                        const normalized = Array.isArray(payload) ? payload[0] : payload;

                        return {
                            name: exercise.name,
                            data: normalized ?? null,
                        };
                    })
                );

                if (!isMounted) return;

                const mapped: Record<string, ExerciseDbItem | null> = {};

                results.forEach(({ name, data }) => {
                    mapped[normalizeExerciseName(name)] = data;
                });

                setExerciseMap(mapped);
            } catch {
                if (!isMounted) return;
                setExerciseMap({});
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

    const exercises = useMemo(() => {
        return EXERCISES.map((exercise) => {
            const apiEntry = exerciseMap[normalizeExerciseName(exercise.name)] ?? null;
            return {
                ...exercise,
                gifUrl: apiEntry?.gifUrl || '',
                imageUrl: apiEntry?.image || apiEntry?.images?.[0] || '',
                bodyPart: apiEntry?.bodyPart || 'Pernas',
                target: apiEntry?.target || exercise.primaryMuscles,
                secondaryMuscles: apiEntry?.secondaryMuscles?.join(', ') || exercise.primaryMuscles,
            };
        });
    }, [exerciseMap]);

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
                        <article key={exercise.name} className="musculacao-exercise-card">
                            <div className="musculacao-exercise-header">
                                <div>
                                    <h2>{exercise.name}</h2>
                                    <span>{exercise.series} • {exercise.repRange}</span>
                                </div>
                            </div>

                            <div className="musculacao-media-grid">
                                <div className="musculacao-media-box">
                                    <p>GIF do exercício</p>
                                    {exercise.gifUrl ? (
                                        <img src={exercise.gifUrl} alt={`${exercise.name} em execução`} />
                                    ) : (
                                        <div className="musculacao-media-placeholder">
                                            <span>GIF indisponível</span>
                                        </div>
                                    )}
                                </div>

                                <div className="musculacao-media-box">
                                    <p>Músculos ativos</p>
                                    {exercise.imageUrl ? (
                                        <img src={exercise.imageUrl} alt={`${exercise.name} com destaque dos músculos ativos`} />
                                    ) : (
                                        <div className="musculacao-media-placeholder muscle-placeholder">
                                            <span>{exercise.primaryMuscles}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="musculacao-info-list">
                                <div>
                                    <label>Grupo muscular:</label>
                                    <strong>{exercise.bodyPart}</strong>
                                </div>
                                <div>
                                    <label>Foco principal:</label>
                                    <strong>{exercise.target}</strong>
                                </div>
                                <div>
                                    <label>Ativação secundária:</label>
                                    <strong>{exercise.secondaryMuscles}</strong>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};
