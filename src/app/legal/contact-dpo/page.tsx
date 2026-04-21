import { LegalPage, Section } from "@/components/legal-page";

export const metadata = { title: "Data Protection Contact" };

export default function ContactDpoPage() {
  return (
    <LegalPage title="Data Protection Contact" lastUpdated="2026-04-21">
      <Section heading="Who to contact">
        <p>
          For any data protection inquiries — access, correction, deletion,
          portability, objection, or questions about how we handle your
          data — please email:
        </p>
        <p className="font-mono text-foreground">
          <a
            className="hover:text-accent transition-colors"
            href="mailto:vantage.app.gg@gmail.com"
          >
            vantage.app.gg@gmail.com
          </a>
        </p>
      </Section>
      <Section heading="Response time">
        <p>
          We aim to respond within 10 business days. Under GDPR we have a
          maximum of 30 days to respond substantively to a verified request.
        </p>
      </Section>
      <Section heading="Supervisory authorities">
        <p>
          Swiss residents may contact the{" "}
          <a
            className="text-foreground hover:text-accent transition-colors"
            href="https://www.edoeb.admin.ch"
            target="_blank"
            rel="noopener noreferrer"
          >
            Federal Data Protection and Information Commissioner (FDPIC)
          </a>
          . EU residents may contact their national data protection
          authority.
        </p>
      </Section>
      <Section heading="DPO designation">
        <p>
          Vantage is a solo-founder operation and is not required to appoint
          a formal Data Protection Officer under GDPR Art. 37. The address
          above is the dedicated contact for all data protection matters.
        </p>
      </Section>
    </LegalPage>
  );
}
