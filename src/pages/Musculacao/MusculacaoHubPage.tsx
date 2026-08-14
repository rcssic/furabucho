import React, { useState } from 'react';
import '../ConcursoPoliciaCivil/style.css';
import './style.css';

type TelaAtiva = 'selecao' | 'milena' | 'ronaldo' | 'milena-a' | 'milena-b' | 'milena-c';

type MilenaTreinoKey = 'A' | 'B' | 'C';

interface PageProps {
    onBack: () => void;
}

interface TreinoExercise {
    nome: string;
    serie: string;
}

const milenaTreinos: Record<MilenaTreinoKey, { title: string; subtitle: string; description: string; exercises: TreinoExercise[] }> = {
    A: {
        title: 'Treino A',
        subtitle: 'Inferiores',
        description: 'Foco em pernas, glúteos e estabilização dos membros inferiores.',
        exercises: [
            { nome: 'Agachamento Livre', serie: '4x8' },
            { nome: 'Leg Press', serie: '4x10' },
            { nome: 'Extensora', serie: '3x12' },
            { nome: 'Flexora', serie: '3x12' },
            { nome: 'Cadeira Abdutora', serie: '3x15' },
            { nome: 'Panturrilha', serie: '4x15' },
        ],
    },
    B: {
        title: 'Treino B',
        subtitle: 'Costas e Bíceps',
        description: 'Foco em costas, puxadas e desenvolvimento dos braços.',
        exercises: [
            { nome: 'Puxada Frontal', serie: '4x8' },
            { nome: 'Remada Baixa', serie: '4x10' },
            { nome: 'Pulldown', serie: '3x12' },
            { nome: 'Rosca Direta', serie: '3x12' },
            { nome: 'Rosca Martelo', serie: '3x10' },
            { nome: 'Adução de Costas', serie: '3x15' },
        ],
    },
    C: {
        title: 'Treino C',
        subtitle: 'Ombros, Peito e Abdômen',
        description: 'Foco em peito, ombros e core para completar a divisão superior.',
        exercises: [
            { nome: 'Supino Reto', serie: '4x8' },
            { nome: 'Supino Inclinado', serie: '3x10' },
            { nome: 'Desenvolvimento', serie: '3x12' },
            { nome: 'Crucifixo', serie: '3x12' },
            { nome: 'Elevação Lateral', serie: '3x15' },
            { nome: 'Abdominal', serie: '4x15' },
        ],
    },
};

