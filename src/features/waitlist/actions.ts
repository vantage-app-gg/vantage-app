"use server";

import { getDb, schema } from "@/lib/db";

export type WaitlistActionState =
  | { status: "idle" }
  | { status: "success"; already: boolean }
  | { status: "error"; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function joinWaitlist(
  _prev: WaitlistActionState,
  formData: FormData,
): Promise<WaitlistActionState> {
  const honeypot = String(formData.get("company") ?? "");
  if (honeypot.trim().length > 0) {
    return { status: "success", already: false };
  }

  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const source = String(formData.get("source") ?? "landing").slice(0, 64);
  const userAgent = String(formData.get("_ua") ?? "").slice(0, 500) || null;

  if (!email || email.length > 320 || !EMAIL_RE.test(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  try {
    const db = getDb();
    const inserted = await db
      .insert(schema.waitlistSignups)
      .values({ email, source, userAgent })
      .onConflictDoNothing({ target: schema.waitlistSignups.email })
      .returning({ id: schema.waitlistSignups.id });

    return { status: "success", already: inserted.length === 0 };
  } catch (error) {
    console.error("[waitlist] insert failed", error);
    return {
      status: "error",
      message:
        "Couldn't save your signup right now. Please try again in a moment.",
    };
  }
}
