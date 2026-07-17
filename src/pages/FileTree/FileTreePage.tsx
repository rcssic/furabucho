import React from 'react';
import './style.css';

export const FileTreePage: React.FC = () => {
  return (
    <div className="filetree-wrapper">
      <div className="filetree-content">
        
        {/* Cabeçalho */}
        <header className="filetree-header">
          <button className="glass-btn-back" onClick={() => window.location.hash = '/'}>
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Voltar
          </button>
          
          <div className="header-text">
            <h1>Arquitetura do Projeto</h1>
            <p>Guia estrutural e padrões de desenvolvimento</p>
          </div>
        </header>

        {/* Card: Árvore */}
        <section className="glass-section">
          <div className="section-title">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <h2>Estrutura de Diretórios</h2>
          </div>
          <p className="section-desc">
            A aplicação segue uma arquitetura modular. A pasta de páginas é projetada para descoberta automática e escalabilidade horizontal.
          </p>
          <div className="code-block">
            <pre>
{`src/
  app/       - Configurações, roteamento e estilos globais
  core/      - Serviços centrais, tipos e auto-descoberta (Vite glob)
  shared/    - Componentes de UI e utilitários reutilizáveis
  pages/     - Módulos independentes e isolados de cada página`}
            </pre>
          </div>
        </section>

        {/* Card: Práticas */}
        <section className="glass-section">
          <div className="section-title">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <h2>Diretrizes de Desenvolvimento</h2>
          </div>
          <ul className="guidelines-list">
            <li>
              <strong>Desacoplamento:</strong> Páginas são contêineres fechados. Elas não devem importar dependências locais de outras páginas, apenas de <code>core/</code> ou <code>shared/</code>.
            </li>
            <li>
              <strong>Registro Dinâmico:</strong> Não há lista manual de rotas. O arquivo <code>metadata.tsx</code> cadastra a página em tempo de compilação.
            </li>
            <li>
              <strong>Isolamento Visual:</strong> Cada página é responsável por gerenciar seus próprios estilos internamente, garantindo que o módulo funcione ao ser exportado.
            </li>
          </ul>
        </section>

        {/* Card: Prompt */}
        <section className="glass-section">
          <div className="section-title">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" y1="19" x2="20" y2="19"></line>
            </svg>
            <h2>Prompt de Geração via IA</h2>
          </div>
          <p className="section-desc">
            Copie o prompt abaixo e preencha a seção de requisitos específicos antes de enviar para a IA.
          </p>
          <div className="prompt-block">
            <p>
              "Atue como um Engenheiro de Software Sênior especializado em React e TypeScript. Crie um novo módulo de página totalmente isolado para minha aplicação."
            </p>
            <p>
              "Crie os seguintes arquivos: <code>index.ts</code>, <code>[Nome]Page.tsx</code>, <code>style.css</code> e <code>metadata.tsx</code>."
            </p>
            <p>
              "O arquivo <strong>metadata.tsx</strong> deve exportar por padrão (export default) um objeto contendo: <code>id</code> (string), <code>title</code> (string), <code>description</code> (string), <code>icon</code> (um elemento SVG puro do React) e <code>keywords</code> (array de strings)."
            </p>
            <p>
              "A página deve ser completamente autossuficiente e ter um design moderno e profissional. Estilize a página utilizando apenas CSS puro no arquivo local <strong>style.css</strong>, sem depender de variáveis globais do meu projeto ou de bibliotecas de UI externas (como Material ou Tailwind)."
            </p>
            <p style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', marginTop: '10px' }}>
              <strong>--- REQUISITOS ESPECÍFICOS DA PÁGINA ---</strong><br/><br/>
              <strong>Objetivo da Página:</strong> [Substitua aqui. Ex: Um Jogo da Velha interativo jogável no navegador]<br/><br/>
              <strong>Estilo Visual (Design):</strong> [Substitua aqui. Ex: Design minimalista escuro com detalhes em neon azul e sombras suaves]<br/><br/>
              <strong>Funcionalidades / Regras de Negócio:</strong> [Substitua aqui. Ex: Deve conter um placar de vitórias, exibir de quem é a vez, reconhecer empate e ter um botão de reiniciar a partida]
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};
