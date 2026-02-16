"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/common/breadcrumb";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { usePrice } from "@/hooks/common/currency";
import { useLocalStorage } from "@/hooks/common/local-storage";
import { useProduct } from "@/hooks/shop";
import { madeSoulmaze } from "@/lib/fonts";
import { currencyFormatter } from "@/lib/utils";
import { Currency } from "@/types/common";

export const ProductHero: FC = () => {
  const product = useProduct();
  const price = usePrice(product.data?.price);

  return (
    <section>
      <Container
        className={
          "max-w-md lg:max-w-7xl flex flex-col lg:flex-row items-center justify-between pb-16 gap-8"
        }
      >
        <div className={"w-full lg:w-1/2 space-y-6 lg:space-y-8 xl:space-y-9"}>
          <Breadcrumb>
            <BreadcrumbList className={"space-x-4"}>
              <BreadcrumbItem>
                <span
                  className={
                    "hidden lg:inline border-white border-[0.1rem] text-white text-xs md:text-sm lg:text-base rounded-full px-4 py-2"
                  }
                >
                  Ripple Shop
                </span>
              </BreadcrumbItem>
              <BreadcrumbItem className={"text-white/50"}>
                <BreadcrumbLink
                  className={"text-white/50 hover:text-white-40"}
                  href={`/shop/products?category_id=${product.data?.category.id}`}
                >
                  {product.data?.category.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className={"text-white"} />
              <BreadcrumbItem className={"text-white"}>
                {product.data?.title}
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="space-y-4">
            <h1
              className={`text-center lg:text-left text-white ${madeSoulmaze.className} text-2xl md:text-4xl lg:text-4xl xl:text-[3.43rem] leading-7 md:leading-10 lg:leading-12`}
            >
              {product.data?.title}
            </h1>
            <h2
              className={`text-center lg:text-left text-[#FFF8C6] ${madeSoulmaze.className} text-2xl md:text-4xl lg:text-4xl xl:text-[3.43rem] leading-7 md:leading-10 lg:leading-12`}
            >
              {price
                ? currencyFormatter(price.currency, price.amount)
                : "Price not available"}
            </h2>
          </div>
          <p
            className={
              "text-[#F5F3F0B2] text-xs md:text-sm xl:text-base text-center lg:text-left"
            }
          >
            {product.data?.description}
          </p>
          <div className={"flex justify-center lg:justify-start"}>
            <Button asChild size={"lg"} variant={"secondary"}>
              <Link href={"#scroll-apply"}>Buy now</Link>
            </Button>
          </div>
        </div>
        <div className={"w-full lg:w-1/2 flex justify-center"}>
          <div className={"w-62 h-76 md:w-82 md:h-96 relative"}>
            <Image
              src={"/images/jobs/hero-2.png"}
              alt={"Hero 2"}
              width={185}
              height={195}
              className={
                "hidden lg:block w-24 xl:w-36 absolute -left-20 xl:-left-30 -rotate-90 top-1/2"
              }
            />
            <Image
              src={"/images/jobs/hero-2.png"}
              alt={"Hero 2"}
              width={185}
              height={195}
              className={
                "hidden lg:block w-24 xl:w-36 absolute -right-20 xl:-right-30 rotate-90 top-1/4"
              }
            />
            {product.data && (
              <Image
                src={product.data.featured_image}
                alt={product.data.title}
                width={350}
                height={500}
                className={
                  "relative z-10 size-full object-cover rounded-3xl border-4 border-[#F2F2F233]"
                }
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
