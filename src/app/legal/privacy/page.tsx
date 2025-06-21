import type { Metadata } from "next";
// Update the import path if the component is located elsewhere, for example:
import { LegalLayout } from "../../legal/components/LegalLayout";
// Or, if the correct path is different, adjust accordingly to match the actual file structure.

export const metadata: Metadata = {
  title: "Política de Privacidade - PrimeCode Solutions",
  description: "Conheça nossa política de privacidade e como protegemos seus dados pessoais de acordo com a LGPD.",
  robots: "index, follow",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Política de Privacidade"
      lastUpdated="19 de Junho de 2025"
      breadcrumb="Política de Privacidade"
    >
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            1. Informações Gerais
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            A PrimeCode Solutions está comprometida em proteger a privacidade e os dados pessoais de nossos clientes, usuários e visitantes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais.
          </p>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e demais regulamentações aplicáveis sobre proteção de dados pessoais.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            2. Dados Coletados
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços:
          </p>
          
          <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3">
            2.1 Dados Fornecidos Diretamente
          </h3>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2 mb-6">
            <li>Nome completo e informações de contato (e-mail, telefone)</li>
            <li>Informações da empresa (nome, CNPJ, endereço)</li>
            <li>Dados de projetos e requisitos técnicos</li>
            <li>Informações de pagamento (processadas por terceiros seguros)</li>
            <li>Comunicações e feedback</li>
          </ul>

          <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3">
            2.2 Dados Coletados Automaticamente
          </h3>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
            <li>Informações de navegação (páginas visitadas, tempo de permanência)</li>
            <li>Dados técnicos (endereço IP, tipo de navegador, sistema operacional)</li>
            <li>Cookies e tecnologias similares</li>
            <li>Logs de acesso e uso dos serviços</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            3. Finalidade do Tratamento
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Utilizamos seus dados pessoais para as seguintes finalidades:
          </p>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
            <li>Prestação de serviços de desenvolvimento e consultoria</li>
            <li>Comunicação sobre projetos e atualizações</li>
            <li>Processamento de pagamentos e faturamento</li>
            <li>Suporte técnico e atendimento ao cliente</li>
            <li>Melhoria dos nossos serviços e experiência do usuário</li>
            <li>Cumprimento de obrigações legais e regulatórias</li>
            <li>Marketing direto (com seu consentimento)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            4. Base Legal
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            O tratamento dos seus dados pessoais é fundamentado nas seguintes bases legais:
          </p>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
            <li><strong>Execução de contrato:</strong> Para prestação dos serviços contratados</li>
            <li><strong>Legítimo interesse:</strong> Para melhoria dos serviços e comunicação</li>
            <li><strong>Consentimento:</strong> Para marketing e comunicações promocionais</li>
            <li><strong>Cumprimento de obrigação legal:</strong> Para atender exigências fiscais e regulatórias</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            5. Compartilhamento de Dados
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Seus dados pessoais podem ser compartilhados nas seguintes situações:
          </p>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
            <li>Com prestadores de serviços terceirizados (hospedagem, pagamento, analytics)</li>
            <li>Com autoridades competentes, quando exigido por lei</li>
            <li>Em caso de fusão, aquisição ou venda de ativos da empresa</li>
            <li>Com seu consentimento expresso para finalidades específicas</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            6. Seus Direitos
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            De acordo com a LGPD, você possui os seguintes direitos:
          </p>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
            <li>Confirmação da existência de tratamento dos seus dados</li>
            <li>Acesso aos seus dados pessoais</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
            <li>Portabilidade dos dados para outro fornecedor</li>
            <li>Eliminação dos dados tratados com base no consentimento</li>
            <li>Revogação do consentimento</li>
            <li>Oposição ao tratamento realizado com base no legítimo interesse</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            7. Segurança dos Dados
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais:
          </p>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
            <li>Criptografia de dados em trânsito e em repouso</li>
            <li>Controles de acesso rigorosos</li>
            <li>Monitoramento contínuo de segurança</li>
            <li>Treinamento regular da equipe</li>
            <li>Auditorias de segurança periódicas</li>
            <li>Planos de resposta a incidentes</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            8. Retenção de Dados
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, respeitando os prazos legais de retenção. Após esse período, os dados são eliminados de forma segura ou anonimizados.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            9. Contato
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato conosco:
          </p>
          <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
            <p className="text-neutral-700 dark:text-neutral-300">
              <strong>E-mail:</strong> privacidade@primecodesolutions.com.br<br />
              <strong>Telefone:</strong> +55 (82) 9 9999-9999<br />
              <strong>Endereço:</strong> Rua do Wagner Fera, 123 - Sala 456, Arapiraca, AL
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            10. Alterações na Política
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Esta Política de Privacidade pode ser atualizada periodicamente. Notificaremos sobre alterações significativas através do nosso site ou por e-mail. Recomendamos que você revise esta política regularmente.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}