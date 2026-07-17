import "./style.css";

export default function Cargo2Page() {
    return (
        <div className="glass-container">
            <header className="glass-header">
                <h1>Concurso SEPLAG AL 2026</h1>
                <p>Especialista em Gestão Pública – Especialidade: Análise de Sistemas (Cargo 2)</p>

                <a
                    className="glass-link"
                    href="https://www.cebraspe.org.br/concursos/seplag_al_26_especialista"
                    target="_blank"
                    rel="noreferrer"
                >
                    Acessar Site do Edital
                </a>
            </header>

            <div className="glass-grid">
                <div className="glass-card">
                    <h2>Informações da Vaga</h2>

                    <ul className="glass-list">
                        <li>
                            <strong>Remuneração:</strong> R$ 5.767,15.
                        </li>

                        <li>
                            <strong>Jornada de Trabalho:</strong> 40 horas semanais.
                        </li>

                        <li>
                            <strong>Requisitos Básicos:</strong> Diploma de graduação em
                            Análise e Desenvolvimento de Sistemas, Ciência da Computação,
                            Sistemas de Informação ou Tecnologia da Informação.
                        </li>

                        <li>
                            <strong>Taxa de Inscrição:</strong> R$ 120,00.
                        </li>

                        <li>
                            <strong>Banca Examinadora:</strong> Cebraspe.
                        </li>
                    </ul>
                </div>

                <div className="glass-card">
                    <h2>Tabela de Vagas</h2>

                    <table className="glass-table">
                        <thead>
                            <tr>
                                <th>Concorrência</th>
                                <th>Imediatas</th>
                                <th>Cadastro Reserva</th>
                                <th>Total</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Ampla Concorrência (AC)</td>
                                <td>2</td>
                                <td>1</td>
                                <td>3</td>
                            </tr>

                            <tr>
                                <td>Pessoa com Deficiência (PCD)</td>
                                <td>0</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>

                            <tr>
                                <td>Cotas (PPIQ)</td>
                                <td>0</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>Total</strong>
                                </td>
                                <td>
                                    <strong>2</strong>
                                </td>
                                <td>
                                    <strong>3</strong>
                                </td>
                                <td>
                                    <strong>5</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="glass-card">
                    <h2>Datas Importantes</h2>

                    <ul className="glass-list">
                        <li>
                            <strong>Inscrições:</strong> 09/03/2026 a 08/04/2026.
                        </li>

                        <li>
                            <strong>Pagamento da Taxa:</strong> Até 10/04/2026.
                        </li>

                        <li>
                            <strong>Locais de Prova:</strong> 15/05/2026.
                        </li>

                        <li>
                            <strong>Data das Provas:</strong> 31/05/2026 (Turno da Tarde).
                        </li>

                        <li>
                            <strong>Gabarito Preliminar:</strong> 11/06/2026.
                        </li>

                        <li>
                            <strong>Resultado Provisório e Final (Objetiva):</strong>
                            {" "}08/07/2026.
                        </li>
                    </ul>
                </div>

                <div className="glass-card">
                    <h2>Estilo da Prova</h2>

                    <ul className="glass-list">
                        <li>
                            <strong>Método de Julgamento:</strong> CERTO ou ERRADO (Método Cespe).
                        </li>

                        <li>
                            <strong>Penalidade:</strong> Marcação em discordância com o gabarito
                            anula pontos da prova.
                        </li>

                        <li>
                            <strong>Duração:</strong> 4 horas e 30 minutos.
                        </li>

                        <li>
                            <strong>Prova Objetiva (P1 e P2):</strong> 50 itens de Conhecimentos
                            Básicos e 70 itens de Conhecimentos Específicos.
                        </li>

                        <li>
                            <strong>Prova Discursiva (P3):</strong> Redação dissertativa de até
                            30 linhas sobre atualidades, valendo 30 pontos.
                        </li>
                    </ul>
                </div>

                <div className="glass-card full-width">
                    <h2>Conteúdo Programático Estruturado</h2>

                    <div className="syllabus-container">

                        <div className="indent-1">
                            Conhecimentos Básicos (Comum a todos – 50 Itens)
                        </div>

                        <div className="indent-2">• Língua Portuguesa</div>
                        <div className="indent-2">• Tecnologia da Informação</div>
                        <div className="indent-2">• Ética e Compliance na Administração Pública</div>
                        <div className="indent-2">• Conhecimentos do Estado de Alagoas</div>
                        <div className="indent-2">• Atualidades (Discursiva)</div>

                        <div className="indent-1">
                            Conhecimentos Específicos (Cargo 2 – 70 Itens)
                        </div>

                        <div className="indent-2">1. Análise de Sistemas</div>

                        <div className="indent-3">
                            1.1 Processos de desenvolvimento de software (CMMI-DEV, RUP,
                            Scrum 2020 e metodologias ágeis).
                        </div>

                        <div className="indent-3">
                            1.2 Orientação a Objetos.
                        </div>

                        <div className="indent-3">
                            1.3 Arquitetura de Software (MVC, Cliente/Servidor, SOA,
                            Microsserviços, Docker e Kubernetes).
                        </div>

                        <div className="indent-3">
                            1.4 Engenharia de Software, UML, requisitos e qualidade.
                        </div>

                        <div className="indent-3">
                            1.5 Linguagens: Java, Python e C#.
                        </div>

                        <div className="indent-2">
                            2. Desenvolvimento de Sistemas
                        </div>

                        <div className="indent-3">
                            2.1 Java, JavaScript, Android, iOS e Clean Code.
                        </div>

                        <div className="indent-3">
                            2.2 SOA, Web Services, APIs e interoperabilidade.
                        </div>

                        <div className="indent-3">
                            2.3 XML, XSLT, UDDI, REST e JSON.
                        </div>

                        <div className="indent-3">
                            2.4 DevOps, Git, Testes, TDD e RPA.
                        </div>

                        <div className="indent-3">
                            2.5 HTML, CSS, React, Vue.js, SPA, PWA e UX.
                        </div>

                        <div className="indent-3">
                            2.6 Blockchain, Inteligência Artificial, Big Data e acessibilidade.
                        </div>

                        <div className="indent-2">
                            3. Banco de Dados
                        </div>

                        <div className="indent-3">
                            3.1 Modelagem, normalização e SQL.
                        </div>

                        <div className="indent-3">
                            3.2 Oracle, PostgreSQL e MySQL.
                        </div>

                        <div className="indent-3">
                            3.3 NoSQL, Data Lakes, ETL e ELT.
                        </div>

                        <div className="indent-2">
                            4. Segurança da Informação
                        </div>

                        <div className="indent-3">
                            4.1 ISO 27001/27002, OAuth2, JWT e autenticação.
                        </div>

                        <div className="indent-3">
                            4.2 OWASP, SQL Injection e XSS.
                        </div>

                        <div className="indent-3">
                            4.3 Criptografia, Assinatura Digital e LGPD.
                        </div>

                        <div className="indent-3">
                            4.4 IDS, IPS, SIEM e NIST Cybersecurity Framework.
                        </div>

                        <div className="indent-2">
                            5. Fiscalização de Contratos de TI
                        </div>

                        <div className="indent-3">
                            5.1 Lei nº 13.303/2016.
                        </div>

                        <div className="indent-3">
                            5.2 Níveis de serviço, UST, Pontos de Função e penalidades.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
