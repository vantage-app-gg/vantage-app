import { LegalPage, Section } from "@/components/legal-page";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="2026-04-21">
      <Section heading="Controller">
        <p>
          Vantage, operated by a solo founder in Switzerland. We comply with
          the revised Swiss Federal Act on Data Protection (revDSG, in force
          since 1 September 2023) and the EU General Data Protection
          Regulation (GDPR) where applicable.
        </p>
      </Section>
      <Section heading="What we collect">
        <ul className="list-disc pl-5 flex flex-col gap-1">
          <li>Account data (email, display name, rank) via Clerk.</li>
          <li>Riot Games match data, limited to what is required to generate analyses.</li>
          <li>Usage analytics (anonymized, consent-gated) via PostHog EU.</li>
          <li>Error telemetry via Sentry EU.</li>
          <li>Payment data via Paddle (Merchant of Record); we never see full card details.</li>
        </ul>
      </Section>
      <Section heading="Sub-processors">
        <p>
          Our active sub-processors are documented in the project&apos;s legal
          compliance file and include: Vercel (hosting), Neon (database, EU),
          Clerk (auth), Paddle (payments), Sentry (errors, EU), PostHog
          (analytics, EU), Vercel AI Gateway (LLM routing), YouTube Data API
          (content metadata).
        </p>
      </Section>
      <Section heading="Retention">
        <p>
          Riot match data is retained for a maximum of 30 days. AI analysis
          inputs and outputs are retained for 90 days (anonymized) for
          quality review. Account data is retained until account deletion
          (30-day soft-delete window, then permanent).
        </p>
      </Section>
      <Section heading="Your rights">
        <p>
          Under GDPR and revDSG you may request access, correction, deletion,
          or portability of your personal data, and object to processing. To
          exercise these rights, email{" "}
          <a
            className="text-foreground hover:text-accent transition-colors"
            href="mailto:vantage.app.gg@gmail.com"
          >
            vantage.app.gg@gmail.com
          </a>
          .
        </p>
      </Section>
      <Section heading="Finalization">
        <p>
          This policy is preliminary and will be finalized with legal review
          before public launch.
        </p>
      </Section>
    </LegalPage>
  );
}
