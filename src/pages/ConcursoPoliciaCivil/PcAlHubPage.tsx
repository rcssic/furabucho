import React from 'react';

export default function PcAlHub() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0f172a' }}>
            <svg 
                viewBox="0 0 24 24" 
                width="120" 
                height="120" 
                stroke="#60a5fa" 
                strokeWidth="1.5" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <h1 style={{ color: '#f8fafc', marginTop: '24px', fontFamily: 'sans-serif' }}>
                Teste de Rota - Hub Ativo
            </h1>
        </div>
    );
}
