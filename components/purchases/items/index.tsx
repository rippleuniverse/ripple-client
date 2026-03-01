"use client";

import { ChevronRight, Download, Ticket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { Button } from "@/components/common/button";
import { PurchaseItem } from "@/helpers/invoice";
import { usePurchasedItems } from "@/hooks/invoice";
import { madeSoulmaze } from "@/lib/fonts";

export const Items: FC = () => {
  const items = usePurchasedItems();

  return (
    <div className={"space-y-2"}>
      {items.data?.data.map((item) => (
        <Item item={item} key={item.id}>
          {item.product_type === "shop" && (
            <>
              <Button
                size={"lg"}
                className={"border-[0.1rem] border-gray-200 font-bold"}
                variant={"secondary"}
                asChild
              >
                <Link href={`/dashboard/purchases/shop/${item.id}`}>
                  <span className={"hidden md:inline"}>View</span>
                  <span>
                    <ChevronRight />
                  </span>
                </Link>
              </Button>
            </>
          )}
          {/*<Button*/}
          {/*  size={"lg"}*/}
          {/*  className={"border-[0.1rem] border-gray-200 font-bold"}*/}
          {/*  variant={"secondary"}*/}
          {/*>*/}
          {/*  <span>*/}
          {/*    <Download />*/}
          {/*  </span>*/}
          {/*  <span className={"hidden md:inline"}>Download</span>*/}
          {/*</Button>*/}
          {/*<Button*/}
          {/*  size={"lg"}*/}
          {/*  className={"border-[0.1rem] border-gray-200 font-bold"}*/}
          {/*  variant={"secondary"}*/}
          {/*>*/}
          {/*  <Ticket />*/}
          {/*</Button>*/}
        </Item>
      ))}
    </div>
  );
};

export const Item: FC<
  PropsWithChildren<{
    item: PurchaseItem;
  }>
> = ({ item, children }) => {
  return (
    <div className="bg-white border-[0.1rem] border-gray-100 rounded-2xl p-4 flex gap-3 items-center justify-between">
      <div className="flex items-center space-x-4">
        <Image
          src={item.item.featured_image}
          alt={item.item.name}
          width={80}
          height={80}
          className={
            "size-13 md:size-24 rounded-2xl md:rounded-4xl object-cover"
          }
        />
        <div>
          <p
            className={
              "flex items-center font-bold text-[0.7rem] space-x-1 text-gray-500"
            }
          >
            <span className={"text-green-300 text-xl"}>•</span>
            <span>
              {item.product_type === "shop"
                ? "Physical product"
                : "Digital product"}
            </span>
          </p>
          <h2
            className={`${madeSoulmaze.className} line-clamp-1 text-sm md:text-base`}
          >
            {item.item.name}
          </h2>
          <p className={"text-gray-500 text-xs md:text-sm lg:text-base"}>
            Purchased on {item.invoice.created_at}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <h3 className={"text-[#CCFF00] font-bold text-sm lg:text-lg"}>
          {item.total}
        </h3>
        {children}
      </div>
    </div>
  );
};
