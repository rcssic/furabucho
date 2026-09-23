import React, { useState } from 'react';
import './style.css';

type Subject = {
    title: string;
    items: string[];
};

const basicSubjects: Subject[] = [
    {
        title: 'MATEMÁTICA FINANCEIRA',
        items: ['Juros simples e compostos.', 'Capitalização e desconto.', 'Taxas de juros nominais, efetivas e equivalentes.', 'Séries de pagamentos, financiamentos, empréstimos e investimentos.', 'Análise de investimentos: valor presente líquido, taxa interna de retorno e payback.'],
    },
    {
        title: 'DIREITO CONSTITUCIONAL',
        items: ['Princípios fundamentais, direitos e garantias fundamentais.', 'Organização do Estado e administração pública.', 'Poder Executivo, Poder Legislativo e processo legislativo.', 'Fiscalização contábil, financeira e orçamentária.', 'Poder Judiciário, funções essenciais à justiça e controle de constitucionalidade.', 'Constituição do Estado de Alagoas.'],
    },
    {
        title: 'DIREITO ADMINISTRATIVO',
        items: ['Princípios da administração pública e organização administrativa.', 'Atos, poderes e serviços públicos.', 'Agentes públicos e responsabilidade civil do Estado.', 'Licitações e contratos administrativos: Lei nº 14.133/2021.', 'Controle da administração pública e processo administrativo.', 'Improbidade administrativa e transparência pública.'],
    },
    {
        title: 'CONTABILIDADE GERAL',
        items: ['Patrimônio, variações patrimoniais e estrutura conceitual.', 'Escrituração, contas, lançamentos e regimes de competência e caixa.', 'Operações contábeis, receitas, despesas, provisões e tributos.', 'Demonstrações contábeis e notas explicativas.', 'Análise econômico-financeira e legislação societária aplicável.'],
    },
    {
        title: 'DIREITO TRIBUTÁRIO',
        items: ['Sistema tributário nacional, princípios e limitações ao poder de tributar.', 'Tributos: conceito, espécies, impostos, taxas e contribuições.', 'Obrigação tributária, crédito tributário, lançamento, suspensão e extinção.', 'Administração tributária, fiscalização e dívida ativa.', 'Imunidade, isenção, responsabilidade tributária e processo tributário.'],
    },
    {
        title: 'ESTATÍSTICA E PROBABILIDADE',
        items: ['Estatística descritiva, população, amostra e variáveis.', 'Medidas de posição e dispersão.', 'Probabilidade, eventos, variáveis aleatórias e distribuições.', 'Amostragem, estimação e testes de hipóteses.', 'Regressão, correlação e análise de dados.'],
    },
    {
        title: 'CONTABILIDADE PÚBLICA',
        items: ['Conceito, objeto, campo de aplicação e princípios.', 'Planejamento e orçamento público.', 'Receita e despesa públicas, estágios e restos a pagar.', 'Patrimônio público, variações patrimoniais e demonstrações contábeis.', 'Lei nº 4.320/1964, MCASP e sistemas de informação contábil.'],
    },
    {
        title: 'ECONOMIA',
        items: ['Microeconomia: oferta, demanda, elasticidade, produção e custos.', 'Estruturas de mercado, eficiência econômica e falhas de mercado.', 'Macroeconomia: produto, renda, consumo, poupança e investimento.', 'Inflação, desemprego, política fiscal, moeda e setor público.', 'Economia brasileira e economia de Alagoas.'],
    },
];

