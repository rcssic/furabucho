import React, { useState } from 'react';
import './style.css'; // Estilo CSS com o design Glassmorphism e efeito visual dos acordeões

// Componente de Acordeão com efeito Glass
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

export default function PcAlEscrivao2026Page() {
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
                    <h1>Concurso PC AL 2026</h1>
                    <p>Escrivão de Polícia Civil (Cargo 2)</p>
                    <a 
                        className="glass-link-btn" 
                        href="http://www.cebraspe.org.br/concursos/pc_al_26" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        Acessar Site do Edital
                    </a>
                </header>

                <div className="glass-grid">
                    
                    {/* Informações da Vaga */}
                    <div className="glass-card">
                        <h2>Informações da Vaga</h2>
                        <ul className="glass-data-list">
                            <li><span>Remuneração</span> <strong>R$ 5.318,63</strong></li>
                            <li><span>Jornada de Trabalho</span> <strong>40 horas semanais</strong></li>
                            <li><span>Taxa de Inscrição</span> <strong>R$ 200,00</strong></li>
                            <li><span>Banca Examinadora</span> <strong>Cebraspe (Método Cespe)</strong></li>
                        </ul>
                    </div>

                    {/* Tabela de Vagas */}
                    <div className="glass-card">
                        <h2>Tabela de Vagas</h2>
                        <ul className="glass-data-list">
                            <li><span>Ampla Concorrência (AC)</span> <strong>63 Imediatas | 63 CR</strong></li>
                            <li><span>Pessoas com Deficiência (PcD)</span> <strong>5 Imediatas | 5 CR</strong></li>
                            <li><span>Cotas (PPIQ - 20%)</span> <strong>17 Imediatas | 17 CR</strong></li>
                            <li style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px', marginTop: '4px' }}>
                                <span><strong>Total Geral</strong></span> <strong>170 Vagas (85 Imediatas + 85 CR)</strong>
                            </li>
                        </ul>
                    </div>

                    {/* Datas Importantes */}
                    <div className="glass-card">
                        <h2>Datas Importantes</h2>
                        <ul className="glass-data-list">
                            <li><span>Inscrições</span> <strong>03/08 a 11/09/2026</strong></li>
                            <li><span>Isenção de Taxa</span> <strong>03 a 14/08/2026</strong></li>
                            <li><span>Pagamento da Taxa</span> <strong>Até 14/09/2026</strong></li>
                            <li><span>Locais de Prova</span> <strong>19/11/2026</strong></li>
                            <li><span>Data das Provas</span> <strong>06/12/2026 (Tarde)</strong></li>
                            <li><span>Gabarito Preliminar</span> <strong>08 a 15/12/2026</strong></li>
                            <li><span>Resultado (Objetiva)</span> <strong>15/01/2027</strong></li>
                        </ul>
                    </div>

                    {/* Estilo da Prova */}
                    <div className="glass-card">
                        <h2>Estilo da Prova</h2>
                        <ul className="glass-data-list">
                            <li><span>Método de Julgamento</span> <strong>CERTO ou ERRADO</strong></li>
                            <li><span>Penalidade</span> <strong>Marcação errada anula certa</strong></li>
                            <li><span>Duração das Provas</span> <strong>4 horas e 30 minutos</strong></li>
                            <li><span>Prova Objetiva</span> <strong>50 Básicas + 70 Específicas (Questões)</strong></li>
                            <li><span>Prova Discursiva</span> <strong>Até 30 linhas (Atualidades) | 5,00 Pontos</strong></li>
                        </ul>
                    </div>

                    {/* Limites de Redações Corrigidas */}
                    <div className="glass-card">
                        <h2>Discursivas Corrigidas (Limites)</h2>
                        <ul className="glass-data-list">
                            <li><span>Ampla Concorrência (AC)</span> <strong>378 redações corrigidas</strong></li>
                            <li><span>Pessoas com Deficiência (PcD)</span> <strong>30 redações corrigidas</strong></li>
                            <li><span>Cotas (PPIQ)</span> <strong>102 redações corrigidas</strong></li>
                            <li style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px', marginTop: '4px' }}>
                                <span><strong>Total Corrigido</strong></span> <strong>510 discursivas corrigidas</strong>
                            </li>
                        </ul>
                    </div>

                    {/* Requisitos Básicos */}
                    <div className="glass-card">
                        <h2>Requisitos para Investidura</h2>
                        <ul className="glass-data-list">
                            <li><span>Formação Exigida</span> <strong>Nível Superior (qualquer área)</strong></li>
                            <li><span>Exigência Técnica</span> <strong>Certificado de Curso de Digitação</strong></li>
                            <li><span>Idade Mínima</span> <strong>18 anos completos na posse</strong></li>
                            <li><span>Cidades de Prova</span> <strong>Maceió/AL e Arapiraca/AL</strong></li>
                        </ul>
                    </div>

                    {/* Prova Prática de Digitação */}
                    <div className="glass-card full">
                        <h2>Prova Prática de Digitação (Etapa Eliminatória Exclusiva)</h2>
                        <ul className="glass-data-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '15px', marginTop: '10px' }}>
                            <li><span>Convocação</span> <strong>Todos os aptos no TAF</strong></li>
                            <li><span>Duração do Teste</span> <strong>10 minutos</strong></li>
                            <li><span>Pontuação Máxima</span> <strong>10,00 Pontos (não soma na Nota Final)</strong></li>
                            <li><span>Texto Esperado</span> <strong>Aprox. 2.000 caracteres (padrão IBM/PC)</strong></li>
                            <li><span>Critério de Aptidão</span> <strong>NPPD ≥ 5,00 e mínimo 100 toques líquidos</strong></li>
                        </ul>
                    </div>

                    {/* TAF Detalhado */}
                    <div className="glass-card full">
                        <h2>Protocolo do Teste de Aptidão Física (TAF)</h2>
                        <div className="taf-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '15px' }}>
                            <div className="taf-gender-box" style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <h3 style={{ color: '#60a5fa', marginBottom: '10px' }}>Masculino</h3>
                                <ul className="glass-data-list">
                                    <li><span>Barra Fixa</span> <strong>Mínimo de 3 repetições</strong></li>
                                    <li><span>Flexão Abdominal Supra (1 min)</span> <strong>Mínimo de 36 repetições</strong></li>
                                    <li><span>Flexão de Braços (Solo)</span> <strong>Mínimo de 20 repetições (4 apoios)</strong></li>
                                    <li><span>Corrida de 12 Minutos</span> <strong>Mínimo de 2.200 metros</strong></li>
                                </ul>
                            </div>
                            <div className="taf-gender-box" style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <h3 style={{ color: '#f472b6', marginBottom: '10px' }}>Feminino</h3>
                                <ul className="glass-data-list">
                                    <li><span>Barra Fixa (Isometria)</span> <strong>Mínimo de 15 segundos</strong></li>
                                    <li><span>Flexão Abdominal Supra (1 min)</span> <strong>Mínimo de 27 repetições</strong></li>
                                    <li><span>Flexão de Braços (Solo)</span> <strong>Mínimo de 15 repetições (6 apoios)</strong></li>
                                    <li><span>Corrida de 12 Minutos</span> <strong>Mínimo de 1.800 metros</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="glass-section-title">
                        <h2>Conteúdo Programático Completo</h2>
                        <p>Clique nas disciplinas abaixo para expandir a ementa detalhada.</p>
                    </div>

                    <div className="glass-card full padding-zero">
                        
                        {/* =========================================
                            CONHECIMENTOS BÁSICOS
                        ========================================= */}
                        <div className="area-badge">CONHECIMENTOS BÁSICOS (50 Questões)</div>

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

                        <SubjectAccordion title="TECNOLOGIA DA INFORMAÇÃO E SEGURANÇA CIBERNÉTICA">
                            <div className="area-badge" style={{ margin: '10px 0', background: 'rgba(255,255,255,0.05)' }}>I TECNOLOGIA DA INFORMAÇÃO</div>
                            <div className="indent-level-1">1 Noções de sistema operacional (ambientes Linux e Windows).</div>
                            <div className="indent-level-1">2 Edição de textos, planilhas e apresentações (pacotes Microsoft Office).</div>
                            <div className="indent-level-1">3 Redes de computadores.</div>
                            <div className="indent-level-2">3.1 Conceitos básicos, ferramentas, aplicativos e procedimentos de Internet e intranet.</div>
                            <div className="indent-level-2">3.2 Programas de navegação (Microsoft Edge e Google Chrome).</div>
                            <div className="indent-level-2">3.3 Programas de correio eletrônico (Microsoft Outlook).</div>
                            <div className="indent-level-2">3.4 Sítios de busca e pesquisa na Internet.</div>
                            <div className="indent-level-2">3.5 Grupos de discussão.</div>
                            <div className="indent-level-2">3.6 Computação na nuvem (cloud computing).</div>
                            <div className="indent-level-1">4 Conceitos de organização e de gerenciamento de informações, arquivos, pastas e programas.</div>
                            <div className="indent-level-1">5 Segurança da informação.</div>
                            <div className="indent-level-2">5.1 Procedimentos de segurança.</div>
                            <div className="indent-level-2">5.2 Noções de vírus, worms e pragas virtuais.</div>
                            <div className="indent-level-2">5.3 Aplicativos para segurança (antivírus, firewall, anti-spyware etc.).</div>
                            <div className="indent-level-2">5.4 Procedimentos de backup.</div>
                            <div className="indent-level-2">5.5 Armazenamento de dados na nuvem (cloud storage).</div>
                            <div className="indent-level-1">6 Banco de dados.</div>
                            <div className="indent-level-2">6.1 Organização de arquivos e métodos de acesso.</div>
                            <div className="indent-level-2">6.2 Abstração e modelos de dados.</div>
                            <div className="indent-level-2">6.3 Sistemas gerenciadores de banco de dados.</div>
                            <div className="indent-level-2">6.4 Linguagens de definição e manipulação de dados.</div>
                            <div className="indent-level-2">6.5 SQL.</div>
                            <div className="indent-level-2">6.6 Controle de proteção, segurança e integridade.</div>
                            <div className="indent-level-2">6.7 Banco de dados distribuídos e orientado a objetos.</div>
                            <div className="indent-level-1">7 Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais).</div>
                            <div className="indent-level-1">8 Serviços públicos digitais.</div>
                            <div className="indent-level-1">9 Inteligência Artificial.</div>
                            <div className="indent-level-1">10 Linguagem de programação (Java, Python, Apex e C#).</div>
                            
                            <div className="area-badge" style={{ margin: '15px 0 10px 0', background: 'rgba(255,255,255,0.05)' }}>II SEGURANÇA CIBERNÉTICA</div>
                            <div className="indent-level-1">1 Fundamentos de Segurança da Informação.</div>
                            <div className="indent-level-2">1.1 Princípios de confidencialidade.</div>
                            <div className="indent-level-2">1.2 Integridade.</div>
                            <div className="indent-level-2">1.3 Disponibilidade.</div>
                            <div className="indent-level-1">2 Gestão de Riscos e Conformidade.</div>
                            <div className="indent-level-2">2.1 Avaliação de riscos.</div>
                            <div className="indent-level-2">2.2 Políticas de segurança.</div>
                            <div className="indent-level-2">2.3 Conformidade com normas e regulamentações.</div>
                            <div className="indent-level-1">3 Segurança de Rede.</div>
                            <div className="indent-level-2">3.1 Firewalls, IDS/IPS, VPNs e segmentação de rede.</div>
                            <div className="indent-level-1">4 Criptografia.</div>
                            <div className="indent-level-2">4.1 Técnicas de criptografia e principais ferramentas.</div>
                            <div className="indent-level-1">5 Segurança em Nuvem.</div>
                            <div className="indent-level-2">5.1 Práticas de segurança para ambientes de nuvem.</div>
                            <div className="indent-level-1">6 Gestão de Identidades e Acesso: Autenticação e Autorização, Single Sign-On (SSO), Security Assertion Markup Language (SAML), OAuth2 e OpenId Connect.</div>
                            <div className="indent-level-1">7 Principais tipos de ataques e vulnerabilidades.</div>
                            <div className="indent-level-1">8 Controles e testes de segurança para aplicações Web e Web Services.</div>
                            <div className="indent-level-1">9 Soluções para Segurança da Informação: Firewall, Intrusion Detection System (IDS), Intrusion Prevention System (IPS), Security Information and Event Management (SIEM), Proxy, Identity Access Management (IAM), Privileged Access Management (PAM), Antivírus, Antispam.</div>
                            <div className="indent-level-1">10 Frameworks de segurança da informação e segurança cibernética, como, por exemplo, MITRE, CIS Controls e NIST CyberSecurity Framework (NIST CSF).</div>
                            <div className="indent-level-1">11 Tratamento de Incidentes Cibernéticos.</div>
                            <div className="indent-level-1">12 Assinatura e certificação digital, criptografia e proteção de dados em trânsito e em repouso.</div>
                            <div className="indent-level-1">13 Segurança em nuvens e de contêineres.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="RACIOCÍNIO LÓGICO-MATEMÁTICO">
                            <div className="indent-level-1">1 Princípios de contagem.</div>
                            <div className="indent-level-1">2 Razões e proporções.</div>
                            <div className="indent-level-1">3 Regras de três simples.</div>
                            <div className="indent-level-1">4 Porcentagens.</div>
                            <div className="indent-level-1">5 Equações de 1º e de 2º graus.</div>
                            <div className="indent-level-1">6 Sequências numéricas.</div>
                            <div className="indent-level-1">7 Progressões aritméticas e geométricas.</div>
                            <div className="indent-level-1">8 Funções e gráficos.</div>
                            <div className="indent-level-1">9 Estruturas lógicas.</div>
                            <div className="indent-level-1">10 Lógica de argumentação.</div>
                            <div className="indent-level-2">10.1 Analogias, inferências, deduções e conclusões.</div>
                            <div className="indent-level-1">11 Lógica sentencial (ou proposicional).</div>
                            <div className="indent-level-2">11.1 Proposições simples e compostas.</div>
                            <div className="indent-level-2">11.2 Tabelas-verdade.</div>
                            <div className="indent-level-2">11.3 Equivalências.</div>
                            <div className="indent-level-2">11.4 Leis de De Morgan.</div>
                            <div className="indent-level-2">11.5 Diagramas lógicos.</div>
                            <div className="indent-level-1">12 Lógica de primeira ordem.</div>
                            <div className="indent-level-1">13 Princípios de contagem e probabilidade.</div>
                            <div className="indent-level-1">14 Operações com conjuntos.</div>
                            <div className="indent-level-1">15 Raciocínio lógico envolvendo problemas aritméticos, geométricos e matriciais.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="NOÇÕES DE DIREITOS HUMANOS">
                            <div className="indent-level-1">1 Teoria geral dos direitos humanos.</div>
                            <div className="indent-level-2">1.1 Conceitos, terminologia, estrutura normativa, fundamentação.</div>
                            <div className="indent-level-1">2 Afirmação histórica dos direitos humanos.</div>
                            <div className="indent-level-1">3 Direitos humanos e responsabilidade do Estado.</div>
                            <div className="indent-level-1">4 Direitos humanos na Constituição Federal.</div>
                            <div className="indent-level-1">5 Política Nacional de Direitos Humanos.</div>
                            <div className="indent-level-1">6 A Constituição brasileira e os tratados internacionais de direitos humanos.</div>
                            <div className="indent-level-2">6.1 Pacto de São José da Costa Rica e Decreto nº 678/1992 (Convenção Americana sobre Direitos Humanos).</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="ATUALIDADES (SOMENTE PARA A PROVA DISCURSIVA)">
                            <div className="indent-level-1">1 Tópicos relevantes e atuais de diversas áreas, tais como segurança, transportes, política, economia, sociedade, educação, saúde, cultura, tecnologia, energia, relações internacionais, desenvolvimento sustentável e ecologia, suas inter-relações e suas vinculações históricas.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="ÉTICA NO SERVIÇO PÚBLICO">
                            <div className="indent-level-1">1 Ética e moral.</div>
                            <div className="indent-level-1">2 Ética, princípios e valores.</div>
                            <div className="indent-level-1">3 Ética e democracia: exercício da cidadania.</div>
                            <div className="indent-level-1">4 Ética e função pública.</div>
                            <div className="indent-level-1">5 Ética no setor público.</div>
                            <div className="indent-level-2">5.1 Lei estadual nº 6.754/2006 (Código de Ética Funcional do Servidor Público do Estado de Alagoas).</div>
                        </SubjectAccordion>


                        {/* =========================================
                            CONHECIMENTOS ESPECÍFICOS
                        ========================================= */}
                        <div className="area-badge" style={{ marginTop: '20px' }}>CONHECIMENTOS ESPECÍFICOS - ESCRIVÃO (70 Questões)</div>

                        <SubjectAccordion title="NOÇÕES DE DIREITO PENAL">
                            <div className="indent-level-1">1 Aplicação da lei penal.</div>
                            <div className="indent-level-2">1.1 Princípios.</div>
                            <div className="indent-level-2">1.2 A lei penal no tempo e no espaço.</div>
                            <div className="indent-level-2">1.3 Tempo e lugar do crime.</div>
                            <div className="indent-level-2">1.4 Lei penal excepcional, especial e temporária.</div>
                            <div className="indent-level-2">1.5 Contagem de prazo.</div>
                            <div className="indent-level-2">1.6 Irretroatividade da lei penal.</div>
                            <div className="indent-level-1">2 Crimes contra a pessoa.</div>
                            <div className="indent-level-1">3 Crimes contra o patrimônio.</div>
                            <div className="indent-level-1">4 Crimes contra a administração pública.</div>
                            <div className="indent-level-1">5 Disposições constitucionais aplicáveis ao direito penal.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="NOÇÕES DE DIREITO PROCESSUAL PENAL">
                            <div className="indent-level-1">1 Disposições preliminares do Código de Processo Penal.</div>
                            <div className="indent-level-1">2 Inquérito policial.</div>
                            <div className="indent-level-2">2.1 Histórico, natureza, conceito, finalidade, características, fundamento, titularidade, grau de cognição, valor probatório, formas de instauração, notitia criminis, delatio criminis, procedimentos investigativos, indiciamento, garantias do investigado, conclusão.</div>
                            <div className="indent-level-1">3 Prisão e liberdade provisória.</div>
                            <div className="indent-level-1">4 Disposições constitucionais aplicáveis ao direito processual penal.</div>
                            <div className="indent-level-1">5 Lei nº 9.099/1995 e suas alterações.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="NOÇÕES DE DIREITO CONSTITUCIONAL">
                            <div className="indent-level-1">1 Constitution Federal de 1988.</div>
                            <div className="indent-level-2">1.1 Direitos e Garantias Fundamentais.</div>
                            <div className="indent-level-2">1.2 Título V, Capítulo III ― Da Segurança Pública.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="NOÇÕES DE DIREITO ADMINISTRATIVO">
                            <div className="indent-level-1">1 Noção de organização administrativa.</div>
                            <div className="indent-level-2">1.1 Centralização, descentralização, concentração e desconcentração.</div>
                            <div className="indent-level-2">1.2 Administração direta e indireta.</div>
                            <div className="indent-level-2">1.3 Autarquias, fundações, empresas públicas e sociedade de economia mista.</div>
                            <div className="indent-level-1">2 Ato administrativo.</div>
                            <div className="indent-level-2">2.1 Conceito, requisitos, atributos, classificação e espécies.</div>
                            <div className="indent-level-1">3 Agente público.</div>
                            <div className="indent-level-2">3.1 Legislação pertinente.</div>
                            <div className="indent-level-3">3.1.1 Disposições constitucionais aplicáveis.</div>
                            <div className="indent-level-3">3.1.2 Cargo, emprego e função pública.</div>
                            <div className="indent-level-1">4 Poderes administrativos.</div>
                            <div className="indent-level-2">4.1 Hierárquico, disciplinar, regulamentar e de polícia.</div>
                            <div className="indent-level-2">4.2 Uso e abuso do poder.</div>
                            <div className="indent-level-1">5 Licitações.</div>
                            <div className="indent-level-2">5.1 Princípios.</div>
                            <div className="indent-level-2">5.2 Contratação direta, dispensa e inexigibilidade.</div>
                            <div className="indent-level-2">5.3 Modalidades, tipos e procedimentos.</div>
                            <div className="indent-level-1">6 Controle da administração pública.</div>
                            <div className="indent-level-2">6.1 Controle judicial.</div>
                            <div className="indent-level-2">6.2 Controle legislativo.</div>
                            <div className="indent-level-1">7 Responsabilidade civil do Estado.</div>
                            <div className="indent-level-2">7.1 Responsabilidade por ato comissivo do Estado.</div>
                            <div className="indent-level-2">7.2 Responsabilidade por omissão do State.</div>
                            <div className="indent-level-2">7.3 Requisitos para a demonstração da responsabilidade do Estado.</div>
                            <div className="indent-level-2">7.4 Causas excludentes e atenuantes da responsabilidade do Estado.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="LEGISLAÇÃO INSTITUCIONAL DO ESTADO DE ALAGOAS">
                            <div className="indent-level-1">1 Constituição do Estado de Alagoas.</div>
                            <div className="indent-level-1">2 Lei estadual nº 3.437/1975 e suas alterações (Estatuto da Polícia Civil do Estado de Alagoas).</div>
                            <div className="indent-level-1">3 Lei estadual nº 5.247/1991 e suas alterações (Regime Jurídico Único dos Servidores Públicos Civis do Estado de Alagoas, das Autarquias e das Fundações Públicas Estaduais).</div>
                            <div className="indent-level-1">4 Lei estadual nº 14.735/2026 e suas alterações (Lei Orgânica Nacional das Polícias Civis).</div>
                            <div className="indent-level-1">5 Lei nº 6.441/2003 e suas alterações.</div>
                            <div className="indent-level-1">6 Lei Estadual nº 6.276/2001 e suas alterações.</div>
                            <div className="indent-level-1">7 Lei estadual nº 6.479/2004.</div>
                            <div className="indent-level-1">8 Lei nº 10.826/2003 e suas alterações (Estatuto do Desarmamento).</div>
                            <div className="indent-level-1">9 Lei Estadual nº 4.590/1984.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="LEGISLAÇÃO PENAL ESPECIAL">
                            <div className="indent-level-1">1 Crimes contra as finanças públicas.</div>
                            <div className="indent-level-1">2 Lei nº 11.343/2006 e suas alterações (Tráfico ilícito e uso indevido de substâncias entorpecentes).</div>
                            <div className="indent-level-1">3 Lei nº 12.850/2013 e suas alterações (Crime organizado).</div>
                            <div className="indent-level-1">4 Lei nº 7.492/1986 (Crimes contra o sistema Financeiro Nacional).</div>
                            <div className="indent-level-1">5 Lei nº 8.137/1990 e suas alterações (Crimes contra a ordem econômica e tributária e as relações de consumo).</div>
                            <div className="indent-level-1">6 Lei nº 9.613/1998 e suas alterações (Lavagem de dinheiro).</div>
                            <div className="indent-level-1">7 Lei nº 8.176/1991 (Crimes contra a ordem econômica).</div>
                            <div className="indent-level-1">8 Lei nº 8.072/1990 e suas alterações (Crimes hediondos).</div>
                            <div className="indent-level-1">9 Lei nº 7.716/1989 e suas alterações (Crimes resultantes de preconceitos de raça ou de cor).</div>
                            <div className="indent-level-1">10 Lei nº 9.455/1997 e suas alterações (Crimes de tortura).</div>
                            <div className="indent-level-1">11 Lei nº 9.605/1998 e suas alterações (Crimes contra o meio ambiente).</div>
                            <div className="indent-level-1">12 Crimes de responsabilidade (Decreto-Lei nº 201/1967 e suas alterações, Lei nº 1.079/1950 e suas alterações, Lei nº 8.176/1991).</div>
                            <div className="indent-level-1">13 Lei nº 11.101/2005 e suas alterações (Crimes falimentares).</div>
                            <div className="indent-level-1">14 Lei nº 14.133/2021 (Crimes em licitações e contratos administrativos).</div>
                            <div className="indent-level-1">15 Lei nº 13.869/2019 (Crimes de abuso de autoridade).</div>
                            <div className="indent-level-1">16 Convenção de Budapeste: Decreto nº 11.491, de 12 de abril de 2023 (Promulga a Convenção sobre o Crime Cibernético).</div>
                            <div className="indent-level-1">17 Lei nº 13.146/2015 e suas alterações (Crimes previstos no Estatuto da Pessoa com Deficiência).</div>
                            <div className="indent-level-1">18 Lei 10.741/2003 e suas alterações (Crimes cometidos contra a pessoa idosa).</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="NOÇÕES DE CONTABILIDADE, ANÁLISE FINANCEIRA E CRIMES CONTRA A ORDEM TRIBUTÁRIA">
                            <div className="area-badge" style={{ margin: '10px 0', background: 'rgba(255,255,255,0.05)' }}>I NOÇÕES DE CONTABILIDADE</div>
                            <div className="indent-level-1">1 Conceitos, objetivos e finalidades da contabilidade.</div>
                            <div className="indent-level-1">2 Patrimônio: componentes, equação fundamental do patrimônio, situação líquida, representação gráfica.</div>
                            <div className="indent-level-1">3 Atos e fatos administrativos: conceitos, fatos permutativos, modificativos e mistos.</div>
                            <div className="indent-level-1">4 Contas: conceitos, contas de débitos, contas de créditos e saldos.</div>
                            <div className="indent-level-1">5 Plano de contas: conceitos, elenco de contas, função e funcionamento das contas.</div>
                            <div className="indent-level-1">6 Contabilização de operações contábeis diversas.</div>
                            <div className="indent-level-1">7 Análise e conciliações contábeis: conceitos, composição de contas, análise de contas, conciliação bancária.</div>
                            <div className="indent-level-1">8 Balancete de verificação: conceitos, modelos e técnicas de elaboração.</div>
                            <div className="indent-level-1">9 Balanço patrimonial: conceitos, objetivo e composição.</div>
                            <div className="indent-level-1">10 Demonstração de resultado de exercício: conceito, objetivo e composição.</div>
                            <div className="indent-level-1">11 Noções de finanças.</div>
                            <div className="indent-level-1">12 Noções de orçamento.</div>
                            <div className="indent-level-1">13 Noções de tributos e seus impactos nas operações das empresas.</div>
                            
                            <div className="area-badge" style={{ margin: '15px 0 10px 0', background: 'rgba(255,255,255,0.05)' }}>II ANÁLISE FINANCEIRA</div>
                            <div className="indent-level-1">1 Métodos de análise.</div>
                            <div className="indent-level-1">2 Ferramentas de análise.</div>
                            <div className="indent-level-1">3 Gestão de risco financeiro.</div>
                            <div className="indent-level-1">4 Identificação de riscos financeiros.</div>
                            <div className="indent-level-1">5 Estratégias de mitigação.</div>
                            <div className="indent-level-1">6 Monitoramento contínuo de riscos.</div>
                            
                            <div className="area-badge" style={{ margin: '15px 0 10px 0', background: 'rgba(255,255,255,0.05)' }}>III CRIMES CONTRA A ORDEM TRIBUTÁRIA</div>
                            <div className="indent-level-1">1 Crimes de lavagem de dinheiro ou ocultação de bens, direitos e valores.</div>
                            <div className="indent-level-2">1.1 Lei nº 9.613/1998 e suas alterações (Lei de Lavagem de Dinheiro) – Principais dispositivos e sanções.</div>
                            <div className="indent-level-1">2 Crimes de fraude a credores em processos de recuperação judicial, extrajudicial e falência.</div>
                            <div className="indent-level-1">3 Crimes contra a previdência social.</div>
                            <div className="indent-level-1">4 Crimes contra as finanças públicas.</div>
                            <div className="indent-level-1">5 Crimes contra o Sistema Financeiro Nacional.</div>
                            <div className="indent-level-1">6 Crimes contra o mercado de capitais.</div>
                            <div className="indent-level-1">7 Comparação entre fluxos financeiros e capacidade econômica declarada.</div>
                            <div className="indent-level-1">8 Indícios de fraudes contábeis e ocultação de patrimônio.</div>
                            <div className="indent-level-1">9 Transações fracionadas para evitar detecção (smurfing).</div>
                            <div className="indent-level-1">10 Transferências entre contas de empresas fictícias.</div>
                            <div className="indent-level-1">11 Uso de "laranjas" e interpostas pessoas para movimentação de recursos.</div>
                            <div className="indent-level-1">12 Saques e depósitos de valores elevados sem justificativa.</div>
                            <div className="indent-level-1">13 Movimentações incompatíveis com a renda declarada.</div>
                            <div className="indent-level-1">14 Lei nº 8.137/1990 e suas alterações (Crimes contra a ordem tributária).</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="ESTATÍSTICA E ANÁLISE DE DADOS">
                            <div className="area-badge" style={{ margin: '10px 0', background: 'rgba(255,255,255,0.05)' }}>I ESTATÍSTICA</div>
                            <div className="indent-level-1">1 Estatística descritiva e análise exploratória de dados: gráficos, diagramas, tabelas, medidas descritivas (posição, dispersão, assimetria e curtose).</div>
                            <div className="indent-level-1">2 Probabilidade.</div>
                            <div className="indent-level-2">2.1 Probabilidade e Probabilidade Condicional.</div>
                            <div className="indent-level-2">2.2 Conceitos básicos de probabilidade.</div>
                            <div className="indent-level-2">2.3 Cálculo de probabilidades condicionais.</div>
                            <div className="indent-level-2">2.4 Definições básicas e axiomas.</div>
                            <div className="indent-level-2">2.5 Probabilidade condicional e independência.</div>
                            <div className="indent-level-2">2.6 Variáveis aleatórias discretas e contínuas.</div>
                            <div className="indent-level-2">2.7 Distribuição de probabilidades.</div>
                            <div className="indent-level-2">2.8 Função de probabilidade.</div>
                            <div className="indent-level-2">2.9 Função densidade de probabilidade.</div>
                            <div className="indent-level-2">2.10 Esperança e momentos.</div>
                            <div className="indent-level-2">2.11 Distribuições especiais.</div>
                            <div className="indent-level-2">2.12 Distribuições condicionais e independência.</div>
                            <div className="indent-level-2">2.13 Transformação de variáveis.</div>
                            <div className="indent-level-2">2.14 Leis dos grandes números.</div>
                            <div className="indent-level-2">2.15 Teorema central do limite.</div>
                            <div className="indent-level-2">2.16 Amostras aleatórias.</div>
                            <div className="indent-level-2">2.17 Distribuições amostrais.</div>
                            <div className="indent-level-2">2.18 Independência de Eventos, Regra de Bayes e Teorema da Probabilidade Total.</div>
                            <div className="indent-level-2">2.19 Conceito de independência.</div>
                            <div className="indent-level-2">2.20 Aplicação da regra de Bayes.</div>
                            <div className="indent-level-2">2.21 Uso do teorema da probabilidade total.</div>
                            <div className="indent-level-2">2.22 Variáveis Aleatórias e Funções de Probabilidade.</div>
                            <div className="indent-level-3">2.22.1 Definição e exemplos de variáveis aleatórias.</div>
                            <div className="indent-level-3">2.22.2 Função de probabilidade (para variáveis discretas) e função densidade de probabilidade (para variáveis contínuas).</div>
                            <div className="indent-level-2">2.23 Principais Distribuições de Probabilidade Discretas e Contínuas.</div>
                            <div className="indent-level-3">2.23.1 Distribuição uniforme, de Bernoulli, binomial e normal.</div>
                            <div className="indent-level-2">2.24 Medidas de Tendência Central (Média aritmética, ponderada, geométrica e harmônica, mediana e moda).</div>
                            <div className="indent-level-2">2.25 Medidas de Dispersão (Amplitude, variância, desvio padrão e coeficiente de variação).</div>
                            <div className="indent-level-2">2.26 Coeficiente de Correlação de Pearson.</div>
                            <div className="indent-level-2">2.27 Teorema Central do Limite e Regra Empírica (Três Sigma).</div>
                            <div className="indent-level-2">2.28 Técnicas de Amostragem (Amostragem aleatória simples, estratificada, sistemática e por conglomerados).</div>
                            <div className="indent-level-1">3 Inferência estatística.</div>
                            <div className="indent-level-2">3.1 Estimação pontual e intervalar.</div>
                            <div className="indent-level-2">3.2 Testes de hipóteses (significância, potência, teste t de Student, teste qui-quadrado).</div>
                            <div className="indent-level-1">4 Análise de regressão linear.</div>
                            <div className="indent-level-2">4.1 Mínimos quadrados, máxima verossimilhança, inferência sobre parâmetros, análise de variância e resíduos.</div>
                            
                            <div className="area-badge" style={{ margin: '15px 0 10px 0', background: 'rgba(255,255,255,0.05)' }}>II ANÁLISE DE DADOS</div>
                            <div className="indent-level-1">1 Dados estruturados e não estruturados. Dados abertos. Coleta, tratamento, armazenamento, integração e recuperação de dados. Processos de ETL. Formatos e tecnologias: XML, JSON, CSV. Representação de dados numéricos, textuais e estruturados; aritmética computacional.</div>
                            <div className="indent-level-1">2 Exploração de dados: conceituação e características. Noções do modelo CRISP-DM. Técnicas para pré-processamento de dados. Técnicas e tarefas de mineração de dados. Classificação. Regras de associação. Análise de agrupamentos (clusterização). Detecção de anomalias. Modelagem preditiva.</div>
                            <div className="indent-level-1">3 Conceitos de Processamento de Linguagem Natural (PLN): semântica vetorial, redução de dimensionalidade, modelagem de tópicos latentes, classificação de textos, análise de sentimentos, representações com n-gramas.</div>
                            <div className="indent-level-1">4 Conceitos de Machine Learning: fontes de erro em modelos preditivos, validação e avaliação de modelos preditivos, underfitting, overfitting e técnicas de regularização, otimização de hiperparâmetros, separabilidade de dados, redução da dimensionalidade. Modelos lineares, árvores de decisão, redes neurais feed-forward, classificador Naive Bayes.</div>
                            <div className="indent-level-1">5 Linguagem Python: sintaxe, variables, tipos de dados e estruturas de controle de fluxo. Estruturas de dados, funções e arquivos. Bibliotecas: NLTK, Tensor Flow, Pandas, Numpy, Sklearn, Scipy.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="CRIMES CIBERNÉTICOS E SEGURANÇA DIGITAL">
                            <div className="area-badge" style={{ margin: '10px 0', background: 'rgba(255,255,255,0.1)' }}>I CRIMES CIBERNÉTICOS</div>
                            <div className="indent-level-1">1 Lei nº 12.737/2012.</div>
                            <div className="indent-level-1">2 Conceito e Classificação de Crimes Cibernéticos.</div>
                            <div className="indent-level-1">3 Requisitos legais e limites para a Busca e Apreensão de itens digitais (Art. 240 e seguintes do CPP).</div>
                            
                            <div className="area-badge" style={{ margin: '15px 0 10px 0', background: 'rgba(255,255,255,0.1)' }}>II SEGURANÇA DIGITAL</div>
                            <div className="indent-level-1">1 Privacidade.</div>
                            <div className="indent-level-1">2 Cuidados com redes sociais.</div>
                            <div className="indent-level-1">3 Autenticação.</div>
                            <div className="indent-level-2">3.1 Autenticação multifator (MFA).</div>
                            <div className="indent-level-2">3.2 Senhas seguras.</div>
                            <div className="indent-level-1">4 Golpes virtuais e Phishing.</div>
                            <div className="indent-level-1">5 Links suspeitos e Malwares.</div>
                            <div className="indent-level-1">6 Lei n. 13.709/2018 (Lei Geral de Proteção de Dados Pessoais).</div>
                        </SubjectAccordion>

                    </div>
                </div>
            </div>
        </div>
    );
}
