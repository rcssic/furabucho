import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/Home/HomePage';
import { getPagesCatalog } from '../core/catalog';

// Importação dinâmica dos componentes (Lazy Loading) para escalabilidade com centenas de páginas
const pageComponents = import.meta.glob('../pages/**/*Page.tsx');

export const App: React.FC = () => {
  const catalog = getPagesCatalog();

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {catalog.map(page => {
          // Resolve o path do componente dinamicamente com base no ID
          // Assume-se que a estrutura da página contém o componente principal
          // Alternativa robusta para o template: exportação síncrona ou mapeamento manual no router da própria página, mas automatizado para escalar.
          
          // Para este escopo, usaremos importações diretas resolvidas via Vite.
          // O id deve bater com o nome da pasta (ex: FileTree -> file-tree)
          
          return (
            <Route 
              key={page.id} 
              path={page.path} 
              element={
                <React.Suspense fallback={<div>Carregando...</div>}>
                  {React.createElement(
                    React.lazy(pageComponents[`../pages/${page.id}/${page.title.replace(' ', '')}Page.tsx`] as any)
                  )}
                </React.Suspense>
              } 
            />
          );
        })}
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};
