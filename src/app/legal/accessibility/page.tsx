import { LegalPage, Section } from "@/components/legal-page";

export const metadata = { title: "Accessibility Statement" };

export default function AccessibilityPage() {
  return (
    <LegalPage title="Accessibility Statement" lastUpdated="2026-04-21">
      <Section heading="Our commitment">
        <p>
          Vantage is built to meet{" "}
          <strong>WCAG 2.2 Level AA</strong>. We run automated accessibility
          checks (axe-core) on every pull request and perform manual audits
          before each public release.
        </p>
      </Section>
      <Section heading="Known limitations">
        <p>
          This site is in active development. Where a component is known to
          fall short of AA, we document the issue in our internal tracker and
          prioritize it. If you encounter a barrier, please tell us — it
          helps us fix it faster.
        </p>
      </Section>
      <Section heading="Feedback">
        <p>
          If something is hard to use with a screen reader, keyboard, or any
          assistive technology, email{" "}
          <a
            className="text-foreground hover:text-accent transition-colors"
            href="mailto:vantage.app.gg@gmail.com"
          >
            vantage.app.gg@gmail.com
          </a>
          . We aim to respond within 10 business days.
        </p>
      </Section>
    </LegalPage>
  );
}
