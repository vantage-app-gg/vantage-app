"use client";

import { useActionState, useEffect, useRef } from "react";
import {
  joinWaitlist,
  type WaitlistActionState,
} from "@/features/waitlist/actions";

const INITIAL: WaitlistActionState = { status: "idle" };

type Props = {
  source?: string;
};

export function WaitlistForm({ source = "landing_cta" }: Props) {
  const [state, action, pending] = useActionState(joinWaitlist, INITIAL);
  const inputRef = useRef<HTMLInputElement>(null);
  const uaRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (uaRef.current) {
      uaRef.current.value =
        typeof navigator !== "undefined" ? navigator.userAgent : "";
    }
  }, []);

  useEffect(() => {
    if (state.status === "success" && inputRef.current) {
      inputRef.current.value = "";
    }
  }, [state]);

  return (
    <form action={action} className="flex flex-col gap-3">
      <div className="flex flex-col sm:flex-row gap-2">
        <label htmlFor="waitlist-email" className="sr-only">
          Email
        </label>
        <input
          ref={inputRef}
          id="waitlist-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@domain.gg"
          disabled={pending}
          aria-describedby="waitlist-status"
          className="flex-1 border border-border-strong bg-surface/60 px-4 py-3 text-base text-foreground placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-0 transition-colors disabled:opacity-60"
        />
        <input type="hidden" name="source" value={source} />
        <input ref={uaRef} type="hidden" name="_ua" defaultValue="" />
        <div aria-hidden className="absolute -left-[10000px]">
          <label>
            Company
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={pending}
          className="btn-accent-glow inline-flex items-center justify-center gap-2 bg-accent px-6 py-3 text-base font-semibold tracking-wide text-accent-foreground disabled:opacity-60"
        >
          {pending ? "Joining…" : "Join waitlist"}
          {!pending && <span aria-hidden>→</span>}
        </button>
      </div>
      <p
        id="waitlist-status"
        role={state.status === "error" ? "alert" : "status"}
        className="text-sm min-h-[1.25rem]"
      >
        {state.status === "success" && !state.already && (
          <span className="text-accent-strong">
            You&apos;re in. We&apos;ll email when the private beta opens.
          </span>
        )}
        {state.status === "success" && state.already && (
          <span className="text-muted">
            Already on the list — see you at beta time.
          </span>
        )}
        {state.status === "error" && (
          <span className="text-[oklch(0.72_0.18_25)]">{state.message}</span>
        )}
        {state.status === "idle" && (
          <span className="text-muted">
            Email only. Unsubscribe anytime. Stored in the EU.
          </span>
        )}
      </p>
    </form>
  );
}
