import React, { useState, useMemo } from 'react';
import { NeumorphicInput } from '../../shared/components/NeumorphicInput';
import { Launchpad } from '../../shared/components/Launchpad';
import { searchPages, getPagesCatalog } from '../../core/catalog';
import './style.css';

export const HomePage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isLaunchpadOpen, setLaunchpadOpen] = useState(false);

  // Busca instantânea
  const searchResults = useMemo(() => searchPages(query), [query]);
  const allPages = useMemo(() => getPagesCatalog(), []);

  return (
    <div className="home-container">
      <div className="search-section">
        <NeumorphicInput
          type="text"
          placeholder="Pesquisar páginas..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        
        {query && (
           <div className="search-results">
             {/* Componente simples de lista de resultados aqui */}
             {searchResults.map(page => (
               <div key={page.id} className="search-item" onClick={() => window.location.hash = page.path}>
                 {page.icon} {page.title}
               </div>
             ))}
           </div>
        )}
      </div>

      <button className="neo-button" onClick={() => setLaunchpadOpen(true)}>
        Mostrar páginas
      </button>

      <Launchpad 
        isOpen={isLaunchpadOpen} 
        onClose={() => setLaunchpadOpen(false)} 
        pages={allPages} 
      />
    </div>
  );
};
