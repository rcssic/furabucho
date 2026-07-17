import React from 'react';
import './style.css';

export const FileTreePage: React.FC = () => {
  return (
    <div className="filetree-wrapper">
      <div className="filetree-content">
        
        {/* Cabeçalho */}
        <header className="filetree-header">
          {/* AQUI ESTAVA neo-btn-back. CORRIGIDO PARA glass-btn-back */}
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

        {/* Card: Árvore (AQUI ESTAVA neo-section. CORRIGIDO PARA glass-section) */}
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

        {/* Card: Práticas (CORRIGIDO PARA glass-section) */}
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
              <strong>Registro Dinâmico:</strong> Não há lista manual de rotas. O arquivo <code>metadata.ts</code> cadastra a página em tempo de compilação.
            </li>
            <li>
              <strong>Coesão Visual:</strong> O design system é centralizado. Utilize as variáveis CSS do tema global para manter o Neomorfismo consistente.
            </li>
          </ul>
        </section>

        {/* Card: Prompt (CORRIGIDO PARA glass-section) */}
        <section className="glass-section">
          <div className="section-title">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" y1="19" x2="20" y2="19"></line>
            </svg>
            <h2>Prompt de Geração via IA</h2>
          </div>
          <p className="section-desc">
            Forneça este prompt para a IA garantir que o novo código respeite as restrições da arquitetura.
          </p>
          <div className="prompt-block">
            <p>
              "Atue como um Engenheiro de Software Sênior. Crie uma nova página para minha aplicação seguindo estritamente a arquitetura existente."
            </p>
            <p>
              "Crie um módulo isolado em <strong>src/pages/[NomeDaPagina]/</strong> contendo: <code>index.ts</code>, <code>[Nome]Page.tsx</code>, <code>style.css</code> e obrigatoriamente <code>metadata.ts</code>."
            </p>
            <p>
              "O metadata.ts deve exportar: id, title, description, icon (svg) e keywords. A página deve ser coesa, limpa (Clean Code), utilizar a paleta de cores CSS Variables do projeto (sem bibliotecas externas) e não quebrar o isolamento de módulos."
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};