const specificSubjects: Subject[] = [
    {
        title: 'FINANÇAS PÚBLICAS',
        items: ['Funções do Estado, políticas alocativas, distributivas e de estabilização.', 'Tributação, equidade, déficit, dívida e crédito público.', 'Orçamento público, PPA, LDO, LOA e ciclo orçamentário.', 'Receita, despesa, programação e execução orçamentária e financeira.', 'Lei de Responsabilidade Fiscal e Lei nº 4.320/1964.'],
    },
    {
        title: 'LEGISLAÇÃO TRIBUTÁRIA ESTADUAL',
        items: ['Sistema tributário do Estado de Alagoas.', 'ICMS: fato gerador, contribuintes, base de cálculo, alíquotas e créditos.', 'Obrigações acessórias, documentos fiscais e regimes especiais.', 'IPVA, ITCD, taxas estaduais e legislação correlata.', 'Processo administrativo tributário, fiscalização e penalidades.'],
    },
    {
        title: 'INTELIGÊNCIA ARTIFICIAL',
        items: ['Conceitos, fundamentos e aplicações de inteligência artificial.', 'Aprendizado supervisionado, não supervisionado e por reforço.', 'Modelos, treinamento, validação, métricas e vieses.', 'IA generativa, processamento de linguagem natural e visão computacional.', 'Ética, governança, segurança e proteção de dados em IA.'],
    },
    {
        title: 'DESENVOLVIMENTO DE SISTEMAS',
        items: ['Engenharia de software, requisitos, processos e metodologias ágeis.', 'Programação, orientação a objetos, APIs e aplicações web.', 'Bancos de dados relacionais e não relacionais.', 'Testes, integração contínua, controle de versão e DevOps.', 'Arquitetura de software, microsserviços e computação em nuvem.'],
    },
    {
        title: 'INFRAESTRUTURA DE TIC E SEGURANÇA DA INFORMAÇÃO',
        items: ['Redes, protocolos, sistemas operacionais e virtualização.', 'Servidores, armazenamento, alta disponibilidade e nuvem.', 'Segurança de redes, criptografia, autenticação e controle de acesso.', 'Gestão de riscos, continuidade, backup e resposta a incidentes.', 'Políticas de segurança, LGPD e normas de segurança da informação.'],
    },
    {
        title: 'REFORMA TRIBUTÁRIA',
        items: ['Emenda Constitucional nº 132/2023 e princípios da reforma.', 'Imposto sobre Bens e Serviços (IBS) e Contribuição sobre Bens e Serviços (CBS).', 'Imposto Seletivo, Comitê Gestor e transição para o novo sistema.', 'Regimes diferenciados, cashback e tratamentos específicos.', 'Repartição de receitas e impactos para estados e municípios.'],
    },
    {
        title: 'AUDITORIA FISCAL',
        items: ['Auditoria, fiscalização tributária e planejamento dos trabalhos.', 'Risco de auditoria, materialidade, evidências e procedimentos.', 'Controles internos, amostragem e documentação da auditoria.', 'Auditoria digital, cruzamento de dados e malhas fiscais.', 'Relatórios, autos de infração e responsabilização.'],
    },
    {
        title: 'CIÊNCIA DE DADOS',
        items: ['Fundamentos de dados, preparação, limpeza e qualidade.', 'Bancos de dados, SQL, ETL e integração de fontes.', 'Mineração de dados, classificação, agrupamento e associação.', 'Visualização, estatística aplicada e comunicação de resultados.', 'Big Data, Business Intelligence, governança e privacidade.'],
    },
];

function SubjectAccordion({ subject }: { subject: Subject }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`glass-accordion ${isOpen ? 'open' : ''}`}>
            <button className="glass-accordion-header" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
                <h3>{subject.title}</h3>
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>
            <div className="glass-accordion-content" style={{ maxHeight: isOpen ? '1200px' : '0', opacity: isOpen ? 1 : 0 }}>
                <div className="accordion-inner">
                    {subject.items.map((item, index) => <div className="indent-level-1" key={index}>{index + 1} {item}</div>)}
                </div>
            </div>
        </div>
    );
}

function DataList({ children }: { children: React.ReactNode }) {
    return <ul className="glass-data-list">{children}</ul>;
}

