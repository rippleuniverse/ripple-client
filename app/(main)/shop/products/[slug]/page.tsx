import { Metadata } from "next";
import Image from "next/image";
import { HeadSection } from "@/components/home/head-section";
import { ProductHero } from "@/components/shop/hero/product-hero";
import { ProductInfo } from "@/components/shop/product-info";
import { Questions } from "@/components/shop/questions";

export const metadata: Metadata = {
  title: "Product",
  description:
    "A clear, one- or two-line summary explaining what the product is and why it matters.",
};

export default function Page() {
  return (
    <>
      <HeadSection>
        <ProductHero />
        <Image
          src={"/images/jobs/hero-2.png"}
          alt={"Hero 2"}
          width={185}
          height={195}
          className={
            "hidden lg:block w-24 xl:w-36 absolute left-1/5 -bottom-12"
          }
        />
      </HeadSection>
      <div className="space-y-8">
        <ProductInfo />
        <Questions />
      </div>
    </>
  );
}
