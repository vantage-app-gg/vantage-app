import { LegalPage, Section } from "@/components/legal-page";

export const metadata = { title: "Riot Games Disclaimer" };

export default function RiotDisclaimerPage() {
  return (
    <LegalPage title="Riot Games Disclaimer" lastUpdated="2026-04-21" status="final">
      <Section heading="Not endorsed by Riot Games">
        <p>
          Vantage isn&apos;t endorsed by Riot Games and doesn&apos;t reflect
          the views or opinions of Riot Games or anyone officially involved
          in producing or managing Riot Games properties. Riot Games, and
          all associated properties, are trademarks or registered trademarks
          of Riot Games, Inc.
        </p>
      </Section>
      <Section heading="Data sources">
        <p>
          Match statistics are accessed through the official Riot Games API
          under their Terms of Service. We do not use unofficial data
          sources, scrapers, or third-party community APIs.
        </p>
      </Section>
      <Section heading="Commitments">
        <ul className="list-disc pl-5 flex flex-col gap-1">
          <li>No in-game overlays.</li>
          <li>Rate limits enforced programmatically in our client.</li>
          <li>Match data retained for a maximum of 30 days.</li>
          <li>Account deletion cascades to all Riot-derived data.</li>
          <li>
            YouTube videos embedded via the{" "}
            <code className="font-mono text-accent">youtube-nocookie.com</code>{" "}
            privacy domain.
          </li>
        </ul>
      </Section>
    </LegalPage>
  );
}
