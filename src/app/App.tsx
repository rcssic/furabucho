import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/Home/HomePage';
import { getPagesCatalog } from '../core/catalog';

// Pega TODOS os arquivos que terminam com Page.tsx dentro da pasta pages
const pageModules = import.meta.glob('../pages/**/*Page.tsx');

export const App: React.FC = () => {
  const catalog = getPagesCatalog();

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {catalog.map(page => {
          // Previne duplicar a página Home
          if (page.id.toLowerCase() === 'home') return null;

          // Normaliza o ID para fazer a busca independente da nomenclatura da pasta
          const normalizedId = page.id.replace(/-/g, '').toLowerCase();
          
          const modulePath = Object.keys(pageModules).find(path => 
            path.toLowerCase().includes(normalizedId)
          );

          if (!modulePath) {
            console.warn(`Arquivo não encontrado para a página: ${page.title}`);
            return null;
          }

          const importModule = pageModules[modulePath] as () => Promise<any>;

          // Carregamento Lazy à prova de falhas (Ignora flags internas do Vite)
          const LazyComponent = React.lazy(() => 
            importModule().then((module) => {
              // O SEGREDO ESTÁ AQUI: Procuramos exclusivamente a exportação que seja uma função (O componente React)
              const componentExport = Object.values(module).find(
                (exportItem) => typeof exportItem === 'function'
              );
              
              if (!componentExport) {
                return { default: () => <div style={{ color: 'white', padding: '40px' }}>Erro: Componente React não encontrado no arquivo.</div> };
              }

              return { default: componentExport as React.ComponentType<any> };
            }).catch(() => {
              return { default: () => <div style={{ color: 'white', padding: '40px' }}>Falha catastrófica ao carregar o módulo da página.</div> };
            })
          );

          return (
            <Route 
              key={page.id} 
              path={page.path} 
              element={
                <React.Suspense fallback={<div style={{ padding: '40px', color: 'var(--text-secondary)' }}>Carregando página...</div>}>
                  <LazyComponent />
                </React.Suspense>
              } 
            />
          );
        })}
        
        {/* Fallback: se a url for inválida, volta pra Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};
