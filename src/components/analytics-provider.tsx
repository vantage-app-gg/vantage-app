"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { CONSENT_EVENT, readConsent } from "@/lib/consent";

let initialized = false;

function initPostHog() {
  if (initialized) return;
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com";
  if (!key) return;
  posthog.init(key, {
    api_host: host,
    capture_pageview: "history_change",
    capture_pageleave: true,
    persistence: "localStorage+cookie",
    person_profiles: "identified_only",
    disable_session_recording: true,
  });
  initialized = true;
}

function teardownPostHog() {
  if (!initialized) return;
  posthog.opt_out_capturing();
  posthog.reset();
  initialized = false;
}

export function AnalyticsProvider() {
  useEffect(() => {
    const applyConsent = () => {
      const state = readConsent();
      if (state === "granted") initPostHog();
      else teardownPostHog();
    };

    applyConsent();
    window.addEventListener(CONSENT_EVENT, applyConsent);
    return () => window.removeEventListener(CONSENT_EVENT, applyConsent);
  }, []);

  return null;
}
