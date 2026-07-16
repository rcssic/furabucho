import React from 'react';
import './style.css';

export const FileTreePage: React.FC = () => {
  return (
    <div className="filetree-container">
      <header className="filetree-header">
        <div className="header-titles">
          <h1>Arquitetura do Projeto</h1>
          <p className="subtitle">Guia estrutural e padrões da aplicação</p>
        </div>
        <button className="neo-button-small" onClick={() => window.location.hash = '/'}>
          ← Voltar
        </button>
      </header>

      <div className="cards-grid">
        {/* Card 1: Árvore de Diretórios */}
        <div className="doc-card">
          <div className="card-header">
            <span className="icon">📂</span>
            <h2>Árvore de Diretórios</h2>
          </div>
          <p className="card-text">
            Representação dos módulos. A pasta <strong>pages/</strong> é projetada para escalabilidade infinita.
          </p>
          
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <pre>
{`src/
  app/       - Configurações e Rotas
  core/      - Serviços e Auto-descoberta
  shared/    - Componentes de UI
  pages/     - Módulos independentes`}
            </pre>
          </div>
        </div>

        {/* Card 2: Boas Práticas */}
        <div className="doc-card">
          <div className="card-header">
            <span className="icon">🎯</span>
            <h2>Boas Práticas</h2>
          </div>
          <div className="practices-list">
            <div className="practice-item">
              <span className="practice-icon">⚡</span>
              <div>
                <strong>Independência</strong>
                <p>Nenhuma página deve importar dependências locais de outra.</p>
              </div>
            </div>
            <div className="practice-item">
              <span className="practice-icon">🤖</span>
              <div>
                <strong>Auto-registro</strong>
                <p>O <code>metadata.ts</code> cadastra a página automaticamente na Home.</p>
              </div>
            </div>
            <div className="practice-item">
              <span className="practice-icon">📦</span>
              <div>
                <strong>Coesão</strong>
                <p>Tudo o que a página usa fica dentro da própria pasta.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Prompt IA (Ocupa a largura total na parte de baixo) */}
        <div className="doc-card full-width">
          <div className="card-header">
            <span className="icon">🧠</span>
            <h2>Como gerar novas páginas via IA</h2>
          </div>
          <p className="card-text">
            Copie o prompt abaixo. Ele possui instruções diretas e separadas para garantir que a arquitetura seja respeitada.
          </p>
          
          <div className="prompt-container">
            <p className="prompt-text">
              "Atue como um desenvolvedor Front-end Sênior. Crie uma nova página para minha aplicação seguindo estritamente a arquitetura existente."
            </p>
            <p className="prompt-text">
              "Crie um módulo isolado em <strong>src/pages/[NomeDaPagina]/</strong> contendo: <code>index.ts</code>, <code>[Nome]Page.tsx</code>, <code>style.css</code> e obrigatoriamente <code>metadata.ts</code>."
            </p>
            <p className="prompt-text">
              "O metadata.ts deve exportar: id, title, description, icon (emoji) e keywords. A página deve ser independente, utilizar a paleta de cores CSS Variables do projeto (sem bibliotecas externas) e organizar sua lógica separadamente."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
