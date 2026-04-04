import { Metadata } from "next";
import { AboutContent } from "@/components/about/about-content";
import { Hero } from "@/components/about/hero";
import { HeadSection } from "@/components/home/head-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Ripple Universe is a cutting-edge creative tech startup dedicated to guiding individuals from diverse backgrounds into the cosmos of creative tech",
};

export default function Page() {
  return (
    <>
      <HeadSection>
        <Hero />
      </HeadSection>
      <div className="bg-white my-16">
        <AboutContent />
      </div>
    </>
  );
}
