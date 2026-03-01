"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { cn } from "@/lib/utils";

const categories = [
  {
    name: "All Items",
    category: null,
  },
  {
    name: "Shop",
    category: "shop",
  },
  {
    name: "Event",
    category: "event",
  },
  {
    name: "Program",
    category: "program",
  },
];

export const Categories: FC = () => {
  const searchParams = useSearchParams();
  const productType = searchParams.get("product_type");

  return (
    <div className={"flex flex-wrap gap-2"}>
      {categories.map((category) => (
        <Button
          key={category.category}
          className={cn(
            "font-bold",
            productType === category.category
              ? "bg-secondary text-white"
              : "text-gray-500 border-[0.1rem] border-gray-200",
          )}
          variant={"secondary"}
          asChild
        >
          <Link
            href={
              category.category ? `?product_type=${category.category}` : "?"
            }
          >
            {category.name}
          </Link>
        </Button>
      ))}
    </div>
  );
};