export default function SefazAlAuditorFiscalPage() {
    return (
        <div className="cargo-glass-wrapper">
            <div className="cargo-content-max">
                <header className="cargo-header">
                    <button className="glass-btn-pill" onClick={() => window.location.hash = '/'}>
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="15 18 9 12 15 6" /></svg>
                        Voltar
                    </button>
                    <h1>Concurso SEFAZ AL 2026</h1>
                    <p>Auditor Fiscal da Administração Tributária Estadual (AFTE)</p>
                    <a className="glass-link-btn" href="http://www.cebraspe.org.br/concursos/sefaz_al_26" target="_blank" rel="noreferrer">Acessar Site do Edital</a>
                </header>

                <div className="glass-grid">
                    <div className="glass-card">
                        <h2>Informações da Vaga</h2>
                        <DataList>
                            <li><span>Requisito</span><strong>Nível superior em qualquer área</strong></li>
                            <li><span>Remuneração</span><strong>R$ 25.270,68</strong></li>
                            <li><span>Jornada de Trabalho</span><strong>40 horas semanais</strong></li>
                            <li><span>Taxa de Inscrição</span><strong>R$ 300,00</strong></li>
                            <li><span>Banca Examinadora</span><strong>Cebraspe</strong></li>
                        </DataList>
                    </div>

                    <div className="glass-card">
                        <h2>Tabela de Vagas</h2>
                        <DataList>
                            <li><span>Ampla Concorrência (AC)</span><strong>30 imediatas | 45 CR</strong></li>
                            <li><span>Pessoa com Deficiência (PcD)</span><strong>2 imediatas | 3 CR</strong></li>
                            <li><span>PPIQ</span><strong>8 imediatas | 12 CR</strong></li>
                            <li className="total-row"><span><strong>Total Geral</strong></span><strong>40 imediatas | 60 CR</strong></li>
                        </DataList>
                    </div>

                    <div className="glass-card">
                        <h2>Datas Importantes</h2>
                        <DataList>
                            <li><span>Inscrições</span><strong>17/09 a 21/10/2026</strong></li>
                            <li><span>Pagamento da Taxa</span><strong>Até 23/10/2026</strong></li>
                            <li><span>Locais de Prova</span><strong>04/12/2026</strong></li>
                            <li><span>Provas Objetivas</span><strong>20/12/2026 (tarde)</strong></li>
                            <li><span>Prova Discursiva</span><strong>10/01/2027 (tarde)</strong></li>
                            <li><span>Resultado Objetivas</span><strong>05/02/2027</strong></li>
                        </DataList>
                    </div>

                    <div className="glass-card">
                        <h2>Estilo da Prova</h2>
                        <DataList>
                            <li><span>Objetivas</span><strong>2 provas, 160 itens</strong></li>
                            <li><span>Julgamento</span><strong>CERTO ou ERRADO</strong></li>
                            <li><span>Penalidade</span><strong>Errada anula certa</strong></li>
                            <li><span>Duração</span><strong>4h30 cada prova</strong></li>
                            <li><span>Discursiva</span><strong>4 questões, 40 pontos</strong></li>
                        </DataList>
                    </div>

                    <div className="glass-section-title">
                        <h2>Conteúdo Programático</h2>
                        <p>Clique nas disciplinas para consultar os principais tópicos do edital.</p>
                    </div>

                    <div className="glass-card full padding-zero">
                        <div className="area-badge">CONHECIMENTOS BÁSICOS (60 ITENS)</div>
                        {basicSubjects.map(subject => <SubjectAccordion key={subject.title} subject={subject} />)}
                        <div className="area-badge specific-badge">CONHECIMENTOS ESPECÍFICOS (100 ITENS)</div>
                        {specificSubjects.map(subject => <SubjectAccordion key={subject.title} subject={subject} />)}
                    </div>

                    <div className="glass-card full exam-note">
                        <h2>Prova Discursiva</h2>
                        <p>Serão quatro questões de conhecimentos específicos, valendo 10 pontos cada. Cada resposta deverá desenvolver o tema proposto em até 30 linhas, com avaliação de conteúdo e domínio da modalidade escrita da Língua Portuguesa.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
