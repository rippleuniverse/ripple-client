import { Metadata } from "next";
import { Container } from "@/components/common/container";
import { CheckoutForm } from "@/components/event-checkout/checkout-form";
import { HeadSection } from "@/components/home/head-section";

export const metadata: Metadata = {
  title: "Event Checkout",
  description: "Event Checkout",
};

export default function Page() {
  return (
    <>
      <HeadSection></HeadSection>
      <div className="space-y-12 px-4 py-12 mt-8 bg-white">
        <Container className={"max-w-5xl"}>
          <CheckoutForm />
        </Container>
      </div>
    </>
  );
}
