import React, { useState } from 'react';
import PcAlAgente2026Page from './components/PcAlAgente2026Page';
import PcAlEscrivao2026Page from './components/PcAlEscrivao2026Page';
import './style.css';

export default function PcAlHub() {
    // Controla qual tela renderizar: 'selecao', 'agente' ou 'escrivao'
    const [telaAtiva, setTelaAtiva] = useState<'selecao' | 'agente' | 'escrivao'>('selecao');

    // Se o estado for 'agente', renderiza a página do Agente e passa a função de voltar
    if (telaAtiva === 'agente') {
        return <PcAlAgente2026Page onBack={() => setTelaAtiva('selecao')} />;
    }

    // Se o estado for 'escrivao', renderiza a página do Escrivão e passa a função de voltar
    if (telaAtiva === 'escrivao') {
        return <PcAlEscrivao2026Page onBack={() => setTelaAtiva('selecao')} />;
    }

    // Tela padrão (Seleção com os quadrados)
    return (
        <div className="cargo-glass-wrapper">
            <div className="cargo-content-max">
                
                <header className="cargo-header">
                    <button className="glass-btn-pill" onClick={() => window.location.hash = '/'}>
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        Voltar para Home
                    </button>
                    <h1>Seleção de Cargo</h1>
                    <p>Selecione abaixo o cargo desejado para acessar o edital.</p>
                </header>

                <div className="glass-grid">
                    {/* QUADRADO: AGENTE */}
                    <div 
                        className="glass-card clickable-card" 
                        onClick={() => setTelaAtiva('agente')}
                    >
                        <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                        <h2>Agente de Polícia</h2>
                        <p>Acessar informações completas, vagas e ementa para Agente.</p>
                    </div>

                    {/* QUADRADO: ESCRIVÃO */}
                    <div 
                        className="glass-card clickable-card" 
                        onClick={() => setTelaAtiva('escrivao')}
                    >
                        <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        <h2>Escrivão de Polícia</h2>
                        <p>Acessar informações completas, vagas e ementa para Escrivão.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
