export const CONSENT_STORAGE_KEY = "vantage:consent:v1";
export const CONSENT_EVENT = "vantage:consent-changed";

export type ConsentState = "granted" | "denied" | "pending";

export function readConsent(): ConsentState {
  if (typeof window === "undefined") return "pending";
  const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (raw === "granted" || raw === "denied") return raw;
  return "pending";
}

export function writeConsent(state: Exclude<ConsentState, "pending">): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONSENT_STORAGE_KEY, state);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: state }));
}

export function resetConsent(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: "pending" }));
}
