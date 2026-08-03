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

export default function DetranAlCargo22026Page() {
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
                    <h1>Concurso DETRAN AL 2026</h1>
                    <p>Analista de Trânsito – Especialidade: Análise de Sistemas (Cargo 2)</p>
                    <a 
                        className="glass-link-btn" 
                        href="http://www.cebraspe.org.br/concursos/detran_al_26" 
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
                            <li><span>Remuneração</span> <strong>R$ 7.800,00</strong></li>
                            <li><span>Jornada de Trabalho</span> <strong>40 horas semanais</strong></li>
                            <li><span>Taxa de Inscrição</span> <strong>R$ 150,00</strong></li>
                            <li><span>Banca Examinadora</span> <strong>Cebraspe</strong></li>
                        </ul>
                    </div>

                    {/* Limite de Discursivas Corrigidas */}
                    <div className="glass-card">
                        <h2>Discursivas Corrigidas</h2>
                        <ul className="glass-data-list">
                            <li><span>Ampla Concorrência (AC)</span> <strong>65 classificados</strong></li>
                            <li><span>Pessoas com Deficiência (PCD)</span> <strong>10 classificados</strong></li>
                            <li><span>Cotas (PPIQ)</span> <strong>25 classificados</strong></li>
                            <li style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px', marginTop: '4px' }}>
                                <span><strong>Total Corrigido</strong></span> <strong>100 classificados</strong>
                            </li>
                        </ul>
                    </div>

                    {/* Datas Importantes */}
                    <div className="glass-card">
                        <h2>Datas Importantes</h2>
                        <ul className="glass-data-list">
                            <li><span>Inscrições</span> <strong>06/05 a 29/06/2026</strong></li>
                            <li><span>Pagamento da Taxa</span> <strong>Até 01/07/2026</strong></li>
                            <li><span>Locais de Prova</span> <strong>03/09/2026</strong></li>
                            <li><span>Data das Provas</span> <strong>20/00/2026 (Tarde)</strong></li>
                            <li><span>Gabarito Preliminar</span> <strong>22/09 a 29/09/2026</strong></li>
                            <li><span>Resultado (Objetiva)</span> <strong>28/10/2026</strong></li>
                        </ul>
                    </div>

                    {/* Estilo da Prova */}
                    <div className="glass-card">
                        <h2>Estilo da Prova</h2>
                        <ul className="glass-data-list">
                            <li><span>Método de Julgamento</span> <strong>CERTO ou ERRADO</strong></li>
                            <li><span>Penalidade</span> <strong>Marcação errada anula certa</strong></li>
                            <li><span>Duração das Provas</span> <strong>4 horas e 30 minutos</strong></li>
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
                        <div className="area-badge">CONHECIMENTOS BÁSICOS (50 Questões)</div>

                        <SubjectAccordion title="LÍNGUA PORTUGUESA">
                            <div className="indent-level-1">1 Compreensão e interpretação de textos de gêneros variados.</div>
                            <div className="indent-level-1">2 Reconhecimento de tipos e gêneros textuais.</div>
                            <div className="indent-level-1">3 Domínio da ortografia oficial.</div>
                            <div className="indent-level-1">4 Domínio dos mecanismos de coesão textual.</div>
                            <div className="indent-level-2">4.1 Emprego de elementos de referenciação, substituição e repetição, de conectores e de outros elements de sequenciação textual.</div>
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
                            <div className="indent-level-1">6 Noções de estatísticas: média, moda, mediana e desvio-padrão.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="TECNOLOGIA DA INFORMAÇÃO">
                            <div className="indent-level-1">1 Noções de sistema operacional (ambiente Windows).</div>
                            <div className="indent-level-1">2 Edição de textos, planilhas e apresentações (ambiente Microsoft Office).</div>
                            <div className="indent-level-1">3 Redes de computadores.</div>
                            <div className="indent-level-2">3.1 Conceitos básicos, ferramentas, aplicativos e procedimentos de Internet e intranet.</div>
                            <div className="indent-level-2">3.2 Programas de navegação (Microsoft Edge, Mozilla Firefox, Google Chrome e similares).</div>
                            <div className="indent-level-2">3.3 Programas de correio eletrônico (Microsoft Outlook).</div>
                            <div className="indent-level-2">3.4 Sítios de busca e pesquisa na Internet.</div>
                            <div className="indent-level-2">3.5 Grupos de discussão.</div>
                            <div className="indent-level-2">3.6 Redes sociais.</div>
                            <div className="indent-level-2">3.7 Computação na nuvem (cloud computing).</div>
                            <div className="indent-level-1">4 Noções de organização e gerenciamento de informações, arquivos, pastas e programas.</div>
                            <div className="indent-level-1">5 Segurança da informação.</div>
                            <div className="indent-level-2">5.1 Procedimentos de segurança.</div>
                            <div className="indent-level-2">5.2 Noções de malware, vírus, worms e pragas virtuais.</div>
                            <div className="indent-level-2">5.3 Aplicativos para segurança: antivírus, firewall, anti-spyware etc.</div>
                            <div className="indent-level-2">5.4 Procedimentos de backup.</div>
                            <div className="indent-level-2">5.5 Armazenamento de dados na nuvem (cloud storage).</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="NOÇÕES DE DIREITO CONSTITUCIONAL">
                            <div className="indent-level-1">1 Princípios fundamentais da República Federativa do Brasil.</div>
                            <div className="indent-level-1">2 Direitos e garantias fundamentais.</div>
                            <div className="indent-level-1">3 Controle de constitucionalidade no ordenamento brasileiro: modalidades; efeitos subjetivos e temporais da declaração de constitucionalidade e inconstitucionalidade; ações do controle concentrado; súmula vinculante; repercussão geral.</div>
                            <div className="indent-level-1">4 Organização do Estado: organização político-administrativa; União; Estados federados; municípios; Distrito Federal e territórios; administração pública (disposições gerais; servidores públicos).</div>
                            <div className="indent-level-1">5 Organização dos poderes: Poder Legislativo; Poder Executivo; Poder Judiciário (disposições gerais; Supremo Tribunal Federal; Superior Tribunal de Justiça; tribunais regionais federais e juízes federais; tribunais e juízes eleitorais; tribunais e juízes dos estados); funções essenciais à justiça.</div>
                            <div className="indent-level-1">6 Finanças públicas: normas gerais; orçamentos.</div>
                            <div className="indent-level-1">7 Ordem econômica e financeira: princípios gerais da atividade econômica.</div>
                            <div className="indent-level-1">8 Jurisprudência do Supremo Tribunal Federal.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="NOÇÕES DE DIREITO ADMINISTRATIVO">
                            <div className="indent-level-1">1 Administração pública: princípios básicos.</div>
                            <div className="indent-level-1">2 Poderes administrativos: poder hierárquico, poder disciplinar, poder regulamentar, poder de polícia, uso e abuso do poder.</div>
                            <div className="indent-level-1">3 Serviços públicos: conceito, regime jurídico, princípios, titularidade e competência.</div>
                            <div className="indent-level-1">4 Delegação: concessão, permissão e autorização.</div>
                            <div className="indent-level-1">5 Ato administrativo: conceito, requisitos e atributos; anulação, revogação e convalidação; discricionariedade e vinculação.</div>
                            <div className="indent-level-1">6 Organização administrativa: administração direta e indireta; centralizada e decentralizada; autarquias, fundações, empresas públicas, sociedades de economia mista, consórcios públicos (Lei nº 11.107/2005).</div>
                            <div className="indent-level-1">7 Órgãos públicos: conceito, natureza e classificação.</div>
                            <div className="indent-level-1">8 Servidores públicos: cargo, emprego e função públicos.</div>
                            <div className="indent-level-1">9 (Excluido) CLT: empregado e empregador, anotações na CTPS, duração do trabalho, períodos de descanso, trabalho noturno, teletrabalho, férias anuais, dano extrapatrimonial, contrato individual do trabalho, remuneração e rescisão.</div>
                            <div className="indent-level-1">10 (Excluido) Processo administrativo (Lei estadual nº 10.177/1998): artigos 1º ao 36.</div>
                            <div className="indent-level-1">11 Controle e responsabilização da administração: controle administrativo; controle judicial; controle legislativo; responsabilidade civil do Estado.</div>
                            <div className="indent-level-1">12 Lei nº 8.429/1992: disposições gerais; atos de improbidade administrativa.</div>
                            <div className="indent-level-1">13 Licitações e contratos da administração pública: Lei nº 8.666/1993 e suas alterações.</div>
                            <div className="indent-level-1">14 Lei nº 10.520/2002.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="NOÇÕES DE DIREITO CIVIL">
                            <div className="indent-level-1">1 Fontes do direito civil, princípios aplicáveis e normas gerais.</div>
                            <div className="indent-level-1">2 Pessoas naturais e pessoas jurídicas.</div>
                            <div className="indent-level-1">3 Domicílio.</div>
                            <div className="indent-level-1">4 Bens.</div>
                            <div className="indent-level-1">5 Atos jurídicos.</div>
                            <div className="indent-level-1">6 Negócio jurídico.</div>
                            <div className="indent-level-1">7 Prescrição e decadência.</div>
                            <div className="indent-level-1">8 Prova.</div>
                            <div className="indent-level-1">9 Obrigações.</div>
                            <div className="indent-level-1">10 Contratos.</div>
                            <div className="indent-level-1">11 Responsabilidade civil.</div>
                            <div className="indent-level-1">12 Posse, propriedade e direitos reais.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="CONHECIMENTOS DO ESTADO DE ALAGOAS">
                            <div className="indent-level-1">1 Formação histórica de Alagoas.</div>
                            <div className="indent-level-2">1.1 Colonização portuguesa.</div>
                            <div className="indent-level-2">1.2 Economia açucareira.</div>
                            <div className="indent-level-2">1.3 Emancipação política da capitania de Pernambuco em 1817.</div>
                            <div className="indent-level-2">1.4 Elevação a província em 1821.</div>
                            <div className="indent-level-1">2 Quilombo dos Palmares.</div>
                            <div className="indent-level-2">2.1 Formação no período colonial.</div>
                            <div className="indent-level-2">2.2 Resistência à escravidão.</div>
                            <div className="indent-level-2">2.3 Liderança de Zumbi dos Palmares.</div>
                            <div className="indent-level-1">3 Aspectos geográficos.</div>
                            <div className="indent-level-2">3.1 Litoral, zona da mata, agreste e sertão.</div>
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
                            <div className="indent-level-1">7 Constituição do Estado de Alagoas.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="ATUALIDADES (SOMENTE PARA A PROVA DISCURSIVA)">
                            <div className="indent-level-1">1 Tópicos relevantes e atuais de diversas áreas, tais como segurança, transportes, política, economia, sociedade, educação, saúde, cultura, tecnologia, energia, relações internacionais, desenvolvimento sustentável e ecologia.</div>
                        </SubjectAccordion>

                        {/* =========================================
                            CONHECIMENTOS ESPECÍFICOS
                        ========================================= */}
                        <div className="area-badge" style={{ marginTop: '20px' }}>CONHECIMENTOS ESPECÍFICOS - CARGO 2 (70 Questões)</div>

                        <SubjectAccordion title="LEGISLAÇÃO DE TRÂNSITO">
                            <div className="indent-level-1">1 Código de Trânsito Brasileiro (Lei nº 9.503/1997 e suas alterações).</div>
                            <div className="indent-level-1">2 Resoluções do Conselho Nacional de Trânsito (CONTRAN): nº 30/1998, nº 32/1998, nº 56/1998, nº 108/1999, nº 110/2000, nº 300/2008, nº 351/2010, nº 558/2015, nº 623/2016, nº 634/2016, nº 712/2017, nº 715/2017, nº 723/2018, nº 780/2019, nº 789/2020, nº 809/2020, nº 849/2021, nº 870/2021, nº 871/2021, nº 886/2021, nº 897/2022, nº 926/2022, nº 929/2022, nº 932/2022 e nº 941/2022 e suas alterações.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="SEGURANÇA DA INFORMAÇÃO">
                            <div className="indent-level-1">1 Conceitos básicos: confidencialidade, integridade, disponibilidade, autenticidade e não repúdio.</div>
                            <div className="indent-level-1">2 Métodos de autenticação e autorização: autenticação de múltiplos fatores (MFA), protocolos de autenticação — OAuth 2.0, OpenID Connect e JWT (JSON Web Tokens).</div>
                            <div className="indent-level-1">3 Ameaças e vulnerabilidades em aplicações: injection (SQL, LDAP), cross-site scripting (XSS), quebra de autenticação e gerenciamento de sessão, referência insegura a objetos, cross-site request forgery, armazenamento inseguro de dados criptografados.</div>
                            <div className="indent-level-1">4 Segurança de aplicativos web: conceitos de segurança de aplicativos web, análise de vulnerabilidades em aplicações web, metodologia open web application security project (OWASP), técnicas de proteção de aplicações web.</div>
                            <div className="indent-level-1">5 Prevenção e combate a ataques a redes de computadores, como DDoS, DoS, DNS, spoofing, eavesdropping, phishing, brute force, port scanning.</div>
                            <div className="indent-level-1">6 Criptografia e proteção de dados em trânsito e em repouso; sistemas criptográficos simétricos e assimétricos e principais protocolos.</div>
                            <div className="indent-level-1">7 Tecnologias de segurança: firewalls, sistemas de detecção e prevenção de intrusões, antivírus, antispam.</div>
                            <div className="indent-level-1">8 Assinatura e certificação digital.</div>
                            <div className="indent-level-1">9 Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais) e suas alterações.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="INFRAESTRUTURA EM TI">
                            <div className="indent-level-1">1 Redes de computadores.</div>
                            <div className="indent-level-1">2 Endereçamento e protocolos da família TCP/IP.</div>
                            <div className="indent-level-1">3 Gerenciamento de redes TCP/IP.</div>
                            <div className="indent-level-2">3.1 Arquitetura de gerenciamento, SMI, SNMP e MIB.</div>
                            <div className="indent-level-1">4 Redes locais e de longa distância.</div>
                            <div className="indent-level-2">4.1 MPLS; redes cabeadas, redes sem fio (padrões 802.11, protocolos 802.1x, EAP, WEP, WPA e WPA2).</div>
                            <div className="indent-level-2">4.2 Noções de routing e switching.</div>
                            <div className="indent-level-1">5 Segurança em redes de computadores.</div>
                            <div className="indent-level-2">5.1 Prevenção e tratamento de incidentes; dispositivos de segurança (firewalls, IDS, IPS, proxies, NAT e VPN); tipos de ataques (spoofing, flood, DoS, DDoS, phishing); malware (vírus de computador, cavalo de Troia, adware, spyware, backdoors, keylogger, worms, ransonware).</div>
                            <div className="indent-level-1">6 Criptografia.</div>
                            <div className="indent-level-2">6.1 Conceitos básicos e aplicações; protocolos criptográficos; criptografia simétrica e assimétrica; principais algoritmos; assinatura e certificação digital.</div>
                            <div className="indent-level-1">7 Sistemas operacionais.</div>
                            <div className="indent-level-2">7.1 Fundamentos.</div>
                            <div className="indent-level-2">7.2 Gestão de processos.</div>
                            <div className="indent-level-2">7.3 Gestão de memória.</div>
                            <div className="indent-level-2">7.4 Gestão de entrada e saída.</div>
                            <div className="indent-level-1">8 Cloud computing.</div>
                            <div className="indent-level-2">8.1 Virtualização.</div>
                            <div className="indent-level-1">9 Servidores de aplicação.</div>
                            <div className="indent-level-2">9.1 Conceitos básicos.</div>
                            <div className="indent-level-2">9.2 Noções de administração.</div>
                            <div className="indent-level-2">9.3 Topologia típica de ambientes com alta disponibilidade e escalabilidade.</div>
                            <div className="indent-level-2">9.4 Balanceamento de carga, fail-over e replicação de estado.</div>
                            <div className="indent-level-2">9.5 Técnicas para detecção de problemas e otimização de desempenho.</div>
                            <div className="indent-level-1">10 Tecnologias, arquitetura e gestão de data center e ambientes de missão crítica.</div>
                            <div className="indent-level-2">10.1 Conceitos básicos.</div>
                            <div className="indent-level-2">10.2 Serviços de armazenamento, padrões de disco e de interfaces.</div>
                            <div className="indent-level-2">10.3 RAID.</div>
                            <div className="indent-level-2">10.4 Tecnologias de armazenamento NAS e SAN.</div>
                            <div className="indent-level-2">10.5 Tecnologias de backup.</div>
                            <div className="indent-level-2">10.6 Deduplicação.</div>
                            <div className="indent-level-1">11 Conteinerização de aplicações e DevOps.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="SISTEMAS OPERACIONAIS">
                            <div className="indent-level-1">1 Sistemas operacionais.</div>
                            <div className="indent-level-2">1.1 Fundamentos.</div>
                            <div className="indent-level-2">1.2 Gestão de processos.</div>
                            <div className="indent-level-2">1.3 Gestão de memória.</div>
                            <div className="indent-level-2">1.4 Gestão de entrada e saída.</div>
                            <div className="indent-level-2">1.5 Instalação, configuração e administração de sistemas operacionais.</div>
                            <div className="indent-level-2">1.6 Windows Server 2025 e RedHat Enterprise Linux versão 9.</div>
                            <div className="indent-level-1">2 Serviços de diretório.</div>
                            <div className="indent-level-2">2.1 Active Directory e LDAP.</div>
                            <div className="indent-level-2">2.2 Interoperabilidade.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="GOVERNANÇA DE TI">
                            <div className="indent-level-1">1 Governança corporativa de TI: COBIT 2019 e ISO/IEC 38500.</div>
                            <div className="indent-level-1">2 Gestão de riscos de TI: ISO 31000 e COSO.</div>
                            <div className="indent-level-1">3 Gestão de serviços de TI: ITIL v4.</div>
                            <div className="indent-level-1">4 Gestão de projetos e metodologias ágeis: PMBOK 7ª edição, SCRUM e Kanban.</div>
                            <div className="indent-level-1">5 Planejamento estratégico de TI: PETI e PDTI.</div>
                            <div className="indent-level-1">6 Contratações de TI no setor público.</div>
                            <div className="indent-level-1">7 Gestão de processos: BPMN e melhoria contínua.</div>
                            <div className="indent-level-1">8 Indicadores de desempenho: KPIs e BSC.</div>
                            <div className="indent-level-1">9 Cibersegurança e continuidade de negócios: ISO 27001/22301, 27002, NIST.</div>
                        </SubjectAccordion>

                    </div>
                </div>
            </div>
        </div>
    );
}
