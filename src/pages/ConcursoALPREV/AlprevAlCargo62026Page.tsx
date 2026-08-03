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

export default function AlprevAlCargo62026Page() {
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
                    <h1>Concurso ALPREV 2026</h1>
                    <p>Analista Previdenciário – Área: Tecnologia da Informação (Cargo 6)</p>
                    <a 
                        className="glass-link-btn" 
                        href="http://www.cebraspe.org.br/concursos/alprev_26" 
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
                            <li><span>Remuneração</span> <strong>R$ 8.501,49</strong></li>
                            <li><span>Jornada de Trabalho</span> <strong>40 horas semanais</strong></li>
                            <li><span>Taxa de Inscrição</span> <strong>R$ 200,00</strong></li>
                            <li><span>Banca Examinadora</span> <strong>Cebraspe</strong></li>
                        </ul>
                    </div>

                    {/* Tabela de Vagas */}
                    <div className="glass-card">
                        <h2>Tabela de Vagas</h2>
                        <ul className="glass-data-list">
                            <li><span>Ampla Concorrência (AC)</span> <strong>2 Imediatas | 1 CR</strong></li>
                            <li><span>Pessoa com Deficiência (PcD)</span> <strong>0 Imediatas | 1 CR</strong></li>
                            <li><span>Cotas (PPIQ)</span> <strong>0 Imediatas | 1 CR</strong></li>
                            <li style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px', marginTop: '4px' }}>
                                <span><strong>Total Geral</strong></span> <strong>2 Imediatas | 3 CR</strong>
                            </li>
                        </ul>
                    </div>

                    {/* Datas Importantes */}
                    <div className="glass-card">
                        <h2>Datas Importantes</h2>
                        <ul className="glass-data-list">
                            <li><span>Inscrições</span> <strong>22/06 a 31/07/2026</strong></li>
                            <li><span>Pagamento da Taxa</span> <strong>Até 04/08/2026</strong></li>
                            <li><span>Locais de Prova</span> <strong>15/09/2026</strong></li>
                            <li><span>Data das Provas</span> <strong>27/09/2026 (Tarde)</strong></li>
                            <li><span>Gabarito Preliminar</span> <strong>29/09 a 06/10/2026</strong></li>
                            <li><span>Resultado (Objetiva)</span> <strong>04/11/2026</strong></li>
                        </ul>
                    </div>

                    {/* Estilo da Prova */}
                    <div className="glass-card">
                        <h2>Estilo da Prova</h2>
                        <ul className="glass-data-list">
                            <li><span>Método de Julgamento</span> <strong>CERTO ou ERRADO</strong></li>
                            <li><span>Penalidade</span> <strong>Marcação errada anula certa</strong></li>
                            <li><span>Duração</span> <strong>4 horas e 30 minutos</strong></li>
                            <li><span>Prova Objetiva</span> <strong>50 Básicos + 70 Específicos</strong></li>
                            <li><span>Prova Discursiva</span> <strong>Até 30 linhas (Conhecimentos Específicos)</strong></li>
                        </ul>
                    </div>

                    {/* Limite de Discursivas Corrigidas */}
                    <div className="glass-card full">
                        <h2>Limite de Discursivas Corrigidas (Classificação)</h2>
                        <ul className="glass-data-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                            <li><span>Ampla Concorrência (AC)</span> <strong>18 classificados</strong></li>
                            <li><span>Pessoas com Deficiência (PcD)</span> <strong>10 classificados</strong></li>
                            <li><span>Cotas (PPIQ)</span> <strong>10 classificados</strong></li>
                        </ul>
                    </div>

                    <div className="glass-section-title">
                        <h2>Conteúdo Programático Completo</h2>
                        <p>Clique nas disciplinas abaixo para expandir a ementa detalhada.</p>
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

                        <SubjectAccordion title="NOÇÕES DE DIREITO CONSTITUCIONAL">
                            <div className="indent-level-1">1 Constituição da República Federativa do Brasil de 1988.</div>
                            <div className="indent-level-2">1.1 Princípios fundamentais.</div>
                            <div className="indent-level-1">2 Aplicabilidade das normas constitucionais.</div>
                            <div className="indent-level-2">2.1 Normas de eficácia plena, contida e limitada.</div>
                            <div className="indent-level-2">2.2 Normas programáticas.</div>
                            <div className="indent-level-1">3 Direitos e garantias fundamentais.</div>
                            <div className="indent-level-2">3.1 Direitos e deveres individuais e coletivos, direitos sociais, direitos de nacionalidade, direitos políticos, partidos políticos.</div>
                            <div className="indent-level-1">4 Organização político-administrativa do State.</div>
                            <div className="indent-level-2">4.1 Estado federal brasileiro, União, estados, Distrito Federal, municípios e territórios.</div>
                            <div className="indent-level-1">5 Administração Pública.</div>
                            <div className="indent-level-2">5.1 Disposições gerais.</div>
                            <div className="indent-level-2">5.2 Servidores públicos.</div>
                            <div className="indent-level-1">6 Poder executivo.</div>
                            <div className="indent-level-2">6.1 Atribuições e responsabilidades do Presidente da República.</div>
                            <div className="indent-level-1">7 Poder legislativo.</div>
                            <div className="indent-level-2">7.1 Estrutura.</div>
                            <div className="indent-level-2">7.2 Funcionamento e atribuições.</div>
                            <div className="indent-level-2">7.3 Processo legislativo.</div>
                            <div className="indent-level-2">7.4 Comissões parlamentares de inquérito.</div>
                            <div className="indent-level-2">7.5 Fiscalização contábil, financeira e orçamentária.</div>
                            <div className="indent-level-3">7.5.1 Controle Externo e Sistemas de Controle Interno.</div>
                            <div className="indent-level-3">7.5.2 Tribunal de Contas da União.</div>
                            <div className="indent-level-1">8 Poder judiciário.</div>
                            <div className="indent-level-2">8.1 Disposições gerais.</div>
                            <div className="indent-level-2">8.2 Órgãos do poder judiciário.</div>
                            <div className="indent-level-1">9 Funções essenciais à justiça.</div>
                            <div className="indent-level-2">9.1 Ministério Público.</div>
                            <div className="indent-level-2">9.2 Advocacia Pública.</div>
                            <div className="indent-level-2">9.3 Defensoria Pública.</div>
                            <div className="indent-level-1">10 Jurisprudência aplicada dos tribunais superiores.</div>
                            <div className="indent-level-1">11 Constituição do Estado de Alagoas.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="NOÇÕES DE INFORMÁTICA">
                            <div className="indent-level-1">1 Sistema operacional Windows.</div>
                            <div className="indent-level-1">2 Edição de textos, planilhas e apresentações (Microsoft Office 365).</div>
                            <div className="indent-level-1">3 Redes de computadores.</div>
                            <div className="indent-level-2">3.1 Conceitos básicos, ferramentas, aplicativos e procedimentos de Internet e intranet.</div>
                            <div className="indent-level-2">3.2 Programas de navegação (Microsoft Edge, e Google Chrome).</div>
                            <div className="indent-level-2">3.3 Programas de correio eletrônico.</div>
                            <div className="indent-level-2">3.4 Sítios de busca e pesquisa na Internet.</div>
                            <div className="indent-level-2">3.5 Grupos de discussão.</div>
                            <div className="indent-level-2">3.6 Redes sociais.</div>
                            <div className="indent-level-1">4 Conceitos de organização e de gerenciamento de informações, arquivos, pastas e programas.</div>
                            <div className="indent-level-1">5 Segurança da informação.</div>
                            <div className="indent-level-2">5.1 Procedimentos de segurança.</div>
                            <div className="indent-level-1">6 Lei nº 13.709/2018 e atualizações.</div>
                            <div className="indent-level-1">7 Inteligência artificial.</div>
                            <div className="indent-level-2">7.1 Análise de dados (Pandas, NumPy, Jupiter, R).</div>
                            <div className="indent-level-2">7.2 Aprendizado de máquina.</div>
                            <div className="indent-level-3">7.2.1 Técnicas de classificação.</div>
                            <div className="indent-level-3">7.2.2 Técnicas de regressão.</div>
                            <div className="indent-level-3">7.2.3 Técnicas de agrupamento.</div>
                            <div className="indent-level-3">7.2.4 Técnicas de redução de dimensionalidade.</div>
                            <div className="indent-level-3">7.2.5 Técnicas de associação.</div>
                            <div className="indent-level-3">7.2.6 Sistemas de recomendação.</div>
                            <div className="indent-level-2">7.3 Processamento de linguagem natural (PLN).</div>
                            <div className="indent-level-2">7.4 Visão computacional.</div>
                            <div className="indent-level-2">7.5 Deep learning.</div>
                            <div className="indent-level-1">8 Business Intelligence e Datawarehouse.</div>
                            <div className="indent-level-1">9 Modelagem de Dados Relacional e Multidimensional.</div>
                            <div className="indent-level-1">10 Ferramentas de Visualização de Dados.</div>
                            <div className="indent-level-1">11 Análise de Dados e construção de KPI.</div>
                            <div className="indent-level-1">12 Gerenciamento de projetos com metodologias ágeis.</div>
                            <div className="indent-level-1">13 Métodos e técnicas de resolução de problemas.</div>
                            <div className="indent-level-1">14 Método 5W2H, Design Thinking, Pensamento crítico, Método científico, Método PDCA, Método Lean.</div>
                            <div className="indent-level-1">15 Big Data e Analytics.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="ÉTICA E COMPLIANCE NA ADMINISTRAÇÃO PÚBLICA">
                            <div className="indent-level-1">1 Ética e moral.</div>
                            <div className="indent-level-1">2 Ética, princípios e valores.</div>
                            <div className="indent-level-1">3 Ética e democracia: exercício da cidadania.</div>
                            <div className="indent-level-1">4 Ética e função pública.</div>
                            <div className="indent-level-1">5 Ética no setor público.</div>
                            <div className="indent-level-1">6 Compliance: conceitos, suporte da alta administração, código de conduta, controles internos, treinamento e comunicação.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="NOÇÕES DE DIREITO ADMINISTRATIVO">
                            <div className="indent-level-1">1 Estado, governo e administração pública.</div>
                            <div className="indent-level-2">1.1 Conceitos.</div>
                            <div className="indent-level-2">1.2 Elementos.</div>
                            <div className="indent-level-1">2 Direito administrativo.</div>
                            <div className="indent-level-2">2.1 Conceito.</div>
                            <div className="indent-level-2">2.2 Objeto.</div>
                            <div className="indent-level-2">2.3 Fontes.</div>
                            <div className="indent-level-1">3 Ato administrativo.</div>
                            <div className="indent-level-2">3.1 Conceito, requisitos, atributos, classificação e espécies.</div>
                            <div className="indent-level-2">3.2 Extinção do ato administrativo.</div>
                            <div className="indent-level-3">3.2.1 Cassação, anulação, revogação e convalidação.</div>
                            <div className="indent-level-2">3.3 Decadência administrativa.</div>
                            <div className="indent-level-1">4 Poderes da administração pública.</div>
                            <div className="indent-level-2">4.1 Hierárquico, disciplinar, regulamentar e de polícia.</div>
                            <div className="indent-level-2">4.2 Uso e abuso do poder.</div>
                            <div className="indent-level-1">5 Regime jurídico administrativo.</div>
                            <div className="indent-level-2">5.1 Conceito.</div>
                            <div className="indent-level-2">5.2 Princípios expressos e implícitos da administração pública.</div>
                            <div className="indent-level-1">6 Responsabilidade civil do Estado.</div>
                            <div className="indent-level-2">6.1 Evolução histórica.</div>
                            <div className="indent-level-2">6.2 Responsabilidade civil do Estado no direito brasileiro.</div>
                            <div className="indent-level-3">6.2.1 Responsabilidade por ato comissivo do Estado.</div>
                            <div className="indent-level-3">6.2.2 Responsabilidade por omissão do Estado.</div>
                            <div className="indent-level-2">6.3 Requisitos para a demonstração da responsabilidade do Estado.</div>
                            <div className="indent-level-2">6.4 Causas excludentes e atenuantes da responsabilidade do Estado.</div>
                            <div className="indent-level-2">6.5 Reparação do dano.</div>
                            <div className="indent-level-2">6.6 Direito de regresso.</div>
                            <div className="indent-level-1">7 Controle da administração pública.</div>
                            <div className="indent-level-2">7.1 Controle exercido pela administração pública.</div>
                            <div className="indent-level-2">7.2 Controle judicial.</div>
                            <div className="indent-level-2">7.3 Controle legislativo.</div>
                            <div className="indent-level-2">7.4 Improbidade administrativa.</div>
                            <div className="indent-level-1">8 Licitações e contratos administrativos.</div>
                            <div className="indent-level-2">8.1 Legislação pertinente.</div>
                            <div className="indent-level-3">8.1.1 Lei nº 14.133/2021.</div>
                            <div className="indent-level-3">8.1.2 Decreto nº 11.531/2023 e Portaria Conjunta MGI/MF/CGU nº 33, de agosto de 2023.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="LEGISLAÇÃO ESPECÍFICA (Não existe questão para esse conteúdo no TecConcurso)">
                            <div className="indent-level-1">1 Lei Complementar nº 70/2025 (Estabelece critérios técnicos e objetivos para a revisão da segregação de massa do RPPS AL).</div>
                            <div className="indent-level-1">2 Lei Complementar nº 65/2024 (Altera a Lei Complementar Estadual nº 52/2019, que reorganiza o RPPS AL).</div>
                            <div className="indent-level-1">3 Lei nº 8.759/2022 (dispõe sobre a instituição do fundo garantidor da Alagoas Previdência – FGAP/AL, e dá outras providências).</div>
                            <div className="indent-level-1">4 Lei Complementar nº 52/2019.</div>
                            <div className="indent-level-1">5 Lei nº 6.288/2002.</div>
                            <div className="indent-level-1">6 Lei nº 7.114/2009 (Reestrutura o regime próprio de previdência dos servidores públicos estaduais).</div>
                            <div className="indent-level-1">7 Lei nº 7.751/2015 (Reestrutura a unidade gestora única do RPPS AL, altera a sua personalidade jurídica, e dá outras providências).</div>
                        </SubjectAccordion>

                        {/* =========================================
                            CONHECIMENTOS ESPECÍFICOS
                        ========================================= */}
                        <div className="area-badge" style={{ marginTop: '20px' }}>CONHECIMENTOS ESPECÍFICOS - CARGO 6 (70 Questões)</div>

                        <SubjectAccordion title="TECNOLOGIA DA INFORMAÇÃO - I GESTÃO DE TI">
                            <div className="indent-level-1">1 Ciclo PDCA.</div>
                            <div className="indent-level-1">2 Gerência de projetos: conceitos básicos.</div>
                            <div className="indent-level-1">3 PMBOK 7ª edição.</div>
                            <div className="indent-level-1">4 COBIT 2019.</div>
                            <div className="indent-level-1">5 ITIL v4.</div>
                            <div className="indent-level-1">6 Gerenciamento de processos de negócio:</div>
                            <div className="indent-level-2">6.1 Técnicas de mapeamento de processos.</div>
                            <div className="indent-level-2">6.2 Modelos AS-IS, TO-BE e TO-RUN.</div>
                            <div className="indent-level-2">6.3 Técnicas de análise e simulação de processos.</div>
                            <div className="indent-level-2">6.4 Construção e mensuração de indicadores de processos.</div>
                            <div className="indent-level-1">7 Modelagem de processos em BPMN:</div>
                            <div className="indent-level-2">7.1 Notação, artefatos e atividades.</div>
                            <div className="indent-level-2">7.2 Workflow.</div>
                            <div className="indent-level-2">7.3 BPMS.</div>
                            <div className="indent-level-1">8 Decision model and notation (DMN).</div>
                            <div className="indent-level-1">9 Noções de Planejamento estratégico e tático de TIC.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="TECNOLOGIA DA INFORMAÇÃO - II SISTEMAS DE INFORMAÇÃO">
                            <div className="indent-level-1">1 Engenharia de software.</div>
                            <div className="indent-level-1">2 Ciclo de vida do software.</div>
                            <div className="indent-level-1">3 Análise e projeto de sistemas:</div>
                            <div className="indent-level-2">3.1 Padrões, práticas e princípios de orientação a objetos.</div>
                            <div className="indent-level-2">3.2 Design patterns.</div>
                            <div className="indent-level-2">3.3 Princípios SOLID.</div>
                            <div className="indent-level-2">3.4 Princípios GRASP.</div>
                            <div className="indent-level-2">3.5 Unified process.</div>
                            <div className="indent-level-2">3.6 UML 2.</div>
                            <div className="indent-level-2">3.7 Domain Driven Design.</div>
                            <div className="indent-level-2">3.8 Arquitetura hexagonal (portas e adaptadores).</div>
                            <div className="indent-level-1">4 Metodologias de desenvolvimento de software.</div>
                            <div className="indent-level-1">5 Métricas e estimativas de software.</div>
                            <div className="indent-level-1">6 Qualidade de software.</div>
                            <div className="indent-level-1">7 CMMI-DEV v2.0, (MR-MPS-SW) GUIA GERAL MPS DE SOFTWARE (2021).</div>
                            <div className="indent-level-1">8 Engenharia de requisitos: conceitos básicos, técnicas de elicitação e especificação.</div>
                            <div className="indent-level-1">9 Metodologias e práticas ágeis.</div>
                            <div className="indent-level-2">9.1 Scrum.</div>
                            <div className="indent-level-2">9.2 XP.</div>
                            <div className="indent-level-2">9.3 Kanban.</div>
                            <div className="indent-level-2">9.4 Especificação por exemplo.</div>
                            <div className="indent-level-2">9.5 Domain-driven design (DDD).</div>
                            <div className="indent-level-1">10 Testes de software (unidade, integração, sistema, aceitação, regressão, desempenho, vulnerabilidade, usabilidade e carga).</div>
                            <div className="indent-level-1">11 Criptografia:</div>
                            <div className="indent-level-2">11.1 Conceitos básicos e aplicações.</div>
                            <div className="indent-level-2">11.2 Protocolos criptográficos.</div>
                            <div className="indent-level-2">11.3 Criptografia simétrica e assimétrica.</div>
                            <div className="indent-level-2">11.4 Principais algoritmos.</div>
                            <div className="indent-level-1">12 Assinatura digital.</div>
                            <div className="indent-level-1">13 Certificado digital.</div>
                            <div className="indent-level-1">14 Desenvolvimento seguro de software: OWASP.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="TECNOLOGIA DA INFORMAÇÃO - III FUNDAMENTOS DE BANCO DE DADOS">
                            <div className="indent-level-1">1 Linguagens de definição e manipulação de dados em SGBDs relacionais.</div>
                            <div className="indent-level-1">2 Modelagem de dados: modelos relacional e multidimensional.</div>
                            <div className="indent-level-1">3 Administração de banco de dados relacionais.</div>
                            <div className="indent-level-2">3.1 Projeto e implantação de SGBDs relacionais (Microsoft SQL Server, Oracle, MySQL e PostgreSQL).</div>
                            <div className="indent-level-2">3.2 Administração de usuários e perfis de acesso.</div>
                            <div className="indent-level-2">3.3 Controle de proteção, integridade e concorrência.</div>
                            <div className="indent-level-2">3.4 Backup e restauração de dados.</div>
                            <div className="indent-level-2">3.5 Tolerância a falhas e continuidade de operação.</div>
                            <div className="indent-level-2">3.6 Monitoramento e otimização de desempenho, cluster de banco de dados.</div>
                            <div className="indent-level-1">4 Pipeline de dados: fundamentos, orquestração, integração, ETL, ELT e ferramentas.</div>
                            <div className="indent-level-1">5 OLAP.</div>
                            <div className="indent-level-1">6 Técnicas de modelagem e otimização de bases de dados multidimensionais.</div>
                            <div className="indent-level-1">7 Técnicas para pré-processamento de dados.</div>
                            <div className="indent-level-1">8 Processamento distribuído.</div>
                            <div className="indent-level-1">9 Data lake.</div>
                            <div className="indent-level-1">10 Conceitos, arquiteturas, técnicas e tarefas de data mining e data warehouse.</div>
                            <div className="indent-level-1">11 Big data: conceito, premissas, análise de dados e aplicações.</div>
                            <div className="indent-level-1">12 Ecossistema Hadoop: conceitos, arquitetura, componentes e implantação.</div>
                            <div className="indent-level-1">13 Spark: conceitos, arquitetura e aplicações.</div>
                            <div className="indent-level-1">14 Bancos de dados não relacionais: fundamentos, administração, desempenho e configuração (Key/Value, orientados a documentos e grafos).</div>
                            <div className="indent-level-1">15 Massive Parallel Processing (MPP).</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="TECNOLOGIA DA INFORMAÇÃO - IV CIÊNCIA DE DADOS">
                            <div className="indent-level-1">1 Fundamentos.</div>
                            <div className="indent-level-1">2 Classificação.</div>
                            <div className="indent-level-1">3 Coleta, tratamento, armazenamento, integração e recuperação de dados.</div>
                            <div className="indent-level-1">4 Regras de associação.</div>
                            <div className="indent-level-1">5 Modelagem relacional e multidimensional.</div>
                            <div className="indent-level-1">6 Aprendizagem de máquina: fundamentos, principais algoritmos e métricas de desempenho.</div>
                            <div className="indent-level-1">7 Regressão linear.</div>
                            <div className="indent-level-1">8 Regressão logística.</div>
                            <div className="indent-level-1">9 Análise de agrupamentos (clusterização).</div>
                            <div className="indent-level-1">10 Classificação.</div>
                            <div className="indent-level-1">11 Detecção de anomalias.</div>
                            <div className="indent-level-1">12 Modelagem preditiva.</div>
                            <div className="indent-level-1">13 Visão computacional.</div>
                            <div className="indent-level-1">14 Mineração de texto.</div>
                            <div className="indent-level-1">15 Redes neurais artificiais.</div>
                            <div className="indent-level-1">16 Deep learning.</div>
                            <div className="indent-level-1">17 Visualização e análise exploratória de dados.</div>
                            <div className="indent-level-1">18 Business Intelligence.</div>
                            <div className="indent-level-1">19 Inteligência Artificial (RAG e LLM).</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="TECNOLOGIA DA INFORMAÇÃO - V SEGURANÇA DA INFORMAÇÃO">
                            <div className="indent-level-1">1 Fundamentos.</div>
                            <div className="indent-level-1">2 Confidencialidade, integridade, disponibilidade, autenticidade e não repúdio.</div>
                            <div className="indent-level-1">3 Classificação e controle dos ativos de informação.</div>
                            <div className="indent-level-1">4 Políticas de segurança.</div>
                            <div className="indent-level-1">5 Políticas de classificação da informação.</div>
                            <div className="indent-level-1">6 Normas ABNT NBR ISO/IEC 27001:2023, ABNT NBR ISO/IEC 27002:2022, ABNT NBR ISO/IEC 27005:2023, ABNT NBR ISO 22301:2020.</div>
                            <div className="indent-level-1">7 Lei nº 13.709/2018 (LGPD).</div>
                            <div className="indent-level-1">8 Gerenciamento de acesso e identidade: conceitos, IAM, RBAC.</div>
                            <div className="indent-level-1">9 Segurança de redes de computadores: firewall, sistemas de detecção de intrusão (IDS), antivírus, NAT, VPN.</div>
                            <div className="indent-level-1">10 Prevenção e tratamento de incidentes.</div>
                            <div className="indent-level-1">11 Gestão de riscos: ameaça, vulnerabilidade, impacto e formas de tratamento de riscos.</div>
                            <div className="indent-level-1">12 Gestão de continuidade de negócio.</div>
                            <div className="indent-level-1">13 Conceitos e tipos de ataques cibernéticos.</div>
                            <div className="indent-level-1">14 Conceitos e tipos de malwares.</div>
                            <div className="indent-level-1">15 Conceitos de monitoramento e análise de tráfego.</div>
                            <div className="indent-level-1">16 Criptografia:</div>
                            <div className="indent-level-2">16.1 Conceitos básicos e aplicações.</div>
                            <div className="indent-level-2">16.2 Protocolos criptográficos.</div>
                            <div className="indent-level-2">16.3 Criptografia simétrica e assimétrica.</div>
                            <div className="indent-level-2">16.4 Principais algoritmos.</div>
                            <div className="indent-level-1">17 HTTPS/SSL.</div>
                            <div className="indent-level-1">18 Certificado digital: tipos de certificados digitais; padrões X.509 e ICP-Brasil.</div>
                            <div className="indent-level-1">19 DevSecOps: conceitos.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="TECNOLOGIA DA INFORMAÇÃO - VI FISCALIZAÇÃO DE CONTRATOS DE TI">
                            <div className="indent-level-1">1 Gestão de contratação de soluções de TI.</div>
                            <div className="indent-level-1">2 Legislação aplicável à contratação de bens e serviços de TI e suas alterações.</div>
                            <div className="indent-level-2">2.1 Lei nº 14.133/2021 (Nova Lei de Licitações e Contratos).</div>
                            <div className="indent-level-2">2.2 Instrução Normativa SGD/SEDGG/ME nº 94/2022.</div>
                            <div className="indent-level-2">2.3 Instrução Normativa SEGES/ME 65/2021.</div>
                            <div className="indent-level-1">3 Elaboração e fiscalização de contratos de Tecnologia da Informação:</div>
                            <div className="indent-level-2">3.1 Critérios de remuneração por esforço versus produto.</div>
                            <div className="indent-level-2">3.2 Cláusulas e indicadores de nível de serviço.</div>
                            <div className="indent-level-2">3.3 Papel do fiscalizador do contrato.</div>
                            <div className="indent-level-2">3.4 Papel do preposto da contratada.</div>
                            <div className="indent-level-2">3.5 Acompanhamento da execução contratual.</div>
                            <div className="indent-level-2">3.6 Registro e notificação de irregularidades.</div>
                            <div className="indent-level-2">3.7 Definição e aplicação de penalidades e sanções administrativas.</div>
                            <div className="indent-level-2">3.8 Contratações de serviços de TI baseadas em Unidade de Serviço Técnico – UST, em Pontos de Função – PF, e em postos de trabalho com níveis de serviço.</div>
                        </SubjectAccordion>

                        <SubjectAccordion title="TECNOLOGIA DA INFORMAÇÃO - VII SERVIÇOS DE COMPUTAÇÃO EM NUVEM">
                            <div className="indent-level-1">1 Conceitos de Computação em Nuvem: Elasticidade, Autoatendimento, pay-per-use.</div>
                            <div className="indent-level-1">2 Diferença entre nuvem privada, híbrida e nuvem pública (AWS, Azure), vantagens e desvantagens de cada uma.</div>
                            <div className="indent-level-1">3 Conceituação de IaaS, PaaS e SaaS.</div>
                            <div className="indent-level-1">4 Infraestrutura como código (ANSIBLE).</div>
                            <div className="indent-level-1">5 Arquitetura Serverless.</div>
                        </SubjectAccordion>

                    </div>
                </div>
            </div>
        </div>
    );
}
