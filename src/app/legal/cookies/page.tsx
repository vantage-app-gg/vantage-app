import { LegalPage, Section } from "@/components/legal-page";

export const metadata = { title: "Cookie Policy" };

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy" lastUpdated="2026-04-21">
      <Section heading="Essential cookies">
        <p>
          We set strictly necessary cookies for authentication (Clerk session),
          CSRF protection, and theme preference. These cannot be disabled
          without breaking core functionality.
        </p>
      </Section>
      <Section heading="Analytics">
        <p>
          Product analytics (PostHog EU) and error monitoring (Sentry EU) are
          loaded only after you grant consent via our cookie banner. Declining
          leaves the service fully functional.
        </p>
      </Section>
      <Section heading="Third-party embeds">
        <p>
          YouTube video embeds use the{" "}
          <code className="font-mono text-accent">youtube-nocookie.com</code>{" "}
          privacy-enhanced domain. No cookies are set until you press play.
        </p>
      </Section>
      <Section heading="Your choices">
        <p>
          You can change your consent at any time from the cookie settings
          link in the footer (coming soon).
        </p>
      </Section>
    </LegalPage>
  );
}
