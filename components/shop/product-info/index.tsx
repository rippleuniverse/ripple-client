"use client";
import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import {
  InfoBlock,
  InfoList,
  InfoListItem,
  InfoSeparator,
} from "@/components/jobs/job-info";
import { usePrice } from "@/hooks/common/currency";
import { useProduct } from "@/hooks/shop";
import { creatoDisplay, manRope } from "@/lib/fonts";
import { currencyFormatter } from "@/lib/utils";

export const ProductInfo: FC = () => {
  const product = useProduct();
  const price = usePrice(product.data?.price);

  return (
    <section className={"bg-white"}>
      <Container className={"max-w-md lg:max-w-7xl py-8 gap-8"}>
        <InfoBlock title={"About This Product"}>
          <p>{product.data?.about}</p>
        </InfoBlock>
        <InfoSeparator />
        <InfoBlock title={"What You'll Get"}>
          <InfoList>
            {product.data?.benefits.map((item, index) => (
              <InfoListItem key={index}>{item}</InfoListItem>
            ))}
          </InfoList>
        </InfoBlock>
        <InfoSeparator />
        <InfoBlock title={"Who This Is For"}>
          <InfoList>
            {product.data?.target_users.map((item, index) => (
              <InfoListItem key={index}>{item}</InfoListItem>
            ))}
          </InfoList>
        </InfoBlock>
        <InfoSeparator />
        <InfoBlock title={"How to Use This Product"}>
          <p>{product.data?.how_to_use}</p>
        </InfoBlock>
        <InfoSeparator />
        <InfoBlock title={"Access & Delivery"}>
          <InfoList>
            {product.data?.access_delivery.map((item, index) => (
              <InfoListItem key={index}>{item}</InfoListItem>
            ))}
          </InfoList>
        </InfoBlock>
      </Container>
      <div className={"bg-black  rounded-b-3xl"}>
        <Container
          className={
            "max-w-md lg:max-w-7xl flex gap-4 items-center justify-between py-3"
          }
        >
          <div className="flex items-center space-x-3 md:space-x-5">
            <h3
              className={`${creatoDisplay.className} text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white`}
            >
              {price
                ? currencyFormatter(price.currency, price.amount)
                : "Price not available"}
            </h3>
            <Button className={"bg-white text-black"} asChild>
              <Link href={`/shop/products/${product.data?.id}/checkout`}>
                Buy now
              </Link>
            </Button>
          </div>
          <p
            className={`text-[#A9A9A9] ${manRope.className} font-medium text-xs md:text-xl`}
          >
            Secure checkout. Instant access for digital products.
          </p>
        </Container>
      </div>
    </section>
  );
};
