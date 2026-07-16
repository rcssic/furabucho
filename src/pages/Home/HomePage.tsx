import React, { useState, useMemo } from 'react';
import { NeumorphicInput } from '../../shared/components/NeumorphicInput';
import { Launchpad } from '../../shared/components/Launchpad';
import { searchPages, getPagesCatalog } from '../../core/catalog';
import './style.css';

export const HomePage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isLaunchpadOpen, setLaunchpadOpen] = useState(false);

  const searchResults = useMemo(() => searchPages(query), [query]);
  const allPages = useMemo(() => getPagesCatalog(), []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Armazém</h1>
      </div>

      <div className="search-section">
        <NeumorphicInput
          type="text"
          placeholder="Pesquisar páginas..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        
        {query && (
           <div className="search-results">
             {searchResults.length > 0 ? (
               searchResults.map(page => (
                 <div key={page.id} className="search-item" onClick={() => window.location.hash = page.path}>
                   {page.icon} <span>{page.title}</span>
                 </div>
               ))
             ) : (
               <div className="search-item-empty">Nenhuma página encontrada.</div>
             )}
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
