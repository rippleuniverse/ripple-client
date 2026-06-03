import { Building } from "@/components/home/building";
import { Explore } from "@/components/home/explore";
import { HeadSection } from "@/components/home/head-section";
import { Hero, HeroImages } from "@/components/home/head-section/hero";
import { Newsletter } from "@/components/home/newsletter";
import { Trusted } from "@/components/home/trusted";

export default function Home() {
  return (
    <>
      <HeadSection>
        <Hero />
        <HeroImages />
      </HeadSection>
      <Trusted />
      <Building />
      <Explore />
      <Newsletter />
    </>
  );
}
