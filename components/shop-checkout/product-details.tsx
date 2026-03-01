"use client";

import Image from "next/image";
import { FC } from "react";
import { useProduct } from "@/hooks/shop";

export const ProductDetails: FC = () => {
  const product = useProduct();
  return (
    <div className={"lg:w-4/12 border border-gray-200 rounded-2xl p-4"}>
      <div className="flex justify-center">
        <Image
          src={"/images/shop/product-1.jpg"}
          alt={"Product 1"}
          width={200}
          height={200}
          className={"size-36 object-cover"}
        />
      </div>
    </div>
  );
};
