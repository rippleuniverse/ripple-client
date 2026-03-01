"use client";

import { FC } from "react";
import { Pagination } from "@/components/common/pagination";
import { usePurchasedItems } from "@/hooks/invoice";

export const ItemsPagination: FC = () => {
  const items = usePurchasedItems();

  if (!items.data) return null;

  return <Pagination {...items.data.meta} />;
};
