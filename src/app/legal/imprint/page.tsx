import { LegalPage, Section } from "@/components/legal-page";

export const metadata = { title: "Imprint" };

export default function ImprintPage() {
  return (
    <LegalPage title="Imprint" lastUpdated="2026-04-21">
      <Section heading="Operator">
        <p>
          Vantage is operated by a solo founder based in Switzerland as a sole
          proprietorship (Einzelfirma). Full legal details and registered
          address will be published here before public launch.
        </p>
      </Section>
      <Section heading="Contact">
        <p>
          Email:{" "}
          <a
            className="text-foreground hover:text-accent transition-colors"
            href="mailto:vantage.app.gg@gmail.com"
          >
            vantage.app.gg@gmail.com
          </a>
        </p>
      </Section>
      <Section heading="Responsible for content (UWG Art. 3)">
        <p>Solo founder. Contact details as above.</p>
      </Section>
      <Section heading="VAT">
        <p>
          Below the Swiss CHF 100,000 worldwide turnover threshold — no
          Swiss VAT registration. EU VAT is collected and remitted by our
          payment provider (Paddle) as Merchant of Record.
        </p>
      </Section>
    </LegalPage>
  );
}
