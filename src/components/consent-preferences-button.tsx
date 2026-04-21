"use client";

import { resetConsent } from "@/lib/consent";

export function ConsentPreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => resetConsent()}
      className="text-foreground hover:text-accent transition-colors underline decoration-dotted underline-offset-4"
    >
      Review your cookie preferences
    </button>
  );
}
