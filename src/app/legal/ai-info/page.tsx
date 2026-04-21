import { LegalPage, Section } from "@/components/legal-page";

export const metadata = { title: "AI Information" };

export default function AiInfoPage() {
  return (
    <LegalPage title="AI Information" lastUpdated="2026-04-21">
      <Section heading="Where we use AI">
        <ul className="list-disc pl-5 flex flex-col gap-1">
          <li>
            <strong>Content matching:</strong> suggesting YouTube videos from
            our curated whitelist to topics and user projects.
          </li>
          <li>
            <strong>Match analysis (paid):</strong> generating structured
            coaching reports from your Riot Games match data.
          </li>
        </ul>
      </Section>
      <Section heading="Models">
        <p>
          We route LLM calls through the Vercel AI Gateway. Primary models:
          Claude Sonnet 4.6 for quality-critical analysis and Claude Haiku 4.5
          for high-volume matching. Model selection may change over time as
          better options become available.
        </p>
      </Section>
      <Section heading="Disclaimer">
        <p>
          AI outputs are <strong>educational, not authoritative</strong>. They
          may contain errors, omissions, or misinterpretations. Treat every
          suggestion as a starting point for your own judgment, not a
          guarantee.
        </p>
      </Section>
      <Section heading="Grounding">
        <p>
          Coaching outputs are grounded in your own match statistics and our
          curated content pool. We prompt the model to avoid claims about
          other players (e.g. cheating, toxicity) and to cite the data it
          uses.
        </p>
      </Section>
      <Section heading="Quality review">
        <p>
          AI inputs and outputs are retained for 90 days (anonymized) so we
          can investigate quality issues. Each analysis has a &quot;Flag low
          quality&quot; button you can use at any time.
        </p>
      </Section>
      <Section heading="Zero data retention with providers">
        <p>
          We use Vercel AI Gateway&apos;s zero-data-retention routing; model
          providers do not persist your prompts or outputs.
        </p>
      </Section>
    </LegalPage>
  );
}
