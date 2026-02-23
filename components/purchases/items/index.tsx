import { Download, Ticket } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { madeSoulmaze } from "@/lib/fonts";

export const Items: FC = () => {
  return (
    <div className={"space-y-2"}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export const Item: FC = () => {
  return (
    <div className="bg-white border-[0.1rem] border-gray-100 rounded-2xl p-4 flex gap-3 items-center justify-between">
      <div className="flex items-center space-x-4">
        <Image
          src={"/images/purchases/item.jpg"}
          alt={"Item"}
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
            <span>Digital Event</span>
          </p>
          <h2
            className={`${madeSoulmaze.className} line-clamp-1 text-sm md:text-base`}
          >
            Creative Tech Lab 2024 - Global Summit
          </h2>
          <p className={"text-gray-500 text-xs md:text-sm lg:text-base"}>
            Purchased on Jan 10, 2024
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <h3 className={"text-[#CCFF00] font-bold text-sm lg:text-lg"}>
          $45.00
        </h3>
        <Button
          size={"lg"}
          className={"border-[0.1rem] border-gray-200 font-bold"}
          variant={"secondary"}
        >
          <span>
            <Download />
          </span>
          <span className={"hidden md:inline"}>Download</span>
        </Button>
        <Button
          size={"lg"}
          className={"border-[0.1rem] border-gray-200 font-bold"}
          variant={"secondary"}
        >
          <Ticket />
        </Button>
      </div>
    </div>
  );
};
