import { ConsentPreferencesButton } from "@/components/consent-preferences-button";
import { LegalPage, Section } from "@/components/legal-page";

export const metadata = { title: "Cookie Policy" };

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy" lastUpdated="2026-04-22">
      <Section heading="Essential cookies">
        <p>
          We set strictly necessary cookies for authentication (Clerk
          session), CSRF protection, and your theme preference. These
          can&apos;t be disabled without breaking core functionality and
          are exempt from the consent requirement under revDSG and EU
          ePrivacy / GDPR rules.
        </p>
      </Section>
      <Section heading="Analytics (consent-gated)">
        <p>
          Product analytics are provided by{" "}
          <a
            href="https://posthog.com/eu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent transition-colors"
          >
            PostHog EU
          </a>
          . Analytics only loads after you click{" "}
          <strong className="text-foreground">Accept analytics</strong> in
          the consent banner. If you choose{" "}
          <strong className="text-foreground">Essential only</strong>,
          PostHog is never initialised and no analytics cookies are set.
          Declining leaves the service fully functional.
        </p>
        <p>
          We disable session recording by default and capture anonymous
          person profiles only for users who log in.
        </p>
      </Section>
      <Section heading="Error monitoring">
        <p>
          Error telemetry (Sentry EU) is used to diagnose crashes and
          server errors. It runs on essential grounds where strictly
          needed to keep the service functional and secure.
        </p>
      </Section>
      <Section heading="Third-party embeds">
        <p>
          YouTube video embeds use the{" "}
          <code className="font-mono text-accent">
            youtube-nocookie.com
          </code>{" "}
          privacy-enhanced domain. No cookies are set until you press
          play.
        </p>
      </Section>
      <Section heading="Change your choice">
        <p>
          You can reopen the consent banner at any time:
        </p>
        <p>
          <ConsentPreferencesButton />
        </p>
      </Section>
    </LegalPage>
  );
}
