"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Badge } from "@/components/common/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/common/carousel";
import { Pagination } from "@/components/common/pagination";
import { CategoryWithProduct } from "@/helpers/shop";
import { useCategoriesWithProducts } from "@/hooks/shop";
import { manRope } from "@/lib/fonts";

export const CategoriesList: FC = () => {
  const categories = useCategoriesWithProducts();

  return (
    <div className={"space-y-6"}>
      {categories.data?.data.map((category) => (
        <Category category={category} key={category.id} />
      ))}
      {categories.data && <Pagination {...categories.data.meta} />}
    </div>
  );
};

const Category: FC<{ category: CategoryWithProduct }> = ({ category }) => {
  return (
    <div
      className={
        "border-2 border-[#F2F2F2] rounded-lg px-7 py-4 flex flex-col lg:flex-row gap-6"
      }
    >
      <div className={`lg:w-4/12 xl:w-3/12 space-y-4 ${manRope.className}`}>
        <div>
          <Badge className={"bg-[#F5FAEF] text-green-600"}>Ripple</Badge>
        </div>
        <h3
          className={
            "font-semibold text-xl md:text-2xl lg:text-3xl line-clamp-2"
          }
        >
          {category.name}
        </h3>
        <p className="text-xs md:text-sm text-[#4E4E4E] line-clamp-4">
          {category.description}
        </p>
        <Link
          href={`/shop/products?category_id=${category.id}`}
          className={"block text-green-600 text-xs md:text-sm"}
        >
          See all
        </Link>
      </div>

      <div className="hidden lg:w-8/12 xl:w-9/12 lg:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        {category.products.map((product) => (
          <div
            key={product.id}
            className={`${category.products.length < 3 ? "" : "last:hidden last:xl:block"}  w-full h-78 border-4 border-[#F2F2F2] rounded-3xl`}
          >
            <Link
              href={`/shop/products/${product.id}`}
              className={"block size-full"}
            >
              <Image
                src={product.featured_image}
                className={"size-full object-cover rounded-3xl"}
                alt={product.title}
                width={208}
                height={270}
              />
            </Link>
          </div>
        ))}
      </div>

      <div className={"block lg:hidden"}>
        <Carousel className={"mx-auto"}>
          <CarouselContent>
            {category.products.map((product) => (
              <CarouselItem
                key={product.id}
                className={"max-w-56 h-64  rounded-3xl"}
              >
                <Link
                  href={`/shop/products/${product.id}`}
                  className={"block size-full"}
                >
                  <Image
                    src={product.featured_image}
                    className={
                      "size-full object-cover border-4 border-[#F2F2F2] rounded-3xl"
                    }
                    alt={product.title}
                    width={208}
                    height={270}
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
