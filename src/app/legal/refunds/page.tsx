import { LegalPage, Section } from "@/components/legal-page";

export const metadata = { title: "Refunds & Right of Withdrawal" };

export default function RefundsPage() {
  return (
    <LegalPage title="Refunds & Right of Withdrawal" lastUpdated="2026-04-21">
      <Section heading="EU right of withdrawal">
        <p>
          Consumers residing in the EU have a statutory 14-day right of
          withdrawal for digital subscriptions, starting from the date of
          purchase. By beginning to use AI analysis features during this
          window, you expressly consent to performance of the service and
          acknowledge that the right of withdrawal lapses once the service
          has been fully performed.
        </p>
      </Section>
      <Section heading="How to request a refund">
        <p>
          Contact Paddle, our Merchant of Record, directly via the receipt
          email, or reach us at{" "}
          <a
            className="text-foreground hover:text-accent transition-colors"
            href="mailto:vantage.app.gg@gmail.com"
          >
            vantage.app.gg@gmail.com
          </a>
          {" "}
          and we will assist with the request.
        </p>
      </Section>
      <Section heading="Trial conversions">
        <p>
          The 7-day trial requires a payment method and auto-converts to a
          paid subscription unless you cancel before the trial ends.
          Cancellations can be made from your account billing page at any
          time.
        </p>
      </Section>
      <Section heading="Subscription cancellation">
        <p>
          Monthly and annual subscriptions can be cancelled at any time and
          remain active until the end of the current billing period.
        </p>
      </Section>
    </LegalPage>
  );
}
