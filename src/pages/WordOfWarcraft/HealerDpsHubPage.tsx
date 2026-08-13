import React, { useState } from 'react';
import '../ConcursoPoliciaCivil/style.css';
import { HealerPage } from './components/HealerPage';

type TelaAtiva = 'selecao' | 'healer' | 'dps';

interface PageProps {
    onBack: () => void;
}

function DpsPage({ onBack }: PageProps) {
    return (
        <div className="cargo-glass-wrapper">
            <div className="cargo-content-max">
                <header className="cargo-header">
                    <button className="glass-btn-pill" onClick={onBack}>
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        Voltar
                    </button>
                    <h1>DPS</h1>
                    <p>Página inicial do perfil DPS. Vamos detalhar este conteúdo no próximo passo.</p>
                </header>
            </div>
        </div>
    );
}

export default function HealerDpsHubPage() {
    const [telaAtiva, setTelaAtiva] = useState<TelaAtiva>('selecao');

    if (telaAtiva === 'healer') {
        return <HealerPage onBack={() => setTelaAtiva('selecao')} />;
    }

    if (telaAtiva === 'dps') {
        return <DpsPage onBack={() => setTelaAtiva('selecao')} />;
    }

    return (
        <div className="cargo-glass-wrapper">
            <div className="cargo-content-max">
                <header className="cargo-header">
                    <button className="glass-btn-pill" onClick={() => (window.location.hash = '/')}>
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        Voltar para Home
                    </button>
                    <h1>Word of Warcraft</h1>
                    <p>Escolha abaixo qual página deseja acessar.</p>
                </header>

                <div className="glass-grid">
                    <div className="glass-card clickable-card" onClick={() => setTelaAtiva('healer')}>
                        <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
                            <path d="M12 3v18" />
                            <path d="M3 12h18" />
                            <circle cx="12" cy="12" r="9" />
                        </svg>
                        <h2>Healer</h2>
                        <p>Entrar na página com conteúdo e organização para o perfil Healer.</p>
                    </div>

                    <div className="glass-card clickable-card" onClick={() => setTelaAtiva('dps')}>
                        <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
                            <path d="M5 12h14" />
                            <path d="M12 5v14" opacity="0.25" />
                            <circle cx="12" cy="12" r="9" />
                        </svg>
                        <h2>DPS</h2>
                        <p>Entrar na página com conteúdo e organização para o perfil DPS.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
