"use client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { Badge } from "@/components/common/badge";
import { statusVariants } from "@/helpers/invoice";
import { usePurchasedItem } from "@/hooks/invoice";
import { madeSoulmaze } from "@/lib/fonts";

export const PurchaseDetails: FC = () => {
  const details = usePurchasedItem();

  if (!details.data) return null;

  return (
    <div className={"bg-white p-5 rounded-2xl space-y-8"}>
      <Link
        href={"/dashboard/purchases"}
        className={"flex items-center space-x-2 text-xs md:text-sm"}
      >
        <ArrowLeft className={"size-4"} />
        <span>Back</span>
      </Link>
      <h2 className={`${madeSoulmaze.className}`}>Purchase details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Details title={"Product"}>
          <div className="flex items-center gap-4">
            <Image
              src={details.data.item.featured_image}
              alt={details.data.item.name}
              width={200}
              height={200}
              className={"size-16 rounded-lg"}
            />
            <p className={"text-xs md:text-sm"}>{details.data.item.name}</p>
          </div>
        </Details>
        <Details title={"Purchased on"}>
          {details.data.invoice.created_at}
        </Details>
        <Details title={"Unit price"}>{details.data.unit_price}</Details>
        <Details title={"Quantity"}>{details.data.quantity}</Details>
        <Details title={"Status"}>
          <Badge variant={statusVariants[details.data.invoice.status]}>
            <span className={"capitalize"}>
              {details.data.invoice.status.replaceAll("_", " ")}
            </span>
          </Badge>
        </Details>
        {details.data.invoice.status === "pending" && (
          <Details title={"Payment url"}>
            <Link
              target={"_blank"}
              className={"underline"}
              href={details.data.invoice.payment_url ?? ""}
            >
              Continue payment
            </Link>
          </Details>
        )}
      </div>
    </div>
  );
};

export const Details: FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({ title, children }) => {
  return (
    <div className="space-y-2">
      <h3 className={"font-semibold text-sm"}>{title}</h3>
      {children}
    </div>
  );
};
