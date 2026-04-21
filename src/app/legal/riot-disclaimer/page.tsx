import { LegalPage, Section } from "@/components/legal-page";

export const metadata = { title: "Riot Games Disclaimer" };

export default function RiotDisclaimerPage() {
  return (
    <LegalPage
      title="Riot Games Disclaimer"
      lastUpdated="2026-04-22"
      status="final"
    >
      <Section heading="Not endorsed by Riot Games">
        <p>
          Vantage isn&apos;t endorsed by Riot Games and doesn&apos;t
          reflect the views or opinions of Riot Games or anyone officially
          involved in producing or managing Riot Games properties. Valorant,
          Riot Games, and all associated properties are trademarks or
          registered trademarks of Riot Games, Inc.
        </p>
        <p>
          Vantage is an independent educational tool built by a solo
          developer in Switzerland. It is not an official Riot product, is
          not affiliated with Riot Games in any commercial capacity, and
          does not process payments on Riot&apos;s behalf.
        </p>
      </Section>

      <Section heading="Data sources">
        <p>
          Match statistics are accessed exclusively through the{" "}
          <a
            href="https://developer.riotgames.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent transition-colors"
          >
            official Riot Games API
          </a>{" "}
          under the Riot Developer Terms of Service. We do not use unofficial
          data sources, scrapers, or third-party community APIs — including
          HenrikDev or similar relay services — under any circumstances.
        </p>
        <p>
          Before Riot production approval lands, paid users enter match data
          manually. Automatic Riot sync is activated only after our
          production-key application is approved.
        </p>
      </Section>

      <Section heading="Our operational commitments">
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li>
            <strong className="text-foreground">No in-game overlays.</strong>{" "}
            Vantage is a pre- and post-session tool. No part of the product
            reads from, writes to, or draws over the live Valorant client.
          </li>
          <li>
            <strong className="text-foreground">Official API only.</strong>{" "}
            We never scrape Riot properties or use unofficial data relays.
          </li>
          <li>
            <strong className="text-foreground">
              Programmatic rate limiting.
            </strong>{" "}
            Our Riot client enforces Riot&apos;s rate limits in code with
            retry + backoff — not a best-effort convention.
          </li>
          <li>
            <strong className="text-foreground">
              30-day match data retention.
            </strong>{" "}
            Retrieved Riot match data is retained for a maximum of 30 days,
            then automatically purged.
          </li>
          <li>
            <strong className="text-foreground">
              Cascade deletion on account removal.
            </strong>{" "}
            When you delete your Vantage account, every piece of Riot-derived
            data tied to it is deleted within the 30-day soft-delete window.
          </li>
          <li>
            <strong className="text-foreground">
              No unlicensed Riot artwork.
            </strong>{" "}
            We don&apos;t reproduce Riot logos or Valorant iconography
            outside of uses that are unambiguously covered by the Riot Fan
            Content Policy, and we will remove any asset on request.
          </li>
          <li>
            <strong className="text-foreground">
              Privacy-first YouTube embeds.
            </strong>{" "}
            Creator videos are embedded via{" "}
            <code className="font-mono text-accent">
              youtube-nocookie.com
            </code>
            , which suppresses tracking cookies until playback starts.
          </li>
          <li>
            <strong className="text-foreground">
              Clear AI output boundaries.
            </strong>{" "}
            AI-generated analysis never makes claims about cheating or other
            players&apos; conduct, and every output carries an
            &ldquo;AI-generated, educational, no guarantees&rdquo; notice.
          </li>
        </ul>
      </Section>

      <Section heading="Reporting a concern">
        <p>
          If you represent Riot Games or believe Vantage is out of step with
          Riot&apos;s Developer Terms, Fan Content Policy, or any other
          policy, please reach out to{" "}
          <a
            href="mailto:vantage.app.gg@gmail.com"
            className="text-foreground hover:text-accent transition-colors"
          >
            vantage.app.gg@gmail.com
          </a>
          . We&apos;ll respond within 72 hours and remediate promptly.
        </p>
      </Section>
    </LegalPage>
  );
}
