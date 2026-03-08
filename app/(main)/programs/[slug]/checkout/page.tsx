import { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/common/container";
import { HeadSection } from "@/components/home/head-section";
import { CheckoutForm } from "@/components/program-checkout/checkout-form";

export const metadata: Metadata = {
  title: "Program Checkout",
  description: "Program Checkout",
};

export default function Page() {
  return (
    <>
      <HeadSection></HeadSection>
      <div className="space-y-12 px-4 py-12 mt-8 bg-white">
        <Container className={"max-w-5xl"}>
          <Suspense>
            <CheckoutForm />
          </Suspense>
        </Container>
      </div>
    </>
  );
}
