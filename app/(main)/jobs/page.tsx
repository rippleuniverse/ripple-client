import { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { HeadSection } from "@/components/home/head-section";
import { Hero } from "@/components/jobs/hero";
import { OpenRoles } from "@/components/jobs/open-roles";
import { Roles } from "@/components/jobs/roles";

export const metadata: Metadata = {
  title: "Jobs",
  description: "Creative tech opportunities",
};

export default function Page() {
  return (
    <>
      <HeadSection>
        <Hero />
        <Image
          src={"/images/jobs/hero-2.png"}
          alt={"Hero 2"}
          width={185}
          height={195}
          className={"hidden lg:block w-24 xl:w-36 absolute left-1/5 bottom-0"}
        />
      </HeadSection>
      <div className="space-y-8 bg-white">
        <Suspense>
          <OpenRoles />
          <Roles />
        </Suspense>
      </div>
    </>
  );
}
