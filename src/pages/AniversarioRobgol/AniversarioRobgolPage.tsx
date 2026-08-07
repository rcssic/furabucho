import React, { useState } from 'react';
import './style.css'; // Estilo compartilhado com o visual Glassmorphism

const SubjectAccordion: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`glass-accordion ${isOpen ? 'open' : ''}`}>
            <button className="glass-accordion-header" onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <svg 
                    viewBox="0 0 24 24" 
                    width="20" 
                    height="20" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none" 
                    style={{ 
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                        transition: 'transform 0.3s' 
                    }}
                >
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
            <div 
                className="glass-accordion-content" 
                style={{ 
                    maxHeight: isOpen ? '4000px' : '0', 
                    opacity: isOpen ? 1 : 0,
                    transition: 'all 0.4s ease-in-out',
                    overflow: 'hidden'
                }}
            >
                <div className="accordion-inner">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default function RobgolAniversarioPage() {
    return (
        <div className="cargo-glass-wrapper">
            <div className="cargo-content-max">
                
                <header className="cargo-header">
                    <button className="glass-btn-pill" onClick={() => window.location.hash = '/'}>
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        Voltar
                    </button>
                    <h1>Aniversário Robgol</h1>
                    <p>Planejamento da festa, organização dos gastos e lista oficial de convidados</p>
                    <div className="glass-btn-pill" style={{ cursor: 'default' }}>
                        Data do Evento: 16/08
                    </div>
                </header>

                <div className="glass-grid">
                    
                    {/* Resumo Geral (Estilo Informações do Concurso) */}
                    <div className="glass-card">
                        <h2>Resumo Geral</h2>
                        <ul className="glass-data-list">
                            <li><span>Data do Evento</span> <strong>16/08</strong></li>
                            <li><span>Total de Convidados</span> <strong>99 Pessoas</strong></li>
                            <li><span>Adultos Cadastrados</span> <strong>78 Convidados</strong></li>
                            <li><span>Crianças Cadastradas</span> <strong>21 Crianças</strong></li>
                        </ul>
                    </div>

                    {/* Planejamento de Gastos (Estilo Valores de Taxas do Concurso) */}
                    <div className="glass-card">
                        <h2>Planejamento Financeiro</h2>
                        <ul className="glass-data-list">
                            <li><span>Local</span> <strong>R$ 400,00 - R$ 500,00</strong></li>
                            <li><span>Cadeiras e Mesas</span> <strong>R$ 200,00 <br/><small>(20 conjuntos x R$ 10,00)</small></strong></li>
                            <li><span>Decoração</span> <strong>Da Casa</strong></li>
                            <li><span>Seresta</span> <strong>Som da Casa</strong></li>
                            <li><span>Refrigerantes</span> <strong>R$ 270,00 <br/><small>(30 unidades)</small></strong></li>
                            <li><span>Frutas para suco</span> <strong>R$ 70,00</strong></li>
                            <li><span>Churrasco</span> <strong>R$ 280,00</strong></li>
                            <li><span>Plásticos e descartáveis</span> <strong>R$ 150,00</strong></li>
                            <li style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px', marginTop: '4px' }}>
                                <span><strong>Gastos Totais (Aprox.)</strong></span> <strong>R$ 1.470,00</strong>
                            </li>
                        </ul>
                    </div>

                    {/* Divisão dos Pratos (Estilo Quadro de Vagas/Provas do Concurso) */}
                    <div className="glass-card full">
                        <h2>Quem vai levar o quê</h2>
                        <ul className="glass-data-list food-assignments-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
                            <li className="food-assignment"><strong>Dirlene e Delis</strong><span>Bolo e Doces</span></li>
                            <li className="food-assignment"><strong>Milena</strong><span>Lasanha Especial</span></li>
                            <li className="food-assignment"><strong>Mary</strong><span>Bobó de Camarão</span></li>
                            <li className="food-assignment"><strong>Magda</strong><span>Pãozinho de Festa</span></li>
                            <li className="food-assignment"><strong>Cinha <br/><small>(A definir)</small></strong><span>Prato de Entrada</span></li>
                            <li className="food-assignment"><strong>Terezinha <br/><small>(A definir)</small></strong><span>Bolo Salgado / Torta</span></li>
                            <li className="food-assignment"><strong>Dione <br/><small>(A definir)</small></strong><span>Sobremesas Diversas</span></li>
                            <li className="food-assignment"><strong>Marina <br/><small>(A definir)</small></strong><span>Petiscos de Entrada</span></li>
                            <li className="food-assignment"><strong>Dayze <br/><small>(A definir)</small></strong><span>Salgadinhos Fritos</span></li>
                            <li className="food-assignment"><strong>Nadia <br/><small>(A definir)</small></strong><span>Bebidas Alcoólicas</span></li>
                        </ul>
                    </div>

                    <div className="glass-section-title">
                        <h2>Lista Oficial de Convidados (Por Núcleo Familiar)</h2>
                        <p>Clique em cada bloco familiar para visualizar os nomes dos adultos e das crianças presentes.</p>
                    </div>

                    <div className="glass-card full padding-zero">
                        
                        <div className="area-badge">GRUPOS E FAMÍLIAS CADASTRADAS</div>

                        <SubjectAccordion title="1. FAMÍLIA ROBSON (10 Adultos | 1 Criança)">
                            <div className="indent-level-1"><strong>Adultos:</strong></div>
                            <div className="indent-level-2">1. Robson</div>
                            <div className="indent-level-2">2. Dirlene</div>
                            <div className="indent-level-2">3. Delis</div>
                            <div className="indent-level-2">4. Pedro</div>
                            <div className="indent-level-2">5. Ronaldo</div>
                            <div className="indent-level-2">6. Milena</div>
                            <div className="indent-level-2">7. Robinho</div>
                            <div className="indent-level-2">8. Juliete</div>
                            <div className="indent-level-2">9. Micha</div>
                            <div className="indent-level-2">10. Gina</div>
                            <div className="indent-level-1" style={{ marginTop: '12px' }}><strong>Crianças:</strong></div>
                            <div className="indent-level-2">1. Ycaro</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="2. FAMÍLIA IRMÃS SOLTEIRAS (6 Adultos | 0 Crianças)">
                            <div className="indent-level-1"><strong>Adultos:</strong></div>
                            <div className="indent-level-2">1. Bel</div>
                            <div className="indent-level-2">2. Guil</div>
                            <div className="indent-level-2">3. Vitória</div>
                            <div className="indent-level-2">4. Ginha</div>
                            <div className="indent-level-2">5. Paulo</div>
                            <div className="indent-level-2">6. Namorado do Paulo</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="3. FAMÍLIA IRMÃ CINHA (6 Adultos | 3 Crianças)">
                            <div className="indent-level-1"><strong>Adultos:</strong></div>
                            <div className="indent-level-2">1. Cinha</div>
                            <div className="indent-level-2">2. Timóteo</div>
                            <div className="indent-level-2">3. Everton</div>
                            <div className="indent-level-2">4. Erica</div>
                            <div className="indent-level-2">5. Edjunio</div>
                            <div className="indent-level-2">6. Juliane</div>
                            <div className="indent-level-1" style={{ marginTop: '12px' }}><strong>Crianças:</strong></div>
                            <div className="indent-level-2">1. Bemjamim</div>
                            <div className="indent-level-2">2. Liz</div>
                            <div className="indent-level-2">3. Edneto</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="4. FAMÍLIA IRMÃO PITU (8 Adultos | 4 Crianças)">
                            <div className="indent-level-1"><strong>Adultos:</strong></div>
                            <div className="indent-level-2">1. Pitu</div>
                            <div className="indent-level-2">2. Terezinha</div>
                            <div className="indent-level-2">3. Hiago</div>
                            <div className="indent-level-2">4. Ana</div>
                            <div className="indent-level-2">5. Hianka</div>
                            <div className="indent-level-2">6. Rafa</div>
                            <div className="indent-level-2">7. Rangel</div>
                            <div className="indent-level-2">8. Esposa do Rangel</div>
                            <div className="indent-level-1" style={{ marginTop: '12px' }}><strong>Crianças:</strong></div>
                            <div className="indent-level-2">1. Murilo</div>
                            <div className="indent-level-2">2. Vinicios</div>
                            <div className="indent-level-2">3. João</div>
                            <div className="indent-level-2">4. Bebê (Rangel)</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="5. FAMÍLIA PRISCILA (4 Adultos | 1 Criança)">
                            <div className="indent-level-1"><strong>Adultos:</strong></div>
                            <div className="indent-level-2">1. Priscila</div>
                            <div className="indent-level-2">2. Marquinhos</div>
                            <div className="indent-level-2">3. Helora</div>
                            <div className="indent-level-2">4. Heloise</div>
                            <div className="indent-level-1" style={{ marginTop: '12px' }}><strong>Crianças:</strong></div>
                            <div className="indent-level-2">1. Hadasa</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="6. FAMÍLIA CUNHADA MAGDA (6 Adultos | 0 Crianças)">
                            <div className="indent-level-1"><strong>Adultos:</strong></div>
                            <div className="indent-level-2">1. Carlos</div>
                            <div className="indent-level-2">2. Magda</div>
                            <div className="indent-level-2">3. Thales</div>
                            <div className="indent-level-2">4. Alice</div>
                            <div className="indent-level-2">5. Tulio</div>
                            <div className="indent-level-2">6. Ariely</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="7. FAMÍLIA CUNHADA DAYZE (7 Adultos | 3 Crianças)">
                            <div className="indent-level-1"><strong>Adultos:</strong></div>
                            <div className="indent-level-2">1. Deyse</div>
                            <div className="indent-level-2">2. Tadeu</div>
                            <div className="indent-level-2">3. Wilson</div>
                            <div className="indent-level-2">4. Natália</div>
                            <div className="indent-level-2">5. Nadia</div>
                            <div className="indent-level-2">6. Felipe</div>
                            <div className="indent-level-2">7. Lorena</div>
                            <div className="indent-level-1" style={{ marginTop: '12px' }}><strong>Crianças:</strong></div>
                            <div className="indent-level-2">1. Bernardo - Bebê</div>
                            <div className="indent-level-2">2. Beatriz</div>
                            <div className="indent-level-2">3. Luiz</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="8. FAMÍLIA CUNHADA MARY (9 Adultos | 4 Crianças)">
                            <div className="indent-level-1"><strong>Adultos:</strong></div>
                            <div className="indent-level-2">1. Tia mary</div>
                            <div className="indent-level-2">2. Nivaldo</div>
                            <div className="indent-level-2">3. Ramon</div>
                            <div className="indent-level-2">4. Rosinha</div>
                            <div className="indent-level-2">5. Alan</div>
                            <div className="indent-level-2">6. Mayara</div>
                            <div className="indent-level-2">7. Arthur</div>
                            <div className="indent-level-2">8. Clecia</div>
                            <div className="indent-level-2">9. Yasmin</div>
                            <div className="indent-level-1" style={{ marginTop: '12px' }}><strong>Crianças:</strong></div>
                            <div className="indent-level-2">1. Caleb</div>
                            <div className="indent-level-2">2. Rafinha</div>
                            <div className="indent-level-2">3. Davi</div>
                            <div className="indent-level-2">4. Nicolas</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="9. FAMÍLIA CUNHADA MARINA (3 Adultos | 0 Crianças)">
                            <div className="indent-level-1"><strong>Adultos:</strong></div>
                            <div className="indent-level-2">1. Marina</div>
                            <div className="indent-level-2">2. Alex</div>
                            <div className="indent-level-2">3. Pedro</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="10. FAMÍLIA AMIGO EDUARDO (4 Adultos | 0 Crianças)">
                            <div className="indent-level-1"><strong>Adultos:</strong></div>
                            <div className="indent-level-2">1. Eduardo</div>
                            <div className="indent-level-2">2. Sil</div>
                            <div className="indent-level-2">3. Eduarda</div>
                            <div className="indent-level-2">4. Vinicios</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="11. FAMÍLIA CUNHADA DIONE (6 Adultos | 1 Criança)">
                            <div className="indent-level-1"><strong>Adultos:</strong></div>
                            <div className="indent-level-2">1. Dione</div>
                            <div className="indent-level-2">2. Junior</div>
                            <div className="indent-level-2">3. Malu</div>
                            <div className="indent-level-2">4. Namorado Malu</div>
                            <div className="indent-level-2">5. Lucas</div>
                            <div className="indent-level-2">6. Ray</div>
                            <div className="indent-level-1" style={{ marginTop: '12px' }}><strong>Crianças:</strong></div>
                            <div className="indent-level-2">1. Ryan - bebê</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="12. FAMÍLIA DO NAMORADO DA DELIS (3 Adultos | 0 Crianças)">
                            <div className="indent-level-1"><strong>Adultos:</strong></div>
                            <div className="indent-level-2">1. Pai</div>
                            <div className="indent-level-2">2. Mãe</div>
                            <div className="indent-level-2">3. Irmão</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="13. FAMÍLIA NAMORADA DO RONALDO (3 Adultos | 0 Crianças)">
                            <div className="indent-level-1"><strong>Adultos:</strong></div>
                            <div className="indent-level-2">1. Mãe</div>
                            <div className="indent-level-2">2. Irmã 1</div>
                            <div className="indent-level-2">3. Irmã 2</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="14. FAMÍLIA AMIGA JOELMA (1 Adulto | 1 Criança)">
                            <div className="indent-level-1"><strong>Adultos:</strong></div>
                            <div className="indent-level-2">1. Joelma</div>
                            <div className="indent-level-1" style={{ marginTop: '12px' }}><strong>Crianças:</strong></div>
                            <div className="indent-level-2">1. Clara</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="15. FAMÍLIA AMIGO HALBATE (2 Adultos | 3 Crianças)">
                            <div className="indent-level-1"><strong>Adultos:</strong></div>
                            <div className="indent-level-2">1. Halbate</div>
                            <div className="indent-level-2">2. Tacy</div>
                            <div className="indent-level-1" style={{ marginTop: '12px' }}><strong>Crianças:</strong></div>
                            <div className="indent-level-2">1. Alice</div>
                            <div className="indent-level-2">2. Kante</div>
                            <div className="indent-level-2">3. Aliço</div>
                        </SubjectAccordion>

                    </div>
                </div>
            </div>
        </div>
    );
}
