import React, { useState } from 'react';
import './style.css';

// Componente de Acordeão com efeito Glass
const SubjectAccordion: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`glass-accordion ${isOpen ? 'open' : ''}`}>
            <button className="glass-accordion-header" onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
            <div className="glass-accordion-content" style={{ maxHeight: isOpen ? '3000px' : '0', opacity: isOpen ? 1 : 0 }}>
                <div className="accordion-inner">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default function SeplagAlCargo22026Page() {
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
                    <h1>Concurso SEPLAG AL 2026</h1>
                    <p>Especialista em Gestão Pública – Especialidade: Análise de Sistemas (Cargo 2)</p>
                    <a className="glass-link-btn" href="http://www.cebraspe.org.br/concursos/seplag_al_26_especialista" target="_blank" rel="noreferrer">
                        Acessar Site do Edital
                    </a>
                </header>

                <div className="glass-grid">
                    
                    <div className="glass-card">
                        <h2>Informações da Vaga</h2>
                        <ul className="glass-data-list">
                            <li><span>Remuneração</span> <strong>R$ 5.767,15</strong></li>
                            <li><span>Jornada de Trabalho</span> <strong>40 horas semanais</strong></li>
                            <li><span>Taxa de Inscrição</span> <strong>R$ 120,00</strong></li>
                            <li><span>Banca Examinadora</span> <strong>Cebraspe</strong></li>
                        </ul>
                    </div>

                    <div className="glass-card">
                        <h2>Tabela de Vagas</h2>
                        <ul className="glass-data-list">
                            <li><span>Ampla Concorrência (AC)</span> <strong>2 Imediatas | 1 CR</strong></li>
                            <li><span>Pessoa com Deficiência (PCD)</span> <strong>0 Imediatas | 1 CR</strong></li>
                            <li><span>Cotas (PPIQ)</span> <strong>0 Imediatas | 1 CR</strong></li>
                            <li style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px', marginTop: '4px' }}>
                                <span><strong>Total Geral</strong></span> <strong>2 Imediatas | 3 CR</strong>
                            </li>
                        </ul>
                    </div>

                    <div className="glass-card">
                        <h2>Datas Importantes</h2>
                        <ul className="glass-data-list">
                            <li><span>Inscrições</span> <strong>09/03/2026 a 08/04/2026</strong></li>
                            <li><span>Pagamento da Taxa</span> <strong>Até 10/04/2026</strong></li>
                            <li><span>Locais de Prova</span> <strong>15/05/2026</strong></li>
                            <li><span>Data das Provas</span> <strong>31/05/2026 (Tarde)</strong></li>
                            <li><span>Gabarito Preliminar</span> <strong>11/06/2026</strong></li>
                            <li><span>Resultado (Objetiva)</span> <strong>08/07/2026</strong></li>
                        </ul>
                    </div>

                    <div className="glass-card">
                        <h2>Estilo da Prova</h2>
                        <ul className="glass-data-list">
                            <li><span>Método de Julgamento</span> <strong>CERTO ou ERRADO</strong></li>
                            <li><span>Penalidade</span> <strong>Marcação errada anula certa</strong></li>
                            <li><span>Duração</span> <strong>4 horas e 30 minutos</strong></li>
                            <li><span>Prova Objetiva</span> <strong>50 Básicos + 70 Específicos</strong></li>
                            <li><span>Prova Discursiva</span> <strong>Até 30 linhas (Atualidades)</strong></li>
                        </ul>
                    </div>

                    <div className="glass-section-title">
                        <h2>Conteúdo Programático Completo</h2>
                        <p>Clique nas disciplinas abaixo para expandir a ementa detalhada.</p>
                    </div>

                    <div className="glass-card full padding-zero">
                        
                        {/* =========================================
                            CONHECIMENTOS BÁSICOS 
                        ========================================= */}
                        <div className="area-badge">CONHECIMENTOS BÁSICOS (50 Itens)</div>

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

                        <SubjectAccordion title="TECNOLOGIA DA INFORMAÇÃO">
                            <div className="indent-level-1">1 Noções de sistema operacional (ambiente Windows).</div>
                            <div className="indent-level-1">2 Edição de textos, planilhas e apresentações (ambiente Microsoft Office).</div>
                            <div className="indent-level-1">3 Redes de computadores.</div>
                            <div className="indent-level-2">3.1 Conceitos básicos, ferramentas, aplicativos e procedimentos de Internet e intranet.</div>
                            <div className="indent-level-2">3.2 Programas de navegação (Microsoft Edge, Mozilla Firefox e Google Chrome e similares).</div>
                            <div className="indent-level-2">3.3 Programas de correio eletrônico (Microsoft Outlook).</div>
                            <div className="indent-level-2">3.4 Sítios de busca e pesquisa na Internet.</div>
                            <div className="indent-level-2">3.5 Grupos de discussão.</div>
                            <div className="indent-level-2">3.6 Redes sociais.</div>
                            <div className="indent-level-2">3.7 Computação na nuvem (cloud computing).</div>
                            <div className="indent-level-1">4 Noções de organização e de gerenciamento de informações, arquivos, pastas e programas.</div>
                            <div className="indent-level-1">5 Segurança da informação.</div>
                            <div className="indent-level-2">5.1 Procedimentos de segurança.</div>
                            <div className="indent-level-2">5.2 Noções de malware, vírus, worms e pragas virtuais.</div>
                            <div className="indent-level-2">5.3 Aplicativos para segurança (antivírus, firewall, anti-spyware etc.).</div>
                            <div className="indent-level-2">5.4 Procedimentos de backup.</div>
                            <div className="indent-level-2">5.5 Armazenamento de dados na nuvem (cloud storage).</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="ÉTICA E COMPLIANCE NA ADMINISTRAÇÃO PÚBLICA">
                            <div className="indent-level-1">1 Ética e moral.</div>
                            <div className="indent-level-1">2 Ética, princípios e valores.</div>
                            <div className="indent-level-1">3 Ética e democracia: exercício da cidadania.</div>
                            <div className="indent-level-1">4 Ética e função pública.</div>
                            <div className="indent-level-1">5 Ética no setor público.</div>
                            <div className="indent-level-1">6 Compliance: conceitos, suporte da alta administração, código de conduta, controles internos, treinamento e comunicação.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="CONHECIMENTOS DO ESTADO DE ALAGOAS">
                            <div className="indent-level-1">1 Formação histórica de Alagoas.</div>
                            <div className="indent-level-2">1.1 Colonização portuguesa.</div>
                            <div className="indent-level-2">1.2 Economia açucareira.</div>
                            <div className="indent-level-2">1.3 Emancipação política da Capitania de Pernambuco em 1817.</div>
                            <div className="indent-level-2">1.4 Elevação à Província em 1821.</div>
                            <div className="indent-level-1">2 Quilombo dos Palmares.</div>
                            <div className="indent-level-2">2.1 Formação no período colonial.</div>
                            <div className="indent-level-2">2.2 Resistência à escravidão.</div>
                            <div className="indent-level-2">2.3 Liderança de Zumbi dos Palmares.</div>
                            <div className="indent-level-1">3 Aspectos geográficos.</div>
                            <div className="indent-level-2">3.1 Litoral, Zona da Mata, Agreste e Sertão.</div>
                            <div className="indent-level-2">3.2 Rio São Francisco.</div>
                            <div className="indent-level-1">4 Organização político-administrativa.</div>
                            <div className="indent-level-2">4.1 Maceió como capital estadual.</div>
                            <div className="indent-level-2">4.2 Municípios.</div>
                            <div className="indent-level-2">4.3 Poderes Executivo, Legislativo e Judiciário.</div>
                            <div className="indent-level-1">5 Economia estadual.</div>
                            <div className="indent-level-2">5.1 Agroindústria canavieira.</div>
                            <div className="indent-level-2">5.2 Turismo.</div>
                            <div className="indent-level-2">5.3 Setor de serviços.</div>
                            <div className="indent-level-1">6 Cultura e patrimônio.</div>
                            <div className="indent-level-2">6.1 Manifestações culturais populares.</div>
                            <div className="indent-level-2">6.2 Patrimônio histórico-cultural alagoano.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="ATUALIDADES (SOMENTE PARA A PROVA DISCURSIVA)">
                            <div className="indent-level-1">1 Tópicos relevantes e atuais de diversas áreas, tais como segurança, transportes, política, economia, sociedade, educação, saúde, cultura, tecnologia, energia, relações internacionais, desenvolvimento sustentável e ecologia.</div>
                        </SubjectAccordion>

                        {/* =========================================
                            CONHECIMENTOS ESPECÍFICOS 
                        ========================================= */}
                        <div className="area-badge" style={{marginTop: '20px'}}>CONHECIMENTOS ESPECÍFICOS - CARGO 2 (70 Itens)</div>

                        <SubjectAccordion title="ANÁLISE DE SISTEMAS">
                            <div className="indent-level-1">1 Processos de desenvolvimento de software.</div>
                            <div className="indent-level-2">1.1 CMMI-DEV v2.0.</div>
                            <div className="indent-level-2">1.2 RUP.</div>
                            <div className="indent-level-2">1.3 Scrum 2020 e metodologias ágeis.</div>
                            <div className="indent-level-1">2 Orientação a objetos.</div>
                            <div className="indent-level-2">2.1 Conceitos fundamentais, análise, modelagem e padrões de projeto (design patterns).</div>
                            <div className="indent-level-1">3 Padrões de arquitetura.</div>
                            <div className="indent-level-2">3.1 MVC (model view controller).</div>
                            <div className="indent-level-2">3.2 Arquiteturas cliente/servidor, Internet e dispositivos móveis.</div>
                            <div className="indent-level-2">3.3 Arquiteturas baseadas em SOA (service oriented architecture), API, webservices, microsserviços e mobile.</div>
                            <div className="indent-level-2">3.4 Arquiteturas de contêineres (Docker) e orquestradores (Kubernetes, Docker Compose).</div>
                            <div className="indent-level-2">3.5 Noções de alta disponibilidade de sistemas.</div>
                            <div className="indent-level-1">4 Engenharia de software.</div>
                            <div className="indent-level-2">4.1 Conceitos de engenharia de software.</div>
                            <div className="indent-level-2">4.2 Levantamento e análise de requisitos funcionais e não funcionais.</div>
                            <div className="indent-level-2">4.3 Engenharia de requisitos.</div>
                            <div className="indent-level-2">4.4 Análise de negócios.</div>
                            <div className="indent-level-2">4.5 Modelagem e documentação de sistemas (UML 2 ou superior).</div>
                            <div className="indent-level-2">4.6 Qualidade de software.</div>
                            <div className="indent-level-2">4.7 Metodologias ágeis: Scrum 2020, XP, Lean.</div>
                            <div className="indent-level-2">4.8 Noções de técnicas e ferramentas de codeless e no-code (incluindo power automate).</div>
                            <div className="indent-level-1">5 Linguagens de programação.</div>
                            <div className="indent-level-2">5.1 Java (versão 6 ou superior).</div>
                            <div className="indent-level-2">5.2 Python (versão 3.10.0 ou superior).</div>
                            <div className="indent-level-2">5.3 C# (versão 8 ou superior).</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="DESENVOLVIMENTO DE SISTEMAS">
                            <div className="indent-level-1">1 Desenvolvimento de sistemas.</div>
                            <div className="indent-level-2">1.1 Desenvolvimento em linguagens de programação Java (versão 6 ou superior), Javascript.</div>
                            <div className="indent-level-2">1.2 Desenvolvimento para dispositivos móveis (Android e iOs).</div>
                            <div className="indent-level-1">2 Análise estática de código-fonte: clean code e ferramenta SonarQube.</div>
                            <div className="indent-level-1">3 Arquitetura de software.</div>
                            <div className="indent-level-2">3.1 Interoperabilidade de sistemas.</div>
                            <div className="indent-level-2">3.2 Arquitetura e linguagem orientada a serviços.</div>
                            <div className="indent-level-2">3.3 Web services.</div>
                            <div className="indent-level-2">3.4 API.</div>
                            <div className="indent-level-2">3.5 Arquitetura e linguagem orientada a objetos.</div>
                            <div className="indent-level-2">3.6 Arquitetura de aplicações para ambiente web.</div>
                            <div className="indent-level-2">3.7 Servidor de aplicações.</div>
                            <div className="indent-level-2">3.8 Servidor web.</div>
                            <div className="indent-level-1">4 Ambientes Internet, extranet, intranet e portal: finalidades, características físicas e lógicas, aplicações e serviços.</div>
                            <div className="indent-level-1">5 Padrões XML, XSLT, UDDI, REST e JSON.</div>
                            <div className="indent-level-1">6 DevOps.</div>
                            <div className="indent-level-1">7 Ferramenta de gestão da configuração GIT.</div>
                            <div className="indent-level-2">7.1 Testes.</div>
                            <div className="indent-level-3">7.1.1 Noções de testes de aplicações.</div>
                            <div className="indent-level-3">7.1.2 Testes ágeis.</div>
                            <div className="indent-level-3">7.1.3 Teste de usabilidade de software.</div>
                            <div className="indent-level-3">7.1.4 Testes automatizados.</div>
                            <div className="indent-level-3">7.1.5 Tipos de testes.</div>
                            <div className="indent-level-3">7.1.6 Test-driven development (TDD).</div>
                            <div className="indent-level-3">7.1.7 Gestão do ciclo de vida de testes.</div>
                            <div className="indent-level-2">7.2 RPA (robotic process automation).</div>
                            <div className="indent-level-1">8 Metodologias ágeis de desenvolvimento.</div>
                            <div className="indent-level-2">8.1 Scrum.</div>
                            <div className="indent-level-2">8.2 Kanban.</div>
                            <div className="indent-level-2">8.3 XP.</div>
                            <div className="indent-level-1">9 Padrões de desenvolvimento e reúso.</div>
                            <div className="indent-level-1">10 Codificação de software (transacionais, analíticos, mobile e API).</div>
                            <div className="indent-level-1">11 Metodologia de ponto de função.</div>
                            <div className="indent-level-1">12 Engenharia de requisitos.</div>
                            <div className="indent-level-2">12.1 Classificação de requisitos.</div>
                            <div className="indent-level-2">12.2 Processo de engenharia de requisitos.</div>
                            <div className="indent-level-2">12.3 Técnicas de elicitação de requisitos.</div>
                            <div className="indent-level-1">13 Tecnologias e práticas de frontend web.</div>
                            <div className="indent-level-2">13.1 HTML, CSS, UX, Ajax, frameworks (VueJS e React).</div>
                            <div className="indent-level-2">13.2 Padrões de frontend: SPA e PWA.</div>
                            <div className="indent-level-1">14 Protocolos HTTPS, SSL/TLS.</div>
                            <div className="indent-level-1">15 Blockchain.</div>
                            <div className="indent-level-1">16 Design de software.</div>
                            <div className="indent-level-2">16.1 Arquitetura hexagonal, microsserviços (orquestração de serviços e API gateway) e contêineres.</div>
                            <div className="indent-level-1">17 Transações distribuídas.</div>
                            <div className="indent-level-1">18 User experience (UX).</div>
                            <div className="indent-level-2">18.1 Sistemas de gestão de conteúdo.</div>
                            <div className="indent-level-3">18.1.1 Conceitos básicos e aplicações.</div>
                            <div className="indent-level-3">18.1.2 Arquitetura de informação.</div>
                            <div className="indent-level-3">18.1.3 Portais corporativos: conceitos básicos e aplicações.</div>
                            <div className="indent-level-3">18.1.4 Workflow.</div>
                            <div className="indent-level-3">18.1.5 Noções de acessibilidade e usabilidade.</div>
                            <div className="indent-level-3">18.1.6 Recomendações W3C para desenvolvimento web (web standards).</div>
                            <div className="indent-level-3">18.1.7 Desenho e planejamento de interação em aplicações web.</div>
                            <div className="indent-level-1">19 Noções de inteligência artificial (IA), análise de dados e big data.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="BANCOS DE DADOS">
                            <div className="indent-level-1">1 Fundamentos de bancos de dados.</div>
                            <div className="indent-level-2">1.1 Conceitos básicos.</div>
                            <div className="indent-level-2">1.2 Arquitetura e estrutura de dados.</div>
                            <div className="indent-level-2">1.3 Propriedades de banco de dados.</div>
                            <div className="indent-level-2">1.4 Abordagem relacional.</div>
                            <div className="indent-level-2">1.5 Integridade referencial.</div>
                            <div className="indent-level-2">1.6 SGBD: conceitos, funções e tipos.</div>
                            <div className="indent-level-1">2 Modelagem de dados.</div>
                            <div className="indent-level-2">2.1 Modelagem conceitual, lógica e física.</div>
                            <div className="indent-level-2">2.2 Normalização de dados.</div>
                            <div className="indent-level-2">2.3 Modelagem dimensional.</div>
                            <div className="indent-level-2">2.4 Avaliação de modelos de dados.</div>
                            <div className="indent-level-1">3 Linguagens de banco de dados.</div>
                            <div className="indent-level-2">3.1 Linguagem SQL (ANSI).</div>
                            <div className="indent-level-2">3.2 Linguagem de definição de dados (DDL).</div>
                            <div className="indent-level-2">3.3 Linguagem de manipulação de dados (DML).</div>
                            <div className="indent-level-1">4 Administração e tecnologias de banco de dados.</div>
                            <div className="indent-level-2">4.1 Noções de administração de dados e de bancos de dados.</div>
                            <div className="indent-level-2">4.2 Arquitetura e políticas de armazenamento de dados.</div>
                            <div className="indent-level-2">4.3 Noções de otimização de performance em larga escala.</div>
                            <div className="indent-level-2">4.4 Backup e restauração de dados.</div>
                            <div className="indent-level-1">5 Plataformas de SGBD.</div>
                            <div className="indent-level-2">5.1 Oracle 21C.</div>
                            <div className="indent-level-2">5.2 MySQL.</div>
                            <div className="indent-level-2">5.3 PostgreSQL.</div>
                            <div className="indent-level-1">6 Tecnologias e tendências em bancos de dados.</div>
                            <div className="indent-level-2">6.1 Banco de dados NoSQL.</div>
                            <div className="indent-level-2">6.2 Banco de dados em memória.</div>
                            <div className="indent-level-2">6.3 Data lakes e soluções para big data.</div>
                            <div className="indent-level-2">6.4 Técnicas de integração e ingestão de dados: ETL/ELT, transferência de arquivos, integração via base de dados.</div>
                            <div className="indent-level-1">7 Metadados.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="SEGURANÇA DA INFORMAÇÃO">
                            <div className="indent-level-1">1 Fundamentos.</div>
                            <div className="indent-level-2">1.1 Confidencialidade, integridade, disponibilidade, autenticidade e não repúdio.</div>
                            <div className="indent-level-1">2 Políticas de segurança da informação. Gestão de segurança da informação: NBR ISO/IEC 27001 e NBR ISO/IEC 27002.</div>
                            <div className="indent-level-1">2 Métodos de autenticação. (Numeração mantida conforme edital)</div>
                            <div className="indent-level-2">2.1 Autenticação de dois fatores (2FA), baseada em biometria, por token e certificados.</div>
                            <div className="indent-level-2">2.2 Protocolos de autenticação: OAuth 2.0, OpenID Connect e JWT (JSON Web Tokens).</div>
                            <div className="indent-level-1">3 Ameaças e vulnerabilidades em aplicações: injection (SQL, LDAP), cross-site scripting (XSS), quebra de autenticação e gerenciamento de sessão, referência insegura a objetos, cross-site request forgery, armazenamento inseguro de dados criptografados.</div>
                            <div className="indent-level-1">4 Segurança de aplicativos web: conceitos de segurança de aplicativos web, análise de vulnerabilidades em aplicações web, metodologia open web application security project (OWASP), técnicas de proteção de aplicações web.</div>
                            <div className="indent-level-1">5 Prevenção e combate a ataques a redes de computadores, como DDoS, DoS, DNS spoofing, eavesdropping, phishing, brute force, port scanning.</div>
                            <div className="indent-level-1">6 Criptografia e proteção de dados em trânsito e em repouso; sistemas criptográficos simétricos e assimétricos e principais protocolos.</div>
                            <div className="indent-level-1">7 Assinatura e certificação digital.</div>
                            <div className="indent-level-1">8 Gestão de riscos e continuidade de negócio: norma NBR ISO/IEC 27005.</div>
                            <div className="indent-level-1">9 Lei nº 13.709/2018 e suas alterações (Lei Geral de Proteção de Dados Pessoais).</div>
                            <div className="indent-level-1">10 Vulnerabilidades e ataques a sistemas computacionais.</div>
                            <div className="indent-level-1">11 Segurança física e lógica dos ativos de TI.</div>
                            <div className="indent-level-1">12 Conceitos:</div>
                            <div className="indent-level-2">12.1 IDS (Intrusion Detection System).</div>
                            <div className="indent-level-2">12.2 IPS (Intrusion Prevention System).</div>
                            <div className="indent-level-2">12.3 SIEM (Security Information and Event Management).</div>
                            <div className="indent-level-1">13 NIST Cybersecurity Framework.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="FISCALIZAÇÃO DE CONTRATOS DE TI">
                            <div className="indent-level-1">1 Gestão de contratação de soluções de TI.</div>
                            <div className="indent-level-1">2 Legislação aplicável à contratação de bens e serviços de TI (incluindo suas alterações).</div>
                            <div className="indent-level-2">2.1 Lei nº 13.303/2016.</div>
                            <div className="indent-level-1">3 Elaboração e fiscalização de contratos de tecnologia da informação.</div>
                            <div className="indent-level-2">3.1 Critérios de remuneração por esforço versus produto.</div>
                            <div className="indent-level-2">3.2 Cláusulas e indicadores de nível de serviço.</div>
                            <div className="indent-level-2">3.3 Papel do fiscalizador do contrato.</div>
                            <div className="indent-level-2">3.4 Papel do preposto da contratada.</div>
                            <div className="indent-level-2">3.5 Acompanhamento da execução contratual.</div>
                            <div className="indent-level-2">3.6 Registro e notificação de irregularidades.</div>
                            <div className="indent-level-2">3.7 Definição e aplicação de penalidades e sanções administrativas.</div>
                            <div className="indent-level-2">3.8 Contratações de serviços de TI baseadas em unidade de serviço técnico (UST), em pontos de função (PF) e em postos de trabalho com níveis de serviço.</div>
                        </SubjectAccordion>

                    </div>
                </div>
            </div>
        </div>
    );
}
