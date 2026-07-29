import React, { useState } from 'react';
import './style.css'; // Estilo CSS com o design Glassmorphism e efeito visual dos acordeões


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

export default function CbmAlSoldado2026Page() {
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
                    <h1>Concurso CBM AL 2026</h1>
                    <p>Praça Bombeiro Militar Combatente (QPBM/1) - Soldado (Cargo 2)</p>
                    <a 
                        className="glass-link-btn" 
                        href="http://www.cebraspe.org.br/concursos/cbm_al_26" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        Acessar Site do Edital
                    </a>
                </header>

                <div className="glass-grid">
                    
                    {/* Informações do Cargo e Remuneração */}
                    <div className="glass-card">
                        <h2>Informações do Cargo</h2>
                        <ul className="glass-data-list">
                            <li><span>Remuneração (Soldado)</span> <strong>R$ 6.067,53</strong></li>
                            <li><span>Remuneração (Aluno-Soldado)</span> <strong>R$ 2.354,67</strong></li>
                            <li><span>Carga Horária / Taxa</span> <strong>Dedicação Integral | R$ 150,00</strong></li>
                            <li><span>Banca Examinadora</span> <strong>Cebraspe (Método Cespe)</strong></li>
                        </ul>
                    </div>

                    {/* Vagas Oficiais */}
                    <div className="glass-card">
                        <h2>Vagas (Imediatas + CR)</h2>
                        <ul className="glass-data-list">
                            <li><span>Ampla Concorrência (AC)</span> <strong>84 Imediatas | 84 CR</strong></li>
                            <li><span>Cotas (PPIQ - 20%)</span> <strong>21 Imediatas | 21 CR</strong></li>
                            <li style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px', marginTop: '4px' }}>
                                <span><strong>Total Geral</strong></span> <strong>210 Vagas (105 Imediatas + 105 CR)</strong>
                            </li>
                        </ul>
                    </div>

                    {/* Datas Importantes */}
                    <div className="glass-card">
                        <h2>Datas Importantes</h2>
                        <ul className="glass-data-list">
                            <li><span>Inscrições</span> <strong>16/06 a 21/07/2026</strong></li>
                            <li><span>Isenção de Taxa</span> <strong>16 a 25/06/2026</strong></li>
                            <li><span>Pagamento da Taxa</span> <strong>Até 23/07/2026</strong></li>
                            <li><span>Locais de Prova</span> <strong>25/09/2026</strong></li>
                            <li><span>Data das Provas</span> <strong>11/10/2026 (Tarde)</strong></li>
                            <li><span>Gabarito Preliminar</span> <strong>13 a 20/10/2026</strong></li>
                            <li><span>Resultado (Objetiva)</span> <strong>17/11/2026</strong></li>
                        </ul>
                    </div>

                    {/* Estilo da Prova */}
                    <div className="glass-card">
                        <h2>Estilo da Prova</h2>
                        <ul className="glass-data-list">
                            <li><span>Formato das Questões</span> <strong>CERTO ou ERRADO</strong></li>
                            <li><span>Penalidade</span> <strong>Marcação errada anula certa</strong></li>
                            <li><span>Duração da Prova</span> <strong>4 horas e 30 minutos</strong></li>
                            <li><span>Distribuição</span> <strong>50 Básicos + 70 Específicos</strong></li>
                            <li><span>Prova Discursiva</span> <strong>Até 30 linhas (Atualidades) | 30 pontos</strong></li>
                            <li><span>Nota Mínima Discursiva</span> <strong>Mínimo de 15,00 pontos para aprovação</strong></li>
                        </ul>
                    </div>

                    {/* Próximas Etapas e Filtros */}
                    <div className="glass-card">
                        <h2>Discursivas Corrigidas (Limites)</h2>
                        <ul className="glass-data-list">
                            <li><span>Ampla Concorrência (AC)</span> <strong>840 candidatos</strong></li>
                            <li><span>Cotas (PPIQ)</span> <strong>210 candidatos</strong></li>
                            <li><span>Total Máximo de Redações</span> <strong>1.050 classificações corrigidas</strong></li>
                        </ul>
                    </div>

                    <div className="glass-card">
                        <h2>Convocados para o TAF (Limites)</h2>
                        <ul className="glass-data-list">
                            <li><span>Ampla Concorrência (AC)</span> <strong>672 candidatos</strong></li>
                            <li><span>Cotas (PPIQ)</span> <strong>168 candidatos</strong></li>
                            <li><span>Total Máximo no TAF</span> <strong>840 candidatos convocados</strong></li>
                        </ul>
                    </div>

                    {/* TAF Detalhado */}
                    <div className="glass-card full">
                        <h2>Protocolo Detalhado do Teste de Aptidão Física (TAF)</h2>
                        <div className="taf-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '15px' }}>
                            <div className="taf-gender-box" style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <h3 style={{ color: '#60a5fa', marginBottom: '10px' }}>Masculino</h3>
                                <ul className="glass-data-list">
                                    <li><span>Barra Fixa</span> <strong>6 repetições (mínimo)</strong></li>
                                    <li><span>Flexão de Braços (Solo)</span> <strong>26 repetições (4 apoios)</strong></li>
                                    <li><span>Abdominal Supra (1 min)</span> <strong>42 repetições</strong></li>
                                    <li><span>Corrida (1.600m)</span> <strong>Tempo limite: 8 minutos</strong></li>
                                    <li><span>Natação (50m)</span> <strong>Tempo limite: 51 segundos</strong></li>
                                </ul>
                            </div>
                            <div className="taf-gender-box" style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <h3 style={{ color: '#f472b6', marginBottom: '10px' }}>Feminino</h3>
                                <ul className="glass-data-list">
                                    <li><span>Isometria na Barra</span> <strong>12 segundos (mínimo)</strong></li>
                                    <li><span>Flexão de Braços (Solo)</span> <strong>32 repetições (6 apoios)</strong></li>
                                    <li><span>Abdominal Supra (1 min)</span> <strong>36 repetições</strong></li>
                                    <li><span>Corrida (1.600m)</span> <strong>Tempo limite: 9 minutos</strong></li>
                                    <li><span>Natação (50m)</span> <strong>Tempo limite: 57 segundos</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="glass-section-title">
                        <h2>Conteúdo Programático Completo</h2>
                        <p>Clique nas disciplinas abaixo para expandir a ementa detalhada do edital.</p>
                    </div>

                    <div className="glass-card full padding-zero">
                        
                        {/* =========================================
                            CONHECIMENTOS GERAIS (BÁSICOS)
                        ========================================= */}
                        <div className="area-badge">CONHECIMENTOS GERAIS (50 Questões)</div>

                        <SubjectAccordion title="LÍNGUA PORTUGUESA">
                            <div className="indent-level-1">1 Compreensão e interpretação de textos de gêneros variados.</div>
                            <div className="indent-level-1">2 Reconhecimento de tipos e gêneros textuais.</div>
                            <div className="indent-level-1">3 Domínio da ortografia oficial.</div>
                            <div className="indent-level-1">4 Domínio dos mecanismos de coesão textual.</div>
                            <div className="indent-level-2">4.1 Emprego de elementos de referenciação, substituição e repetição, de conectores e de outros elementos de sequenciação textual.</div>
                            <div className="indent-level-2">4.2 Emprego de tempos e modos verbais.</div>
                            <div className="indent-level-1">5 Domínio da estrutura morfossintática do período.</div>
                            <div className="indent-level-2">5.1 Emprego das classes de palavras.</div>
                            <div className="indent-level-2">5.2 Relações de coordenação entre orações e entre termos da oração.</div>
                            <div className="indent-level-2">5.3 Relações de subordinação entre orações e entre termos da oração.</div>
                            <div className="indent-level-2">5.4 Emprego dos sinais de pontuação.</div>
                            <div className="indent-level-2">5.5 Concordância verbal e nominal.</div>
                            <div className="indent-level-2">5.6 Regência verbal e nominal.</div>
                            <div className="indent-level-2">5.7 Emprego do sinal indicativo de crase.</div>
                            <div className="indent-level-2">5.8 Colocação dos pronomes átonos.</div>
                            <div className="indent-level-1">6 Reescrita de frases e parágrafos do texto.</div>
                            <div className="indent-level-2">6.1 Significação das palavras.</div>
                            <div className="indent-level-2">6.2 Substituição de palavras ou de trechos de texto.</div>
                            <div className="indent-level-2">6.3 Reorganização da estrutura de orações e de períodos do texto.</div>
                            <div className="indent-level-2">6.4 Reescrita de textos de diferentes gêneros e níveis de formalidade.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="LÍNGUA INGLESA">
                            <div className="indent-level-1">1 Compreensão de textos em língua inglesa.</div>
                            <div className="indent-level-1">2 Itens gramaticais relevantes para a compreensão dos conteúdos semânticos.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="NOÇÕES DE INFORMÁTICA">
                            <div className="indent-level-1">1 Noções de sistema operacional (ambientes Linux e Windows).</div>
                            <div className="indent-level-1">2 Edição de textos, planilhas e apresentações (ambientes Microsoft Office e BrOffice).</div>
                            <div className="indent-level-1">3 Redes de computadores.</div>
                            <div className="indent-level-2">3.1 Conceitos básicos, ferramentas, aplicativos e procedimentos de Internet e intranet.</div>
                            <div className="indent-level-2">3.2 Programas de navegação (Microsoft Edge, Mozilla Firefox e Google Chrome).</div>
                            <div className="indent-level-2">3.3 Programas de correio eletrônico (Outlook Express e Mozilla Thunderbird).</div>
                            <div className="indent-level-2">3.4 Sítios de busca e pesquisa na Internet.</div>
                            <div className="indent-level-2">3.5 Grupos de discussão.</div>
                            <div className="indent-level-2">3.6 Redes sociais.</div>
                            <div className="indent-level-2">3.7 Computação na nuvem (cloud computing).</div>
                            <div className="indent-level-1">4 Conceitos de organização e de gerenciamento de informações, arquivos, pastas e programas.</div>
                            <div className="indent-level-1">5 Segurança da informação.</div>
                            <div className="indent-level-2">5.1 Procedimentos de segurança.</div>
                            <div className="indent-level-2">5.2 Noções de vírus, worms e pragas virtuais.</div>
                            <div className="indent-level-2">5.3 Aplicativos para segurança (antivírus, firewall, anti-spyware etc.).</div>
                            <div className="indent-level-2">5.4 Procedimentos de backup.</div>
                            <div className="indent-level-2">5.5 Armazenamento de dados na nuvem (cloud storage).</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="MATEMÁTICA">
                            <div className="indent-level-1">1 Álgebra linear.</div>
                            <div className="indent-level-2">1.1 Conjunto numérico: operações com números inteiros, fracionários e decimais.</div>
                            <div className="indent-level-1">2 Proporções e divisão proporcional.</div>
                            <div className="indent-level-1">3 Regras de três simples e composta.</div>
                            <div className="indent-level-1">4 Porcentagem.</div>
                            <div className="indent-level-1">5 Juros simples e compostos; capitalização e descontos.</div>
                            <div className="indent-level-1">6 Taxas de juros: nominal, efetiva, equivalente, proporcional, real e aparente.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="RACIOCÍNIO LÓGICO E ANALÍTICO">
                            <div className="indent-level-1">1 Lógica sentencial (ou proposicional).</div>
                            <div className="indent-level-2">1.1 Proposições simples e compostas.</div>
                            <div className="indent-level-2">1.2 Tabelas verdade.</div>
                            <div className="indent-level-2">1.3 Equivalências.</div>
                            <div className="indent-level-1">2 Estrutura lógica de relações arbitrárias entre pessoas, lugares, objetos ou eventos fictícios; dedução de novas informações das relações fornecidas e avaliação das condições usadas para estabelecer a estrutura daquelas relações.</div>
                            <div className="indent-level-1">3 Compreensão e análise da lógica de uma situação, utilizando as funções intelectuais: raciocínio verbal, raciocínio matemático, raciocínio sequencial, reconhecimento de padrões, orientação espacial e temporal, formação de conceitos, discriminação de elementos; compreensão de dados apresentados em gráficos e tabelas.</div>
                            <div className="indent-level-1">4 Problemas de lógica e raciocínio.</div>
                            <div className="indent-level-2">4.1 Problemas de contagem e noções de probabilidade.</div>
                            <div className="indent-level-1">5 Falácias.</div>
                            <div className="indent-level-1">6 Noções de estatística: média, moda, mediana e desvio-padrão.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="LEGISLAÇÃO PERTINENTE AO CBMAL">
                            <div className="indent-level-1">1 Lei Estadual nº 5.346/1992 (dispõe sobre o Estatuto dos Policiais Militares do Estado de Alagoas e dá outras providências) e suas alterações.</div>
                            <div className="indent-level-1">2 Decreto estadual nº 37.042/1996 (Regulamento Disciplinar da Polícia Militar de Alagoas).</div>
                            <div className="indent-level-1">3 Lei Estadual nº 6.514/2004 (dispõe sobre os critérios e as condições que asseguram aos Oficiais e Praças da ativa da Polícia Militar e do Corpo de Bombeiros Militar do Estado de Alagoas o acesso na hierarquia militar e adota outras providências) e suas alterações.</div>
                            <div className="indent-level-1">4 Lei Estadual nº 6.544/2004 (dispõe sobre os critérios e as condições que asseguram aos Soldados, Cabos e Subtenentes da ativa da Polícia Militar e do Corpo de Bombeiros Militar do Estado de Alagoas o acesso na hierarquia militar e adota outras providências) e suas alterações.</div>
                            <div className="indent-level-1">5 Lei Federal nº 14.751/2023.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="CIDADANIA E DIREITOS HUMANOS">
                            <div className="indent-level-1">1 Ética e moral.</div>
                            <div className="indent-level-1">2 Ética, princípios e valores.</div>
                            <div className="indent-level-1">3 Ética e democracia: exercício da cidadania.</div>
                            <div className="indent-level-1">4 Ética e função pública.</div>
                            <div className="indent-level-1">5 Ética no setor público.</div>
                            <div className="indent-level-1">6 Teoria geral dos direitos humanos.</div>
                            <div className="indent-level-2">6.1 Conceito, terminologia, estrutura normativa, fundamentação.</div>
                            <div className="indent-level-1">7 Afirmação histórica dos direitos humanos.</div>
                            <div className="indent-level-1">8 Direitos humanos e responsabilidade do Estado.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="ATUALIDADES (SOMENTE PARA A PROVA DISCURSIVA)">
                            <div className="indent-level-1">1 Tópicos relevantes e atuais de diversas áreas, tais como segurança, transportes, política, economia, sociedade, educação, saúde, cultura, tecnologia, energia, relações internacionais, desenvolvimento sustentável e ecologia.</div>
                        </SubjectAccordion>


                        {/* =========================================
                            CONHECIMENTOS ESPECÍFICOS
                        ========================================= */}
                        <div className="area-badge" style={{ marginTop: '20px' }}>CONHECIMENTOS ESPECÍFICOS - CARGO 2 (70 Questões)</div>

                        <SubjectAccordion title="FÍSICA">
                            <div className="indent-level-1">1 Vetores.</div>
                            <div className="indent-level-2">1.1 Sistema de forças.</div>
                            <div className="indent-level-2">1.2 Composição de forças: forças de mesma direção e sentido, forças de mesma direção e sentidos diferentes.</div>
                            <div className="indent-level-2">1.3 Duas forças concorrentes.</div>
                            <div className="indent-level-2">1.4 Representação gráfica.</div>
                            <div className="indent-level-2">1.5 Binário.</div>
                            <div className="indent-level-1">2 Mecânica.</div>
                            <div className="indent-level-2">2.1 Noções de Movimento.</div>
                            <div className="indent-level-2">2.2 Movimento retilíneo: velocidade, movimento uniformemente variado, aceleração.</div>
                            <div className="indent-level-2">2.3 Movimento em duas dimensões: movimento de projéteis e movimento circular uniforme.</div>
                            <div className="indent-level-2">2.4 Leis de Newton.</div>
                            <div className="indent-level-2">2.5 Leis da Gravitação Universal.</div>
                            <div className="indent-level-2">2.6 Leis de Kepler.</div>
                            <div className="indent-level-2">2.7 Rotação da terra.</div>
                            <div className="indent-level-2">2.8 Trabalho, potência, rendimento, energia: mecânica, cinética, energia potencial e energia mecânica.</div>
                            <div className="indent-level-2">2.9 Conservação de energia mecânica.</div>
                            <div className="indent-level-1">3 Densidade e pressão.</div>
                            <div className="indent-level-2">3.1 Princípio de Pascal, Lei de Stevin, Princípio de Arquimedes.</div>
                            <div className="indent-level-1">4 Termodinâmica.</div>
                            <div className="indent-level-2">4.1 Temperatura e equilíbrio térmico.</div>
                            <div className="indent-level-2">4.2 Energia térmica e calor; calor sensível e calor latente.</div>
                            <div className="indent-level-2">4.3 Trocas de calor.</div>
                            <div className="indent-level-2">4.4 Dilatação térmica dos sólidos.</div>
                            <div className="indent-level-2">4.5 Dilatação anômala da água.</div>
                            <div className="indent-level-2">4.6 Processos de propagação do calor.</div>
                            <div className="indent-level-1">5 Óptica geométrica.</div>
                            <div className="indent-level-2">5.1 Mecanismos físicos da visão e defeitos visuais.</div>
                            <div className="indent-level-1">6 Som.</div>
                            <div className="indent-level-2">6.1 Qualidades fisiológicas do som.</div>
                            <div className="indent-level-2">6.2 Natureza e propagação do som.</div>
                            <div className="indent-level-1">7 Eletricidade e Magnetismo.</div>
                            <div className="indent-level-2">7.1 Lei de Coulomb.</div>
                            <div className="indent-level-2">7.2 Corrente elétrica.</div>
                            <div className="indent-level-2">7.3 Circuitos elétricos.</div>
                            <div className="indent-level-2">7.4 Efeito Joule.</div>
                            <div className="indent-level-2">7.5 Efeitos fisiológicos das correntes elétricas.</div>
                            <div className="indent-level-2">7.6 Campo magnético.</div>
                            <div className="indent-level-2">7.7 Ímãs.</div>
                            <div className="indent-level-1">8 Aplicações.</div>
                            <div className="indent-level-2">8.1 Efeito fotoelétrico.</div>
                            <div className="indent-level-2">8.2 Efeito estufa.</div>
                            <div className="indent-level-2">8.3 Brisas litorâneas.</div>
                            <div className="indent-level-2">8.4 Relâmpagos e trovões.</div>
                            <div className="indent-level-1">9 Princípios básicos da emissão de radioatividade, radiações ionizantes e decaimento radioativo.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="QUÍMICA">
                            <div className="indent-level-1">I ESTRUTURA DO ÁTOMO:</div>
                            <div className="indent-level-2">1 Estrutura atômica.</div>
                            <div className="indent-level-3">1.1 Partículas fundamentais do átomo.</div>
                            <div className="indent-level-3">1.2 Número atômico e massa atômica.</div>
                            <div className="indent-level-3">1.3 Massa molecular.</div>
                            <div className="indent-level-3">1.4 Número de Avogadro, mol, massa molecular, volume molecular.</div>
                            <div className="indent-level-1">II CLASSIFICAÇÃO PERIÓDICA DOS ELEMENTOS QUÍMICOS:</div>
                            <div className="indent-level-2">1 Elemento químico.</div>
                            <div className="indent-level-3">1.1 Configuração eletrônica.</div>
                            <div className="indent-level-3">1.2 Tabela periódica atual e sua estrutura.</div>
                            <div className="indent-level-3">1.3 Lei periódica.</div>
                            <div className="indent-level-3">1.4 Principais subgrupos de elementos físicos.</div>
                            <div className="indent-level-1">III LIGAÇÃO QUÍMICA:</div>
                            <div className="indent-level-2">1 Ligação iônica.</div>
                            <div className="indent-level-2">2 Ligação covalente.</div>
                            <div className="indent-level-2">3 Fórmula eletrônica (estrutural de Lewis), iônica, molecular e estrutural das substâncias.</div>
                            <div className="indent-level-2">4 Número de oxidação.</div>
                            <div className="indent-level-1">IV FUNÇÕES DE QUÍMICA INORGÂNICA:</div>
                            <div className="indent-level-2">1 Reações de neutralização, dupla troca, simples troca, redução, oxidação.</div>
                            <div className="indent-level-2">2 Ácidos, bases, sais, óxidos, conceitos, classificação, nomenclatura e propriedades gerais.</div>
                            <div className="indent-level-1">V REAÇÃO QUÍMICA:</div>
                            <div className="indent-level-2">1 Conceito de reação, equação química, reagente e produto.</div>
                            <div className="indent-level-2">2 Balanceamento de equação química.</div>
                            <div className="indent-level-2">3 Soluções, concentração das soluções (grama/litro e mol/litro).</div>
                            <div className="indent-level-1">VI QUÍMICA DO CARBONO:</div>
                            <div className="indent-level-2">1 Introdução à química orgânica.</div>
                            <div className="indent-level-3">1.1 Propriedades do átomo do carbono.</div>
                            <div className="indent-level-3">1.2 Estrutura de compostos orgânicos, cadeias carbônicas.</div>
                            <div className="indent-level-3">1.3 Classificação do átomo de carbono na cadeia carbônica.</div>
                            <div className="indent-level-3">1.4 Classificação de cadeia carbônica.</div>
                            <div className="indent-level-2">2 Funções orgânicas.</div>
                            <div className="indent-level-3">2.1 Notação, nomenclatura e propriedades físicas e químicas de hidrocarboneto, álcool, éter, fenol, cetonas, aldeídos, ácido carboxílicos, amina e amida (contendo de 1 a 8 carbonos).</div>
                            <div className="indent-level-2">3 Reações orgânicas.</div>
                            <div className="indent-level-3">3.1 Reatividade dos compostos orgânicos.</div>
                            <div className="indent-level-3">3.2 Reações de redução, oxidação e combustão.</div>
                            <div className="indent-level-2">4 Identificação e nomenclatura IUPAC das funções orgânicas.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="BIOLOGIA">
                            <div className="indent-level-1">1 Seres vivos: classificação dos seres vivos.</div>
                            <div className="indent-level-1">2 Célula.</div>
                            <div className="indent-level-2">2.1 Célula procariota e eucariota.</div>
                            <div className="indent-level-2">2.2 Componentes morfológicos das células.</div>
                            <div className="indent-level-2">2.3 Funções das estruturas celulares.</div>
                            <div className="indent-level-1">3 Anatomia e fisiologia humanas.</div>
                            <div className="indent-level-2">3.1 Fisiologia.</div>
                            <div className="indent-level-2">3.2 Posição anatômica.</div>
                            <div className="indent-level-2">3.3 Divisões do corpo humano.</div>
                            <div className="indent-level-2">3.4 Quadrantes abdominais (órgãos).</div>
                            <div className="indent-level-2">3.5 Sistema tegumentar: pele, pelos, unhas.</div>
                            <div className="indent-level-2">3.6 Sistema muscular.</div>
                            <div className="indent-level-2">3.7 Sistema esquelético: funções, divisão anatômica do esqueleto, ossos, crânio, coluna vertebral, articulações.</div>
                            <div className="indent-level-2">3.8 Sistema respiratório: função, respiração, órgãos componentes, mecanismo da respiração.</div>
                            <div className="indent-level-2">3.9 Sistema cardiovascular: principais funções, sangue, coração, movimentos cardíacos, pulso, vasos sanguíneos, circulação sanguínea.</div>
                            <div className="indent-level-2">3.10 Sistema geniturinário: sistema urinário, sistema genital masculino, sistema genital feminino.</div>
                            <div className="indent-level-2">3.11 Sistema digestório.</div>
                            <div className="indent-level-2">3.12 Sistema nervoso: função, divisão, meninges, sistema nervoso central, sistema nervoso periférico, sistema nervoso visceral, sistema nervoso somático.</div>
                            <div className="indent-level-1">4 Tecidos animais: características estruturais e funcionais.</div>
                            <div className="indent-level-1">5 Evolução dos seres vivos.</div>
                            <div className="indent-level-1">6 Reino vegetal.</div>
                            <div className="indent-level-2">6.1 Funções vitais das plantas.</div>
                            <div className="indent-level-2">6.2 Briófitas, pteridófitas, gimnospermas e angiospermas.</div>
                            <div className="indent-level-1">7 Reino Animal.</div>
                            <div className="indent-level-2">7.1 Características gerais, reprodução, nutrição, locomoção e coordenação.</div>
                            <div className="indent-level-2">7.2 Poríferos.</div>
                            <div className="indent-level-2">7.3 Cnidários.</div>
                            <div className="indent-level-2">7.4 Artrópodes.</div>
                            <div className="indent-level-2">7.5 Moluscos.</div>
                            <div className="indent-level-2">7.6 Equinodermos.</div>
                            <div className="indent-level-2">7.7 Nematelmintos.</div>
                            <div className="indent-level-2">7.8 Platelmintos.</div>
                            <div className="indent-level-2">7.9 Anelídeos.</div>
                            <div className="indent-level-2">7.10 Cordados.</div>
                            <div className="indent-level-1">8 Saúde, higiene e saneamento básico.</div>
                            <div className="indent-level-2">8.1 Princípios básicos de saúde.</div>
                            <div className="indent-level-2">8.2 Doenças adquiridas transmissíveis:</div>
                            <div className="indent-level-3">8.2.1 Viroses (transmissão e profilaxia) — AIDS, dengue, poliomielite, raiva e sarampo.</div>
                            <div className="indent-level-3">8.2.2 Infecções bacterianas (transmissão e profilaxia) — tuberculose, sífilis, meningite meningocócica, cólera, tétano e leptospirose.</div>
                            <div className="indent-level-3">8.2.3 Protozoonoses (transmissão e profilaxia) — amebíase, malária e doença de Chagas.</div>
                            <div className="indent-level-3">8.2.4 Verminoses (ciclo de vida e profilaxia) — ascaridíase, teníase, cisticercose, esquistossomose e ancilostomose.</div>
                            <div className="indent-level-2">8.3 Defesas do organismo: imunidade passiva e imunidade ativa.</div>
                            <div className="indent-level-1">9 Ecologia.</div>
                            <div className="indent-level-2">9.1 Relações tróficas entre os seres vivos.</div>
                            <div className="indent-level-2">9.2 Biomas.</div>
                            <div className="indent-level-2">9.3 Ciclos biogeoquímicos.</div>
                            <div className="indent-level-2">9.4 Conservação e preservação da natureza, ação antrópica, poluição e biocidas, ecossistemas e espécies ameaçadas de extinção (principalmente no Brasil).</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="MECÂNICA GERAL">
                            <div className="indent-level-1">1 Motor de combustão interna.</div>
                            <div className="indent-level-2">1.1 Conceito.</div>
                            <div className="indent-level-2">1.2 Ciclo de funcionamento (4 tempos).</div>
                            <div className="indent-level-2">1.3 Tipos de motores.</div>
                            <div className="indent-level-3">1.3.1 Ciclo Otto.</div>
                            <div className="indent-level-3">1.3.2 Ciclo Diesel.</div>
                            <div className="indent-level-1">2 Sistema de transmissão.</div>
                            <div className="indent-level-2">2.1 Função.</div>
                            <div className="indent-level-2">2.2 Componentes.</div>
                            <div className="indent-level-1">3 Sistema de freios.</div>
                            <div className="indent-level-2">3.1 Função.</div>
                            <div className="indent-level-2">3.2 Tipos.</div>
                            <div className="indent-level-2">3.3 Princípio físico.</div>
                            <div className="indent-level-1">4 Sistema de suspensão.</div>
                            <div className="indent-level-2">4.1 Função.</div>
                            <div className="indent-level-2">4.2 Componentes.</div>
                            <div className="indent-level-1">5 Sistema elétrico.</div>
                            <div className="indent-level-2">5.1 Função.</div>
                            <div className="indent-level-2">5.2 Componentes.</div>
                            <div className="indent-level-1">6 Sistema de arrefecimento.</div>
                            <div className="indent-level-2">6.1 Função.</div>
                            <div className="indent-level-2">6.2 Componentes.</div>
                            <div className="indent-level-1">7 Sistema de alimentação.</div>
                            <div className="indent-level-2">7.1 Função.</div>
                            <div className="indent-level-2">7.2 Componentes.</div>
                        </SubjectAccordion>

                    </div>
                </div>
            </div>
        </div>
    );
}
