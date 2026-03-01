import { Metadata } from "next";
import { Container } from "@/components/common/container";
import { HeadSection } from "@/components/home/head-section";
import { CheckoutForm } from "@/components/shop-checkout/checkout-form";

export const metadata: Metadata = {
  title: "Checkout",
  description:
    "A clear, one- or two-line summary explaining what the product is and why it matters.",
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
