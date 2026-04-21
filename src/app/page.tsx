import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { WhoItsFor } from "@/components/landing/who-its-for";
import { Faq } from "@/components/landing/faq";
import { Cta } from "@/components/landing/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhoItsFor />
      <Faq />
      <Cta />
    </>
  );
}
