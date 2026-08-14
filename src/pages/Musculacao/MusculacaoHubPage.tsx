import React, { useState } from 'react';
import '../ConcursoPoliciaCivil/style.css';
import './style.css';

type TelaAtiva = 'selecao' | 'milena' | 'ronaldo';

interface PageProps {
    onBack: () => void;
}

function TreinoAccordion({ title, subtitle, exercises }: { title: string; subtitle: string; exercises: { nome: string; serie: string }[] }) {
    return (
        <div className="musculacao-card">
            <div className="musculacao-card-header">
                <h2>{title}</h2>
                <span className="musculacao-badge">{subtitle}</span>
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
    );
}

function MilenaPage({ onBack }: PageProps) {
    const treinos = [
        {
            title: 'Treino A',
            subtitle: 'I',
            exercises: [
                { nome: 'Agachamento Livre', serie: '4x8' },
                { nome: 'Leg Press', serie: '4x10' },
                { nome: 'Extensora', serie: '3x12' },
                { nome: 'Flexora', serie: '3x12' },
                { nome: 'Cadeira Abdutora', serie: '3x15' },
                { nome: 'Panturrilha', serie: '4x15' },
            ],
        },
        {
            title: 'Treino B',
            subtitle: 'C/B',
            exercises: [
                { nome: 'Puxada Frontal', serie: '4x8' },
                { nome: 'Remada Baixa', serie: '4x10' },
                { nome: 'Pulldown', serie: '3x12' },
                { nome: 'Rosca Direta', serie: '3x12' },
                { nome: 'Rosca Martelo', serie: '3x10' },
                { nome: 'Adução de Costas', serie: '3x15' },
            ],
        },
        {
            title: 'Treino C',
            subtitle: 'O/P/A',
            exercises: [
                { nome: 'Supino Reto', serie: '4x8' },
                { nome: 'Supino Inclinado', serie: '3x10' },
                { nome: 'Desenvolvimento', serie: '3x12' },
                { nome: 'Crucifixo', serie: '3x12' },
                { nome: 'Elevação Lateral', serie: '3x15' },
                { nome: 'Abdominal', serie: '4x15' },
            ],
        },
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
                    <h1>Milena - Treinos</h1>
                    <p>Divisão por treino: A (Inferiores), B (Superiores Costas e Bíceps) e C (Superiores Ombro, Peito e Abdômen).</p>
                </header>

                <section className="musculacao-summary">
                    <div className="musculacao-summary-card">
                        <p>Treino A</p>
                        <strong>Inferiores</strong>
                    </div>
                    <div className="musculacao-summary-card">
                        <p>Treino B</p>
                        <strong>Costas + Bíceps</strong>
                    </div>
                    <div className="musculacao-summary-card">
                        <p>Treino C</p>
                        <strong>Ombros + Peito + Abdômen</strong>
                    </div>
                </section>

                <div className="musculacao-day-grid">
                    {treinos.map((treino) => (
                        <TreinoAccordion key={treino.title} title={treino.title} subtitle={treino.subtitle} exercises={treino.exercises} />
                    ))}
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

    if (telaAtiva === 'milena') {
        return <MilenaPage onBack={() => setTelaAtiva('selecao')} />;
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
