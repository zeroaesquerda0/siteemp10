import type { Metadata } from "next";
import { LegalLayout } from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Conformidade LGPD - PrimeCode Solutions",
  description: "Saiba como a PrimeCode Solutions está em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  robots: "index, follow",
};

export default function LGPDPage() {
  return (
    <LegalLayout
      title="Conformidade com a LGPD"
      lastUpdated="19 de Junho de 2025"
      breadcrumb="Conformidade LGPD"
    >
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            1. Compromisso com a LGPD
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            A PrimeCode Solutions está totalmente comprometida com o cumprimento da Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). Reconhecemos a importância da proteção de dados pessoais e implementamos medidas rigorosas para garantir a conformidade com todos os requisitos legais.
          </p>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Este documento detalha nossas práticas, procedimentos e compromissos relacionados à proteção de dados pessoais em conformidade com a LGPD.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            2. Princípios da LGPD que Seguimos
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Nosso tratamento de dados pessoais é baseado nos seguintes princípios:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Finalidade</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Tratamos dados apenas para propósitos legítimos, específicos e informados ao titular.
              </p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Adequação</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                O tratamento é compatível com as finalidades informadas ao titular.
              </p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Necessidade</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Limitamos o tratamento ao mínimo necessário para atingir as finalidades.
              </p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Livre Acesso</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Garantimos consulta facilitada e gratuita sobre o tratamento dos dados.
              </p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Qualidade dos Dados</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Asseguramos exatidão, clareza e atualização dos dados.
              </p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Transparência</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Fornecemos informações claras sobre o tratamento dos dados.
              </p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Segurança</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Utilizamos medidas técnicas e administrativas para proteger os dados.
              </p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Prevenção</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Adotamos medidas para prevenir danos decorrentes do tratamento.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            3. Bases Legais para Tratamento
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Tratamos dados pessoais com base nas seguintes hipóteses legais:
          </p>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
            <li><strong>Consentimento:</strong> Para marketing direto e comunicações promocionais</li>
            <li><strong>Execução de contrato:</strong> Para prestação dos serviços contratados</li>
            <li><strong>Cumprimento de obrigação legal:</strong> Para atender exigências fiscais e regulatórias</li>
            <li><strong>Legítimo interesse:</strong> Para melhoria dos serviços e segurança</li>
            <li><strong>Exercício regular de direitos:</strong> Para defesa em processos judiciais</li>
            <li><strong>Proteção da vida:</strong> Em situações de emergência que envolvam risco</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            4. Direitos dos Titulares
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Garantimos o exercício pleno dos seguintes direitos:
          </p>
          
          <div className="space-y-4">
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Confirmação e Acesso</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Direito de obter confirmação sobre a existência de tratamento e acessar seus dados pessoais.
              </p>
            </div>
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Correção</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Direito de corrigir dados incompletos, inexatos ou desatualizados.
              </p>
            </div>
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Anonimização e Eliminação</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Direito de solicitar anonimização, bloqueio ou eliminação de dados desnecessários.
              </p>
            </div>
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Portabilidade</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Direito de solicitar a portabilidade dos dados para outro fornecedor.
              </p>
            </div>
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Eliminação</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Direito de solicitar eliminação dos dados tratados com base no consentimento.
              </p>
            </div>
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Informação sobre Compartilhamento</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Direito de obter informações sobre entidades com as quais compartilhamos dados.
              </p>
            </div>
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Revogação do Consentimento</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Direito de revogar o consentimento a qualquer momento.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            5. Como Exercer seus Direitos
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Para exercer qualquer um dos seus direitos, você pode:
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">Canais de Atendimento</h3>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200">
              <li><strong>E-mail:</strong> lgpd@primecodesolutions.com.br</li>
              <li><strong>Telefone:</strong> +55 (82) 9 9999-9999</li>
              <li><strong>Formulário online:</strong> Disponível em nosso site</li>
              <li><strong>Correspondência:</strong> Rua do Wagner Fera, 123 - Sala 456, Arapiraca, AL</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-3">Prazo de Resposta</h3>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Respondemos às solicitações em até 15 dias corridos, podendo ser prorrogado por mais 15 dias mediante justificativa. Em casos complexos, o prazo pode ser estendido conforme permitido pela lei.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            6. Medidas de Segurança
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Implementamos medidas técnicas e organizacionais robustas:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-3">Medidas Técnicas</h3>
              <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                <li>Criptografia de dados em trânsito e repouso</li>
                <li>Controles de acesso baseados em funções</li>
                <li>Monitoramento contínuo de segurança</li>
                <li>Backup e recuperação de dados</li>
                <li>Testes de penetração regulares</li>
                <li>Atualizações de segurança automáticas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-3">Medidas Organizacionais</h3>
              <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                <li>Políticas internas de proteção de dados</li>
                <li>Treinamento regular da equipe</li>
                <li>Contratos com cláusulas de proteção</li>
                <li>Auditoria e revisão de processos</li>
                <li>Plano de resposta a incidentes</li>
                <li>Avaliação de impacto à proteção de dados</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            7. Tratamento de Dados de Menores
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            O tratamento de dados pessoais de crianças e adolescentes segue regras especiais:
          </p>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
            <li>Dados de menores de 18 anos requerem consentimento dos pais ou responsáveis</li>
            <li>Coletamos apenas dados estritamente necessários</li>
            <li>Não utilizamos dados de menores para marketing direto</li>
            <li>Implementamos proteções adicionais para dados de menores</li>
            <li>Permitimos que pais/responsáveis acessem e controlem os dados</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            8. Transferência Internacional
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Quando necessário transferir dados para outros países, garantimos:
          </p>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
            <li>Transferência apenas para países com nível adequado de proteção</li>
            <li>Uso de cláusulas contratuais padrão quando aplicável</li>
            <li>Implementação de salvaguardas específicas</li>
            <li>Transparência sobre as transferências realizadas</li>
            <li>Consentimento específico quando necessário</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            9. Incidentes de Segurança
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Em caso de incidentes de segurança que possam causar risco aos titulares:
          </p>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
            <li>Comunicamos à ANPD em até 72 horas quando aplicável</li>
            <li>Notificamos os titulares afetados quando há alto risco</li>
            <li>Implementamos medidas para mitigar os danos</li>
            <li>Documentamos todos os incidentes e respostas</li>
            <li>Revisamos e melhoramos nossos controles de segurança</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            10. Encarregado de Dados (DPO)
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Designamos um Encarregado de Proteção de Dados para:
          </p>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2 mb-6">
            <li>Atuar como ponto de contato com a ANPD</li>
            <li>Orientar funcionários sobre práticas de proteção</li>
            <li>Executar demais atribuições determinadas pela ANPD</li>
            <li>Receber comunicações dos titulares de dados</li>
          </ul>
          
          <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
            <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Contato do Encarregado</h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              <strong>E-mail:</strong> dpo@primecodesolutions.com.br<br />
              <strong>Telefone:</strong> +55 (82) 9 9999-9999
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            11. Auditoria e Conformidade
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Mantemos conformidade contínua através de:
          </p>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
            <li>Auditorias internas regulares</li>
            <li>Avaliações de impacto à proteção de dados</li>
            <li>Revisão periódica de políticas e procedimentos</li>
            <li>Monitoramento de mudanças na legislação</li>
            <li>Treinamento contínuo da equipe</li>
            <li>Certificações de segurança reconhecidas</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            12. Atualizações e Contato
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Este documento é atualizado regularmente para refletir mudanças na legislação e em nossas práticas. Para dúvidas sobre nossa conformidade com a LGPD:
          </p>
          <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
            <p className="text-neutral-700 dark:text-neutral-300">
              <strong>E-mail:</strong> lgpd@primecodesolutions.com.br<br />
              <strong>Telefone:</strong> +55 (82) 9 9999-9999<br />
              <strong>Endereço:</strong> Rua do Wagner Fera, 123 - Sala 456, Arapiraca, AL<br />
              <strong>Horário de atendimento:</strong> Segunda a sexta, 8h às 18h
            </p>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}