import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageMetadata } from '../../../core/types/metadata';
import './style.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  pages: PageMetadata[];
}

export const Launchpad: React.FC<Props> = ({ isOpen, onClose, pages }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="launchpad-overlay" onClick={onClose}>
      <div className="launchpad-container" onClick={e => e.stopPropagation()}>
        <button className="neo-close-btn" onClick={onClose}>×</button>
        <div className="launchpad-grid">
          {pages.map(page => (
            <div key={page.id} className="neo-card" onClick={() => {
              onClose();
              navigate(page.path);
            }}>
              <div className="neo-card-icon">{page.icon}</div>
              <h3>{page.title}</h3>
              <p>{page.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
