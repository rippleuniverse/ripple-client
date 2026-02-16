import { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { HeadSection } from "@/components/home/head-section";
import { Categories } from "@/components/shop/categories";
import { Designed } from "@/components/shop/designed";
import { Hero } from "@/components/shop/hero";
import { Newsletter } from "@/components/shop/newsletter";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Purchase digital products, and resource created and curated by Ripple.",
};

export default function Page() {
  return (
    <>
      <HeadSection>
        <Image
          src={"/images/jobs/hero-2.png"}
          alt={"Hero 2"}
          width={185}
          height={195}
          className={
            "hidden lg:block w-24 xl:w-36 absolute left-1/5 -bottom-12"
          }
        />
        <Hero />
      </HeadSection>
      <div className={"mt-8"}>
        <Suspense>
          <Categories />
          <Designed />
          <Newsletter />
        </Suspense>
      </div>
    </>
  );
}
