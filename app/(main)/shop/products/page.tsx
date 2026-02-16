import { Metadata } from "next";
import { Suspense } from "react";
import { HeadSection } from "@/components/home/head-section";
import { Products } from "@/components/shop/products/Products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "A clear, one- or two-line summary explaining what the product is and why it matters.",
};

export default function Page() {
  return (
    <div className="space-y-8">
      <HeadSection className="py-7" />
      <div className="space-y-8">
        <Suspense>
          <Products />
        </Suspense>
      </div>
    </div>
  );
}
