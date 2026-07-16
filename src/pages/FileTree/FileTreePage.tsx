import React from 'react';
import './style.css'; // Estilos neumórficos específicos da página, isolados

export const FileTreePage: React.FC = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Arquitetura do Projeto</h1>
        <button className="neo-button-small" onClick={() => window.location.hash = '/'}>Voltar</button>
      </header>

      <div className="content neo-card-large">
        <h2>Árvore de Diretórios</h2>
        <pre>
{`src/
  app/       - Configurações e Bootstrap
  core/      - Serviços e lógica global (Busca, Normalização)
  shared/    - UI/UX reutilizável (Neomorfismo)
  pages/     - Módulos independentes de páginas`}
        </pre>

        <h2>Boas Práticas e Arquitetura</h2>
        <p>1. <b>Independência:</b> Uma página não importa arquivos de outra página.</p>
        <p>2. <b>Auto-registro:</b> O arquivo <code>metadata.ts</code> cadastra a página automaticamente na Home e Roteador.</p>

        <h2>Prompt para criação de novas páginas</h2>
        <div className="prompt-box">
          <code>
            "Atue como um desenvolvedor Front-end Sênior. Crie uma nova página para minha aplicação seguindo estritamente a arquitetura existente. 
            Crie um módulo isolado em 'src/pages/[NomeDaPagina]/' contendo: components, hooks, services, utils, types, constants, index.ts, FileTreePage.tsx e obrigatoriamente metadata.ts. 
            O metadata.ts deve exportar: id, title, description, icon (emoji ou svg) e keywords. 
            A página deve ser independente, utilizando estilos baseados em CSS Variables de Neomorfismo Dark já existentes no projeto. Não quebre a arquitetura, não adicione bibliotecas externas de UI e separe as responsabilidades de UI e Lógica (Clean Code)."
          </code>
        </div>
      </div>
    </div>
  );
};