function MilenaTreinoPage({ treino, onBack }: { treino: MilenaTreinoKey; onBack: () => void }) {
    const treinoSelecionado = milenaTreinos[treino];

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
                    <h1>Milena - {treinoSelecionado.title}</h1>
                    <p>{treinoSelecionado.description}</p>
                </header>

                <section className="musculacao-summary">
                    <div className="musculacao-summary-card">
                        <p>Treino</p>
                        <strong>{treinoSelecionado.title}</strong>
                    </div>
                    <div className="musculacao-summary-card">
                        <p>Foco</p>
                        <strong>{treinoSelecionado.subtitle}</strong>
                    </div>
                    <div className="musculacao-summary-card">
                        <p>Divisão</p>
                        <strong>A / B / C</strong>
                    </div>
                </section>

                <div className="musculacao-card">
                    <div className="musculacao-card-header">
                        <h2>{treinoSelecionado.title}</h2>
                        <span className="musculacao-badge">{treino}</span>
                    </div>
                    <ul className="musculacao-list">
                        {treinoSelecionado.exercises.map((exercise) => (
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
}

function MilenaPage({ onBack }: PageProps) {
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
                    <h1>Milena</h1>
                    <p>Selecione o treino da Milena para acessar a rotina detalhada.</p>
                </header>

                <div className="musculacao-selection-grid">
                    <div className="glass-card clickable-card" onClick={() => window.dispatchEvent(new CustomEvent('musculacao-treino', { detail: 'A' }))}>
                        <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
                            <path d="M7 7h3v10H7zM14 7h3v10h-3zM10 10h4v4h-4z" />
                        </svg>
                        <h2>Treino A</h2>
                        <p>Inferiores.</p>
                    </div>

                    <div className="glass-card clickable-card" onClick={() => window.dispatchEvent(new CustomEvent('musculacao-treino', { detail: 'B' }))}>
                        <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
                            <path d="M6 12h12M9 8l-3 4 3 4M15 8l3 4-3 4" />
                        </svg>
                        <h2>Treino B</h2>
                        <p>Superiores: costas e bíceps.</p>
                    </div>

                    <div className="glass-card clickable-card" onClick={() => window.dispatchEvent(new CustomEvent('musculacao-treino', { detail: 'C' }))}>
                        <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
                            <path d="M12 3v18M5 8h14M5 16h14" />
                        </svg>
                        <h2>Treino C</h2>
                        <p>Superiores: ombro, peito e abdômen.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function RonaldoPage({ onBack }: PageProps) {
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
                    <h1>Ronaldo - Treinos</h1>
                    <p>Estrutura em desenvolvimento, seguindo o mesmo padrão da divisão por treinos.</p>
                </header>

                <div className="musculacao-empty">
                    A divisão do treino de Ronaldo será adicionada em seguida, mantendo o mesmo padrão da Milena.
                </div>
            </div>
        </div>
    );
}

export default function MusculacaoHubPage() {
    const [telaAtiva, setTelaAtiva] = useState<TelaAtiva>('selecao');
    const [milenaTreino, setMilenaTreino] = useState<MilenaTreinoKey>('A');

    React.useEffect(() => {
        const handleTreino = (event: Event) => {
            const customEvent = event as CustomEvent<string>;
            const treino = customEvent.detail;
            if (treino === 'A' || treino === 'B' || treino === 'C') {
                setMilenaTreino(treino);
                setTelaAtiva(`milena-${treino.toLowerCase()}` as TelaAtiva);
            }
        };

        window.addEventListener('musculacao-treino', handleTreino);
        return () => window.removeEventListener('musculacao-treino', handleTreino);
    }, []);

    if (telaAtiva === 'milena') {
        return <MilenaPage onBack={() => setTelaAtiva('selecao')} />;
    }

    if (telaAtiva === 'milena-a') {
        return <MilenaTreinoPage treino="A" onBack={() => setTelaAtiva('milena')} />;
    }

    if (telaAtiva === 'milena-b') {
        return <MilenaTreinoPage treino="B" onBack={() => setTelaAtiva('milena')} />;
    }

    if (telaAtiva === 'milena-c') {
        return <MilenaTreinoPage treino="C" onBack={() => setTelaAtiva('milena')} />;
    }

    if (telaAtiva === 'ronaldo') {
        return <RonaldoPage onBack={() => setTelaAtiva('selecao')} />;
    }

    return (
        <div className="cargo-glass-wrapper musculacao-page">
            <div className="cargo-content-max">
                <header className="cargo-header">
                    <button className="glass-btn-pill" onClick={() => (window.location.hash = '/')}>
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        Voltar para Home
                    </button>
                    <h1>Musculação</h1>
                    <p>Escolha abaixo quem será o foco do treino para visualizar a separação por dias.</p>
                </header>

                <div className="glass-grid">
                    <div className="glass-card clickable-card" onClick={() => setTelaAtiva('milena')}>
                        <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
                            <path d="M7 7h3v10H7zM14 7h3v10h-3zM10 10h4v4h-4z" />
                        </svg>
                        <h2>Milena</h2>
                        <p>Treino dividido em A, B e C com foco em inferiores, costas/bíceps e ombro/peito/abdômen.</p>
                    </div>

                    <div className="glass-card clickable-card" onClick={() => setTelaAtiva('ronaldo')}>
                        <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
                            <path d="M6 18V8h12v10" />
                            <path d="M9 8V6h6v2" />
                            <path d="M9 12h6" />
                        </svg>
                        <h2>Ronaldo</h2>
                        <p>Próxima divisão de treino, seguindo o mesmo padrão da estrutura da Milena.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
