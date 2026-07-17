import React from 'react';
import './style.css';

const Cargo2ExamPage: React.FC = () => {
  return (
    <div className="glass-container">
      <header className="glass-header">
        <h1>Cargo 2: Análise de Sistemas</h1>
        <p>Especialista em Gestão Pública - SEPLAG AL 2026</p>
      </header>

      <div className="glass-grid">
        
        {/* Card: Informações Importantes */}
        <section className="glass-card">
          <h2>Informações da Vaga</h2>
          <ul className="glass-list">
            <li><strong>Cargo:</strong> Especialista em Gestão Pública [1]</li>
            <li><strong>Especialidade:</strong> Análise de Sistemas [2]</li>
            <li><strong>Remuneração:</strong> R$ 5.767,15 [2]</li>
            <li><strong>Jornada de Trabalho:</strong> 40 horas semanais [2]</li>
            <li><strong>Requisito:</strong> Diploma de graduação em Análise e Desenvolvimento de Sistemas, Ciência da Computação, Sistemas de Informação ou TI [2].</li>
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
                <th>Cadastro Reserva</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ampla Concorrência (AC)</td>
                <td>2</td>
                <td>1</td>
                <td>3 [3, 4]</td>
              </tr>
              <tr>
                <td>Pessoa c/ Deficiência (PCD)</td>
                <td>0</td>
                <td>1</td>
                <td>1 [3, 4]</td>
              </tr>
              <tr>
                <td>Cotas (PPIQ)</td>
                <td>0</td>
                <td>1</td>
                <td>1 [3, 4]</td>
              </tr>
              <tr>
                <td><strong>Total Geral</strong></td>
                <td><strong>2</strong></td>
                <td><strong>3</strong></td>
                <td><strong>5 [3, 4]</strong></td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Card: Datas Importantes */}
        <section className="glass-card">
          <h2>Datas Importantes</h2>
          <ul className="glass-list">
            <li><strong>Período de Inscrição:</strong> 09/03 a 08/04/2026 [5]</li>
            <li><strong>Fim do Pagamento da Taxa:</strong> 10/04/2026 [6]</li>
            <li><strong>Locais de Prova (Consulta):</strong> 15/05/2026 [7]</li>
            <li><strong>Data da Prova:</strong> 31/05/2026 (Turno da Tarde) [7, 8]</li>
            <li><strong>Gabarito Oficial Preliminar:</strong> 11/06/2026 [9, 10]</li>
            <li><strong>Resultado (Objetiva e Prov. Discursiva):</strong> 08/07/2026 [10]</li>
          </ul>
        </section>

        {/* Card: Estilo da Prova */}
        <section className="glass-card">
          <h2>Estilo e Formato da Prova</h2>
          <ul className="glass-list">
            <li><strong>Banca:</strong> Cebraspe (Método Certo/Errado) [11, 12].</li>
            <li><strong>Penalidade:</strong> Marcações em discordância com o gabarito recebem pontuação negativa [13].</li>
            <li><strong>Duração Total:</strong> 4 horas e 30 minutos [8].</li>
            <li><strong>Objetiva (120 itens):</strong> 50 Conhecimentos Básicos e 70 Específicos [8].</li>
            <li><strong>Discursiva (30 pontos):</strong> Texto dissertativo manuscrito de até 30 linhas sobre atualidades (usar caneta preta transparente) [14, 15].</li>
          </ul>
        </section>

        {/* Card: Conteúdo Programático */}
        <section className="glass-card full-width">
          <h2>Conteúdo Programático Estruturado</h2>
          <div className="content-tree">
            
            <div className="content-section">
              <span className="content-title">Conhecimentos Básicos [16-19]</span>
              <div className="indent-1">Língua Portuguesa</div>
              <div className="indent-1">Tecnologia da Informação</div>
              <div className="indent-1">Ética e Compliance na Administração Pública</div>
              <div className="indent-1">Conhecimentos do Estado de Alagoas</div>
              <div className="indent-1">Atualidades (Somente para a prova discursiva)</div>
            </div>

            <div className="content-section">
              <span className="content-title">Conhecimentos Específicos [20-24]</span>
              
              <div className="indent-1">1. Análise de Sistemas</div>
              <div className="indent-2">1.1 Processos de desenvolvimento de software (CMMI, RUP, Scrum)</div>
              <div className="indent-2">1.2 Orientação a objetos</div>
              <div className="indent-2">1.3 Padrões de arquitetura (MVC, SOA, Microsserviços, Contêineres)</div>
              <div className="indent-2">1.4 Engenharia de software e requisitos</div>
              <div className="indent-2">1.5 Linguagens de programação (Java, Python, C#)</div>

              <div className="indent-1">2. Desenvolvimento de Sistemas</div>
              <div className="indent-2">2.1 Dev Mobile e Clean Code</div>
              <div className="indent-2">2.2 Arquitetura de Software e Padrões (XML, REST, JSON)</div>
              <div className="indent-2">2.3 DevOps e GIT</div>
              <div className="indent-2">2.4 Testes (TDD, Ágeis) e RPA</div>
              <div className="indent-2">2.5 Frontend Web (HTML, CSS, React, VueJS)</div>
              <div className="indent-2">2.6 UX, Design de Software e IA</div>

              <div className="indent-1">3. Bancos de Dados</div>
              <div className="indent-2">3.1 Fundamentos, Modelagem e Normalização</div>
              <div className="indent-2">3.2 Linguagem SQL (ANSI, DDL, DML)</div>
              <div className="indent-2">3.3 Plataformas (Oracle, MySQL, PostgreSQL)</div>
              <div className="indent-2">3.4 NoSQL, Big Data e Data Lakes</div>

              <div className="indent-1">4. Segurança da Informação</div>
              <div className="indent-2">4.1 Políticas de SI (ISO 27001/27002) e Autenticação</div>
              <div className="indent-2">4.2 Vulnerabilidades OWASP e Prevenção de Ataques</div>
              <div className="indent-2">4.3 Criptografia, Assinatura Digital e Gestão de Riscos</div>
              <div className="indent-2">4.4 LGPD e NIST Cybersecurity Framework</div>

              <div className="indent-1">5. Fiscalização de Contratos de TI</div>
              <div className="indent-2">5.1 Gestão e Legislação de contratação de TI</div>
              <div className="indent-2">5.2 Indicadores de nível de serviço, UST e Pontos de Função</div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};
