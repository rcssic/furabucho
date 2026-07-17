import React from 'react';
import './style.css';

const SeplagAlCargo22026Page: React.FC = () => {
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
                    <h1>Edital SEPLAG AL 2026</h1>
                    <p>Cargo 2: Analista de Sistemas (Especialista em Gestão Pública)</p>
                </header>

                <div className="glass-grid">
                    
                    {/* INFO VAGA E DATAS EM DUAS COLUNAS */}
                    <div className="glass-card">
                        <h2>Informações Estratégicas</h2>
                        <ul className="glass-data-list">
                            <li><span>Remuneração</span> <strong>R$ 5.767,15</strong></li>
                            <li><span>Banca</span> <strong>Cebraspe (Certo/Errado)</strong></li>
                            <li><span>Carga Horária</span> <strong>40 horas semanais</strong></li>
                            <li><span>Data da Prova</span> <strong>31/05/2026 (Tarde)</strong></li>
                            <li><span>Gabarito</span> <strong>11/06/2026</strong></li>
                        </ul>
                    </div>

                    <div className="glass-card">
                        <h2>Estrutura da Prova (4h30m)</h2>
                        <ul className="glass-data-list">
                            <li><span>Conhecimentos Básicos</span> <strong>50 itens</strong></li>
                            <li><span>Conhecimentos Específicos</span> <strong>70 itens</strong></li>
                            <li><span>Prova Discursiva (P3)</span> <strong>Até 30 linhas</strong></li>
                            <li><span>Tema da Discursiva</span> <strong>Atualidades</strong></li>
                            <li><span>Penalidade</span> <strong>1 Errada anula 1 Certa</strong></li>
                        </ul>
                    </div>

                    {/* CONTEÚDO PROGRAMÁTICO SEPARADO POR DISCIPLINAS */}
                    <div className="glass-section-title">
                        <h2>Conhecimentos Básicos</h2>
                    </div>

                    <div className="glass-card full">
                        <h3>Língua Portuguesa</h3>
                        <p className="syllabus-text">
                            Compreensão e interpretação de textos. Tipologia textual. Ortografia oficial. Mecanismos de coesão textual (referenciação, substituição, repetição e conectores). Tempos e modos verbais. Estrutura morfossintática do período. Pontuação. Concordância e regência verbal e nominal. Crase. Colocação pronominal. Reescrita de frases.
                        </p>
                    </div>

                    <div className="glass-card full">
                        <h3>Tecnologia da Informação & Ética</h3>
                        <p className="syllabus-text">
                            <strong>TI:</strong> Windows. Office. Redes (Internet, intranet, nuvem, browsers, e-mail, redes sociais). Segurança da informação (malware, backup, antivírus, cloud storage).<br/><br/>
                            <strong>Ética:</strong> Moral e democracia. Ética e função pública. Compliance (suporte da alta administração, código de conduta, controles internos).
                        </p>
                    </div>

                    <div className="glass-section-title">
                        <h2>Conhecimentos Específicos (TI)</h2>
                    </div>

                    <div className="glass-card full">
                        <h3>1. Engenharia e Desenvolvimento</h3>
                        <p className="syllabus-text">
                            <strong>Processos e Ágil:</strong> CMMI-DEV v2.0, RUP, Scrum 2020, Kanban, XP, Lean. TDD e testes automatizados.<br/>
                            <strong>Arquitetura e Design:</strong> Orientação a Objetos, Design Patterns, MVC, Cliente/Servidor, SOA, Microsserviços, API REST, Contêineres (Docker, Kubernetes). Clean Code, PWA, SPA, Arquitetura Hexagonal.<br/>
                            <strong>Linguagens e Web:</strong> Java 6+, Python 3.10+, C# 8+. HTML, CSS, React, VueJS. UX, DevOps, CI/CD, Git.
                        </p>
                    </div>

                    <div className="glass-card full">
                        <h3>2. Banco de Dados & Big Data</h3>
                        <p className="syllabus-text">
                            <strong>Modelagem:</strong> Conceitual, lógica e física. Normalização. Modelagem dimensional.<br/>
                            <strong>Linguagem:</strong> SQL (ANSI), DDL, DML. Administração, performance, backup/restore.<br/>
                            <strong>SGBD:</strong> Oracle 21C, MySQL, PostgreSQL. Bancos NoSQL, em memória, Data Lakes e integração (ETL/ELT).
                        </p>
                    </div>

                    <div className="glass-card full">
                        <h3>3. Segurança da Informação</h3>
                        <p className="syllabus-text">
                            <strong>Fundamentos:</strong> ISO 27001 e 27002. Confidencialidade, integridade, disponibilidade.<br/>
                            <strong>Autenticação & Redes:</strong> 2FA, Biometria, Token, OAuth 2.0, OpenID Connect, JWT. Prevenção de ataques (DDoS, DNS spoofing, phishing).<br/>
                            <strong>App Security:</strong> Vulnerabilidades OWASP (SQLi, XSS). Criptografia (trânsito e repouso). LGPD (Lei 13.709/2018). NIST Framework, IDS, IPS, SIEM.
                        </p>
                    </div>

                    <div className="glass-card full">
                        <h3>4. Governança e Contratos de TI</h3>
                        <p className="syllabus-text">
                            <strong>Gestão:</strong> Contratação de soluções de TI (Lei 13.303/2016). Fiscalização de contratos.<br/>
                            <strong>Métricas:</strong> SLA (Acordo de Nível de Serviço). Remuneração por esforço vs. produto. Ponto de Função (PF) e Unidade de Serviço Técnico (UST). Papel do fiscal e do preposto.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default SeplagAlCargo22026Page;
