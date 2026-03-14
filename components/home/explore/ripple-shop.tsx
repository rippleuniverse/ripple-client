import { Book, Image, Shirt } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { madeSoulmaze } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const RippleShop: FC<{ className?: string }> = ({ className }) => {
  const c = cn(
    "bg-[#FFEEE9] rounded-xl p-8 w-full  xl:w-3/12 space-y-6 flex flex-col justify-between",
    className,
  );

  return (
    <div className={c}>
      <div className="space-y-4">
        <h2
          className={`${madeSoulmaze.className} text-lg md:text-xl lg:text-2xl xl:text-[1.5rem] uppercase`}
        >
          Ripple <br /> <span className="text-secondary">shop</span>
        </h2>
        <p className={"text-sm md:text-base"}>
          Purchase digital products, and resource created and curated by Ripple.
        </p>
        <div>
          <Button variant={"outline"} asChild>
            <Link href={"/shop"}>Explore all resources</Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-flow-row gap-4 ">
        <div className="bg-white p-3 text-center rounded-2xl col-span-6">
          <p className={"flex justify-center"}>
            <Book className={"size-8 stroke-1"} />
          </p>
          <p className={"font-semibold text-xs lg:text-sm xl:text-base"}>
            Books
          </p>
        </div>
        <div className="bg-white p-3 text-center rounded-2xl col-span-6">
          <p className={"flex justify-center"}>
            <Shirt className={"size-8 stroke-1"} />
          </p>
          <p className={"font-semibold text-xs lg:text-sm xl:text-base"}>
            Merch
          </p>
        </div>
        <div className="bg-white p-3 text-center rounded-2xl col-span-12">
          <p className={"flex justify-center"}>
            <Image className={"size-8 stroke-1"} />
          </p>
          <p className={"font-semibold text-xs lg:text-sm xl:text-base"}>
            Tool kits & Templates
          </p>
        </div>
      </div>
    </div>
  );
};
