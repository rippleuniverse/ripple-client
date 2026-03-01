import type { Metadata } from "next";
import { PurchaseDetails } from "@/components/purchases/shop/purchase-details";

export const metadata: Metadata = {
  title: "Purchase details",
  description: "Purchase details",
};

export default function Page() {
  return (
    <>
      <PurchaseDetails />
    </>
  );
}
