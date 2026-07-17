import React from "react";
import "./style.css";

const Cargo2ExamPage: React.FC = () => {
  return (
    <div className="glass-container">
      <header className="glass-header">
        <h1>Cargo 2: Análise de Sistemas</h1>
        <p>Especialista em Gestão Pública - SEPLAG AL 2026</p>
      </header>

      <div className="glass-grid">

        {/* Card: Informações da Vaga */}
        <section className="glass-card">
          <h2>Informações da Vaga</h2>

          <ul className="glass-list">
            <li>
              <strong>Cargo:</strong> Especialista em Gestão Pública
            </li>

            <li>
              <strong>Especialidade:</strong> Análise de Sistemas
            </li>

            <li>
              <strong>Remuneração:</strong> R$ 5.767,15
            </li>

            <li>
              <strong>Jornada:</strong> 40 horas semanais
            </li>

            <li>
              <strong>Requisito:</strong> Diploma de graduação em
              Análise e Desenvolvimento de Sistemas,
              Ciência da Computação,
              Sistemas de Informação
              ou Tecnologia da Informação.
            </li>
          </ul>
        </section>

        {/* Card: Tabela de Vagas */}

        <section className="glass-card">
          <h2>Tabela de Vagas</h2>

          <table className="glass-table">
            <thead>
              <tr>
                <th>Concorrência</th>
                <th>Imediatas</th>
                <th>CR</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Ampla Concorrência</td>
                <td>2</td>
                <td>1</td>
                <td>3</td>
              </tr>

              <tr>
                <td>PCD</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
              </tr>

              <tr>
                <td>PPIQ</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
              </tr>

              <tr>
                <td>
                  <strong>Total Geral</strong>
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
        </section>

        {/* Card: Datas */}

        <section className="glass-card">
          <h2>Datas Importantes</h2>

          <ul className="glass-list">
            <li>
              <strong>Inscrições:</strong> 09/03/2026 até 08/04/2026
            </li>

            <li>
              <strong>Pagamento:</strong> 10/04/2026
            </li>

            <li>
              <strong>Consulta ao Local:</strong> 15/05/2026
            </li>

            <li>
              <strong>Prova:</strong> 31/05/2026
            </li>

            <li>
              <strong>Gabarito:</strong> 11/06/2026
            </li>

            <li>
              <strong>Resultado:</strong> 08/07/2026
            </li>
          </ul>
        </section>

        {/* Card: Formato da Prova */}

        <section className="glass-card">
          <h2>Formato da Prova</h2>

          <ul className="glass-list">
            <li>
              <strong>Banca:</strong> Cebraspe
            </li>

            <li>
              Método Certo ou Errado.
            </li>

            <li>
              120 itens objetivos.
            </li>

            <li>
              50 questões básicas.
            </li>

            <li>
              70 questões específicas.
            </li>

            <li>
              Redação de até 30 linhas.
            </li>

            <li>
              Duração de 4h30.
            </li>
          </ul>
        </section>

        {/* Conteúdo Programático */}

        <section className="glass-card full-width">

          <h2>Conteúdo Programático</h2>

          <div className="content-tree">

            <div className="content-section">

              <span className="content-title">
                Conhecimentos Básicos
              </span>

              <div className="indent-1">
                Língua Portuguesa
              </div>

              <div className="indent-1">
                Tecnologia da Informação
              </div>

              <div className="indent-1">
                Ética e Compliance
              </div>

              <div className="indent-1">
                Estado de Alagoas
              </div>

              <div className="indent-1">
                Atualidades
              </div>

            </div>

            <div className="content-section">

              <span className="content-title">
                Conhecimentos Específicos
              </span>
                            <div className="indent-1">
                1. Análise de Sistemas
              </div>

              <div className="indent-2">
                1.1 Processos de desenvolvimento de software (CMMI, RUP, Scrum)
              </div>

              <div className="indent-2">
                1.2 Orientação a Objetos
              </div>

              <div className="indent-2">
                1.3 Arquitetura de Software (MVC, SOA, Microsserviços e Contêineres)
              </div>

              <div className="indent-2">
                1.4 Engenharia de Software
              </div>

              <div className="indent-2">
                1.5 Levantamento e Gerenciamento de Requisitos
              </div>

              <div className="indent-2">
                1.6 UML
              </div>

              <div className="indent-2">
                1.7 Java
              </div>

              <div className="indent-2">
                1.8 Python
              </div>

              <div className="indent-2">
                1.9 C#
              </div>

              <div className="indent-1">
                2. Desenvolvimento de Sistemas
              </div>

              <div className="indent-2">
                2.1 Clean Code
              </div>

              <div className="indent-2">
                2.2 REST
              </div>

              <div className="indent-2">
                2.3 XML
              </div>

              <div className="indent-2">
                2.4 JSON
              </div>

              <div className="indent-2">
                2.5 DevOps
              </div>

              <div className="indent-2">
                2.6 Git
              </div>

              <div className="indent-2">
                2.7 Testes de Software
              </div>

              <div className="indent-2">
                2.8 TDD
              </div>

              <div className="indent-2">
                2.9 HTML
              </div>

              <div className="indent-2">
                2.10 CSS
              </div>

              <div className="indent-2">
                2.11 JavaScript
              </div>

              <div className="indent-2">
                2.12 React
              </div>

              <div className="indent-2">
                2.13 Vue.js
              </div>

              <div className="indent-2">
                2.14 UX
              </div>

              <div className="indent-2">
                2.15 Inteligência Artificial aplicada ao desenvolvimento
              </div>

              <div className="indent-1">
                3. Banco de Dados
              </div>

              <div className="indent-2">
                3.1 Modelagem
              </div>

              <div className="indent-2">
                3.2 Normalização
              </div>

              <div className="indent-2">
                3.3 SQL
              </div>

              <div className="indent-2">
                3.4 Oracle
              </div>

              <div className="indent-2">
                3.5 PostgreSQL
              </div>

              <div className="indent-2">
                3.6 MySQL
              </div>

              <div className="indent-2">
                3.7 NoSQL
              </div>

              <div className="indent-2">
                3.8 Big Data
              </div>

              <div className="indent-2">
                3.9 Data Lakes
              </div>

              <div className="indent-1">
                4. Segurança da Informação
              </div>

              <div className="indent-2">
                4.1 ISO 27001 e ISO 27002
              </div>

              <div className="indent-2">
                4.2 OWASP
              </div>

              <div className="indent-2">
                4.3 Criptografia
              </div>

              <div className="indent-2">
                4.4 Assinatura Digital
              </div>

              <div className="indent-2">
                4.5 Gestão de Riscos
              </div>

              <div className="indent-2">
                4.6 LGPD
              </div>

              <div className="indent-2">
                4.7 NIST Cybersecurity Framework
              </div>

              <div className="indent-1">
                5. Fiscalização de Contratos de TI
              </div>

              <div className="indent-2">
                5.1 Gestão de Contratos
              </div>

              <div className="indent-2">
                5.2 Indicadores de Nível de Serviço
              </div>

              <div className="indent-2">
                5.3 UST
              </div>

              <div className="indent-2">
                5.4 Pontos de Função
              </div>

            </div>

          </div>

        </section>

      </div>
    </div>
  );
};

export default Cargo2ExamPage;
