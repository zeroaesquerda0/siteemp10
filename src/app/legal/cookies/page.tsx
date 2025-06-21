import type { Metadata } from "next";
import { LegalLayout } from "../components/LegalLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies - PrimeCode Solutions",
  description: "Saiba como utilizamos cookies e tecnologias similares em nosso website.",
  robots: "index, follow",
};

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Política de Cookies"
      lastUpdated="8 de Junho de 2025"
      breadcrumb="Política de Cookies"
    >
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            1. O que são Cookies
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo (computador, tablet ou celular) quando você visita um website. Eles são amplamente utilizados para fazer os sites funcionarem de forma mais eficiente e fornecer informações aos proprietários do site.
          </p>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Os cookies nos ajudam a entender como você interage com nosso site, permitindo-nos melhorar sua experiência e personalizar o conteúdo apresentado.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            2. Tipos de Cookies que Utilizamos
          </h2>
          
          <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3">
            2.1 Cookies Essenciais
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Estes cookies são necessários para o funcionamento básico do site e não podem ser desativados. Eles incluem:
          </p>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2 mb-6">
            <li>Cookies de sessão para manter você logado</li>
            <li>Cookies de segurança para proteger contra ataques</li>
            <li>Cookies de preferências de idioma e região</li>
            <li>Cookies de carrinho de compras (quando aplicável)</li>
          </ul>

          <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3">
            2.2 Cookies de Performance
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Estes cookies coletam informações sobre como você usa nosso site:
          </p>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2 mb-6">
            <li>Páginas mais visitadas</li>
            <li>Tempo gasto em cada página</li>
            <li>Caminhos de navegação</li>
            <li>Erros encontrados durante a navegação</li>
          </ul>

          <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3">
            2.3 Cookies de Funcionalidade
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Estes cookies permitem que o site lembre de escolhas que você fez:
          </p>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2 mb-6">
            <li>Preferências de tema (claro/escuro)</li>
            <li>Configurações de acessibilidade</li>
            <li>Informações de formulários preenchidos</li>
            <li>Preferências de layout e design</li>
          </ul>

          <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3">
            2.4 Cookies de Marketing
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Estes cookies são usados para personalizar anúncios e medir a eficácia de campanhas:
          </p>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
            <li>Rastreamento de conversões</li>
            <li>Personalização de anúncios</li>
            <li>Análise de comportamento para remarketing</li>
            <li>Integração com redes sociais</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            3. Cookies de Terceiros
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Utilizamos serviços de terceiros que podem definir cookies em nosso site:
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg">
              <thead className="bg-neutral-50 dark:bg-neutral-700">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-neutral-900 dark:text-white">Serviço</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-neutral-900 dark:text-white">Finalidade</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-neutral-900 dark:text-white">Política</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-300">Google Analytics</td>
                  <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-300">Análise de tráfego e comportamento</td>
                  <td className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
                    <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                      Ver política
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-300">Google Ads</td>
                  <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-300">Publicidade e remarketing</td>
                  <td className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
                    <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                      Ver política
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-300">Facebook Pixel</td>
                  <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-300">Análise e publicidade social</td>
                  <td className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
                    <Link href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">
                      Ver política
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            4. Gerenciamento de Cookies
          </h2>
          
          <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3">
            4.1 Controle pelo Navegador
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Você pode controlar e/ou excluir cookies conforme desejar. Veja como fazer isso nos principais navegadores:
          </p>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2 mb-6">
            <li><strong>Chrome:</strong> Configurações → Privacidade e segurança → Cookies</li>
            <li><strong>Firefox:</strong> Opções → Privacidade e Segurança → Cookies</li>
            <li><strong>Safari:</strong> Preferências → Privacidade → Cookies</li>
            <li><strong>Edge:</strong> Configurações → Cookies e permissões do site</li>
          </ul>

          <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3">
            4.2 Ferramentas de Opt-out
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Para cookies de publicidade, você pode usar estas ferramentas:
          </p>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
            <li>Google Ads Settings: <Link href="https://adssettings.google.com" className="text-blue-600 dark:text-blue-400">adssettings.google.com</Link></li>
            <li>Facebook Ad Preferences: Configurações de anúncios no Facebook</li>
            <li>Network Advertising Initiative: <Link href="https://optout.networkadvertising.org" className="text-blue-600 dark:text-blue-400">optout.networkadvertising.org</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            5. Consequências da Desativação
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            A desativação de cookies pode afetar sua experiência no site:
          </p>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
            <li>Algumas funcionalidades podem não funcionar corretamente</li>
            <li>Você pode precisar fazer login repetidamente</li>
            <li>Preferências e configurações podem ser perdidas</li>
            <li>O conteúdo pode não ser personalizado para você</li>
            <li>Formulários podem precisar ser preenchidos novamente</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            6. Cookies em Dispositivos Móveis
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Em dispositivos móveis, além dos cookies tradicionais, podemos usar:
          </p>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
            <li>Local Storage para armazenar dados localmente</li>
            <li>Session Storage para dados temporários</li>
            <li>Web beacons para análise de uso</li>
            <li>Identificadores de publicidade móvel</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            7. Atualizações desta Política
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Esta política de cookies pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou por outros motivos operacionais, legais ou regulamentares. Recomendamos que você revise esta página regularmente para se manter informado sobre nosso uso de cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            8. Consentimento
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Ao continuar navegando em nosso site após ser informado sobre o uso de cookies, você consente com nossa política de cookies. Você pode retirar seu consentimento a qualquer momento alterando as configurações do seu navegador.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            9. Contato
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Se você tiver dúvidas sobre nossa política de cookies, entre em contato:
          </p>
          <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
            <p className="text-neutral-700 dark:text-neutral-300">
              <strong>E-mail:</strong> privacidade@primecodesolutions.com.br<br />
              <strong>Telefone:</strong> +55 (82) 9 9999-9999<br />
              <strong>Endereço:</strong> Rua do Wagner Fera, 123 - Sala 456, Arapiraca, AL
            </p>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}