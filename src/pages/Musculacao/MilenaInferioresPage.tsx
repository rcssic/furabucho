import React, { useEffect, useMemo, useState } from 'react';

interface ExerciseSpec {
    name: string;
    series: string;
    repRange: string;
    primaryMuscles: string;
    muscle: 'quads' | 'glutes' | 'hamstrings' | 'calves';
    aliases: string[];
}

interface ExerciseDbItem {
    name?: string;
    gifUrl?: string;
    bodyPart?: string;
    muscle?: string;
    secondaryMuscles?: string[];
    equipment?: string;
    instructions?: string[];
}

const EXERCISES: ExerciseSpec[] = [
    { name: 'Leg Press', series: '3 séries', repRange: '8 a 12 repetições', primaryMuscles: 'Quadríceps, glúteos e panturrilhas', muscle: 'quads', aliases: ['45-degree leg press', 'leg press machine'] },
    { name: 'Elevação pélvica', series: '3 séries', repRange: '8 a 12 repetições', primaryMuscles: 'Glúteos, isquiotibiais e core', muscle: 'glutes', aliases: ['machine hip thrust', 'hip thrust machine'] },
    { name: 'Coice na polia', series: '3 séries', repRange: '8 a 12 repetições', primaryMuscles: 'Glúteos, posterior da coxa e core', muscle: 'glutes', aliases: ['glute kickback', 'kick back'] },
    { name: 'Cadeira abdutora', series: '3 séries', repRange: '8 a 12 repetições', primaryMuscles: 'Músculos glúteos médios e laterais', muscle: 'glutes', aliases: ['outer thigh machine', 'hip abductor machine'] },
    { name: 'Cadeira adutora', series: '3 séries', repRange: '8 a 12 repetições', primaryMuscles: 'Adutores da coxa e glúteos', muscle: 'glutes', aliases: ['inner thigh machine', 'hip adductor machine'] },
    { name: 'Cadeira extensora', series: '3 séries', repRange: '8 a 12 repetições', primaryMuscles: 'Quadríceps e joelho', muscle: 'quads', aliases: ['leg extension machine'] },
    { name: 'Cadeira flexora', series: '3 séries', repRange: '8 a 12 repetições', primaryMuscles: 'Isquiotibiais e panturrilhas', muscle: 'hamstrings', aliases: ['seated leg curl machine'] },
];

const STATIC_API_BASE = 'https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0';

const normalizeExerciseName = (value: string): string => value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const findMatchingExercise = (exercise: ExerciseSpec, items: ExerciseDbItem[]): ExerciseDbItem | null => {
    const normalizedAliases = [
        ...exercise.aliases,
        exercise.name,
    ].map(normalizeExerciseName);

    const match = items.find((item) => {
        const name = normalizeExerciseName(item.name || '');
        return normalizedAliases.some((alias) => name.includes(alias) || alias.includes(name));
    });

    return match ?? items[0] ?? null;
};

export const MilenaInferioresPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [exerciseMap, setExerciseMap] = useState<Record<string, ExerciseDbItem | null>>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const loadExercises = async () => {
            try {
                const results = await Promise.all(
                    EXERCISES.map(async (exercise) => {
                        const url = `${STATIC_API_BASE}/api/es/muscles/${exercise.muscle}.json`;
                        const response = await fetch(url);

                        if (!response.ok) {
                            return { name: exercise.name, data: null as ExerciseDbItem | null };
                        }

                        const payload = await response.json() as { exercises?: ExerciseDbItem[] };
                        const match = findMatchingExercise(exercise, payload.exercises || []);

                        return {
                            name: exercise.name,
                            data: match ?? null,
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
                bodyPart: apiEntry?.bodyPart || 'Pernas',
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

                            <div className="musculacao-media-grid single-gif-grid">
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
                            </div>

                            <div className="musculacao-info-list">
                                <div>
                                    <label>Grupo muscular:</label>
                                    <strong>{exercise.bodyPart}</strong>
                                </div>
                                <div>
                                    <label>Foco principal:</label>
                                    <strong>{exercise.primaryMuscles}</strong>
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
