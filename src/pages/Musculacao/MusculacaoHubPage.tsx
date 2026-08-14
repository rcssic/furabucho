import React, { useState } from 'react';
import '../ConcursoPoliciaCivil/style.css';
import './style.css';
import { MilenaInferioresPage } from './MilenaInferioresPage';
import { MilenaCostasBicepsPage } from './MilenaCostasBicepsPage';
import { MilenaOmbroPeitoAbdomenPage } from './MilenaOmbroPeitoAbdomenPage';

type TelaAtiva = 'selecao' | 'milena' | 'ronaldo' | 'milena-a' | 'milena-b' | 'milena-c';

interface PageProps {
    onBack: () => void;
}

function MilenaPage({ onBack, onSelectTreino }: PageProps & { onSelectTreino: (treino: 'a' | 'b' | 'c') => void }) {
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
                    <p>Selecione o treino para acessar a rotina detalhada.</p>
                </header>

                <div className="musculacao-selection-grid">
                    <div className="glass-card clickable-card" onClick={() => onSelectTreino('a')}>
                        <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
                            <path d="M7 7h3v10H7zM14 7h3v10h-3zM10 10h4v4h-4z" />
                        </svg>
                        <h2>Treino A</h2>
                        <p>Inferiores.</p>
                    </div>

                    <div className="glass-card clickable-card" onClick={() => onSelectTreino('b')}>
                        <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
                            <path d="M6 12h12M9 8l-3 4 3 4M15 8l3 4-3 4" />
                        </svg>
                        <h2>Treino B</h2>
                        <p>Superiores: costas e bíceps.</p>
                    </div>

                    <div className="glass-card clickable-card" onClick={() => onSelectTreino('c')}>
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

    if (telaAtiva === 'milena') {
        return (
            <MilenaPage
                onBack={() => setTelaAtiva('selecao')}
                onSelectTreino={(treino) => setTelaAtiva(`milena-${treino}` as TelaAtiva)}
            />
        );
    }

    if (telaAtiva === 'milena-a') {
        return <MilenaInferioresPage onBack={() => setTelaAtiva('milena')} />;
    }

    if (telaAtiva === 'milena-b') {
        return <MilenaCostasBicepsPage onBack={() => setTelaAtiva('milena')} />;
    }

    if (telaAtiva === 'milena-c') {
        return <MilenaOmbroPeitoAbdomenPage onBack={() => setTelaAtiva('milena')} />;
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
