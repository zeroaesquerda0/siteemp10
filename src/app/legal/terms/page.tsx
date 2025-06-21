import type { Metadata } from "next";
import { LegalLayout } from "../../legal/components/LegalLayout";

export const metadata: Metadata = {
  title: "Termos de Uso - PrimeCode Solutions",
  description: "Leia nossos termos de uso e condições para utilização dos serviços da PrimeCode Solutions.",
  robots: "index, follow",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Termos de Uso"
      lastUpdated="19 de Junho de 2025"
      breadcrumb="Termos de Uso"
    >
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            1. Aceitação dos Termos
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Ao acessar e utilizar os serviços da PrimeCode Solutions, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.
          </p>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Estes termos constituem um acordo legal entre você e a PrimeCode Solutions, estabelecendo os direitos e responsabilidades de ambas as partes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            2. Definições
          </h2>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
            <li><strong>&quot;Empresa&quot;</strong> refere-se à PrimeCode Solutions</li>
            <li><strong>&quot;Serviços&quot;</strong> incluem desenvolvimento web, aplicativos mobile, consultoria tecnológica e suporte técnico</li>
            <li><strong>&quot;Cliente&quot;</strong> refere-se à pessoa física ou jurídica que contrata nossos serviços</li>
            <li><strong>&quot;Usuário&quot;</strong> refere-se a qualquer pessoa que acessa nosso website ou utiliza nossos serviços</li>
            <li><strong>&quot;Conteúdo&quot;</strong> inclui textos, imagens, códigos, designs e outros materiais</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            3. Descrição dos Serviços
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            A PrimeCode Solutions oferece os seguintes serviços:
          </p>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
            <li><strong>Desenvolvimento Web:</strong> Criação de websites, sistemas web e e-commerce</li>
            <li><strong>Aplicativos Mobile:</strong> Desenvolvimento de apps nativos e híbridos</li>
            <li><strong>Consultoria Tecnológica:</strong> Análise, estratégia e transformação digital</li>
            <li><strong>Suporte Técnico:</strong> Manutenção, monitoramento e suporte especializado</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            4. Condições de Contratação
          </h2>
          
          <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3">
            4.1 Processo de Contratação
          </h3>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2 mb-6">
            <li>Análise inicial dos requisitos do projeto</li>
            <li>Elaboração de proposta comercial detalhada</li>
            <li>Assinatura de contrato específico para o projeto</li>
            <li>Definição de cronograma e marcos de entrega</li>
          </ul>

          <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3">
            4.2 Responsabilidades do Cliente
          </h3>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
            <li>Fornecer informações precisas e completas sobre o projeto</li>
            <li>Disponibilizar conteúdos, materiais e acessos necessários</li>
            <li>Realizar pagamentos conforme acordado</li>
            <li>Participar ativamente do processo de desenvolvimento</li>
            <li>Testar e aprovar entregas dentro dos prazos estabelecidos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            5. Pagamentos e Faturamento
          </h2>
          
          <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3">
            5.1 Condições de Pagamento
          </h3>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2 mb-6">
            <li>Os valores são definidos em proposta comercial específica</li>
            <li>Pagamentos podem ser parcelados conforme acordo</li>
            <li>Formas de pagamento aceitas: transferência bancária, PIX, cartão de crédito</li>
            <li>Prazo padrão para pagamento: 30 dias após emissão da nota fiscal</li>
          </ul>

          <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3">
            5.2 Atraso no Pagamento
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Em caso de atraso no pagamento, poderão ser aplicados juros de mora de 1% ao mês e multa de 2% sobre o valor em atraso, além da possibilidade de suspensão dos serviços.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            6. Propriedade Intelectual
          </h2>
          
          <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3">
            6.1 Direitos do Cliente
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Após o pagamento integral dos serviços, o cliente adquire os direitos de uso do código-fonte e materiais desenvolvidos especificamente para seu projeto.
          </p>

          <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3">
            6.2 Direitos da PrimeCode Solutions
          </h3>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
            <li>Metodologias, frameworks e ferramentas proprietárias</li>
            <li>Conhecimento técnico e experiência da equipe</li>
            <li>Direito de usar o projeto como referência em portfólio</li>
            <li>Componentes e bibliotecas de uso geral desenvolvidas internamente</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            7. Garantias e Limitações
          </h2>
          
          <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3">
            7.1 Garantias Oferecidas
          </h3>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2 mb-6">
            <li>Garantia de 90 dias para correção de bugs em desenvolvimentos</li>
            <li>Suporte técnico conforme plano contratado</li>
            <li>Conformidade com especificações acordadas</li>
          </ul>

          <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3">
            7.2 Limitações de Responsabilidade
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Nossa responsabilidade é limitada ao valor pago pelos serviços. Não nos responsabilizamos por danos indiretos, lucros cessantes ou consequências de uso inadequado dos sistemas desenvolvidos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            8. Confidencialidade
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Comprometemo-nos a manter sigilo sobre todas as informações confidenciais recebidas durante a prestação dos serviços. Esta obrigação permanece válida mesmo após o término do contrato.
          </p>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Esperamos reciprocidade em relação às nossas metodologias e informações técnicas compartilhadas durante o projeto.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            9. Rescisão
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Qualquer das partes pode rescindir o contrato mediante aviso prévio de 30 dias. Em caso de rescisão:
          </p>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
            <li>Serviços executados até a data serão cobrados proporcionalmente</li>
            <li>Materiais desenvolvidos até a rescisão serão entregues</li>
            <li>Obrigações de confidencialidade permanecem válidas</li>
            <li>Pagamentos pendentes devem ser quitados</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            10. Modificações dos Termos
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações significativas serão comunicadas com antecedência mínima de 30 dias. O uso continuado dos serviços após as modificações constitui aceitação dos novos termos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            11. Lei Aplicável e Foro
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Estes termos são regidos pela legislação brasileira. Fica eleito o foro da comarca de Arapiraca, Estado de Alagoas, para dirimir quaisquer controvérsias decorrentes deste acordo.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            12. Contato
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Para dúvidas sobre estes termos, entre em contato:
          </p>
          <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
            <p className="text-neutral-700 dark:text-neutral-300">
              <strong>E-mail:</strong> contato@primecodesolutions.com.br<br />
              <strong>Telefone:</strong> +55 (82) 9 9999-9999<br />
              <strong>Endereço:</strong> Rua do Wagner Fera, 123 - Sala 456, Arapiraca, AL
            </p>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}