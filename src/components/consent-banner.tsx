"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CONSENT_EVENT,
  readConsent,
  writeConsent,
  type ConsentState,
} from "@/lib/consent";

export function ConsentBanner() {
  const [state, setState] = useState<ConsentState>("pending");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setState(readConsent());
    const onChange = () => setState(readConsent());
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!mounted || state !== "pending") return null;

  return (
    <div
      role="dialog"
      aria-labelledby="consent-heading"
      aria-describedby="consent-description"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-md z-30"
    >
      <div
        className="card-gradient border border-border-strong p-5 flex flex-col gap-4"
        style={{
          boxShadow:
            "0 30px 80px -24px rgba(0,0,0,0.6), 0 0 0 1px color-mix(in oklch, var(--accent) 20%, transparent)",
        }}
      >
        <div className="flex flex-col gap-2">
          <h2
            id="consent-heading"
            className="font-mono text-xs uppercase tracking-widest text-accent"
          >
            Analytics consent
          </h2>
          <p
            id="consent-description"
            className="text-sm text-muted leading-relaxed"
          >
            We&apos;d like to load privacy-friendly product analytics
            (PostHog, EU region) so we can understand how Vantage is
            used. Essential cookies stay on either way. Full details in{" "}
            <Link
              href="/legal/cookies"
              className="text-foreground hover:text-accent transition-colors underline decoration-dotted underline-offset-4"
            >
              the cookie policy
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => writeConsent("granted")}
            className="btn-accent-glow bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold tracking-wide"
          >
            Accept analytics
          </button>
          <button
            type="button"
            onClick={() => writeConsent("denied")}
            className="border border-border-strong bg-surface/60 px-4 py-2 text-sm font-semibold tracking-wide text-foreground hover:border-accent transition-colors"
          >
            Essential only
          </button>
        </div>
      </div>
    </div>
  );
}
