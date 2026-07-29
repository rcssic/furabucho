import React from 'react';
import './style.css';

export default function SelecaoCargoPage() {
    return (
        <div className="cargo-glass-wrapper">
            <div className="cargo-content-max">
                
                <header className="cargo-header">
                    <button className="glass-btn-pill" onClick={() => window.location.hash = '/'}>
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        Voltar
                    </button>
                    <h1>Seleção de Cargo</h1>
                    <p>Selecione abaixo o cargo desejado para acessar o edital e o conteúdo programático.</p>
                </header>

                <div className="glass-grid">
                    
                    {/* QUADRADO 1: AGENTE */}
                    <div 
                        className="glass-card clickable-card" 
                        onClick={() => window.location.hash = '#/id-da-pagina-agente'} // Substitua pelo ID real do metadata
                    >
                        <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                        <h2>Agente de Polícia</h2>
                        <p>Acessar informações completas, vagas e ementa para Agente.</p>
                    </div>

                    {/* QUADRADO 2: ESCRIVÃO */}
                    <div 
                        className="glass-card clickable-card" 
                        onClick={() => window.location.hash = '#/id-da-pagina-escrivao'} // Substitua pelo ID real do metadata
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
