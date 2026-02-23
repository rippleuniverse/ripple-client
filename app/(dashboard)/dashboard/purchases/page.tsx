import type { Metadata } from "next";
import { Suspense } from "react";
import { Categories } from "@/components/purchases/categories";
import { Header } from "@/components/purchases/header";
import { Items } from "@/components/purchases/items";
import { ItemsPagination } from "@/components/purchases/items/items-pagination";

export const metadata: Metadata = {
  title: "Purchases",
  description: "Purchases",
};

export default function Page() {
  return (
    <>
      <Suspense>
        <Header />
        <Categories />
        <Items />
        <ItemsPagination />
      </Suspense>
    </>
  );
}
