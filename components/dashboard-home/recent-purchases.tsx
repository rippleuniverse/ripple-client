import { ArrowRight, Ticket } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { ArrowDownload } from "@/components/common/icons/arrow-download";
import { Compass } from "@/components/common/icons/compass";
import { madeSoulmaze, plusJarkataSans } from "@/lib/fonts";

export const RecentPurchases: FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="bg-white px-6 py-4 rounded-3xl border-[0.1rem] border-gray-200 md:w-8/12 space-y-8">
        <h2
          className={`${madeSoulmaze.className} text-xl  md:text-2xl md:w-1/2`}
        >
          Recent Purchases & Rewards
        </h2>
        <div className={"space-y-10"}>
          <Item />
          <Item />
          <Item />
        </div>
      </div>
      <div className="bg-black p-5 rounded-3xl md:w-4/12 space-y-6">
        <div className={""}>
          <div className="p-3 bg-secondary-light w-max rounded-full">
            <Compass className={"text-white"} size={20} />
          </div>
        </div>
        <h2
          className={`${madeSoulmaze.className} text-white text-xl md:text-2xl`}
        >
          Discover the Next Frontier
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          New programs in Quantum Computing and Spatial Design just launched.
          Explore what&apos;s new in the Universe.
        </p>
        <Button
          asChild
          size={"xl"}
          className={`w-full bg-white text-black font-bold ${plusJarkataSans.className}`}
        >
          <Link href={"/"}>
            <span>Explore Programs</span>
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </div>
  );
};

const Item: FC = () => {
  return (
    <div className={"flex justify-between items-center"}>
      <div className={"space-x-4 flex items-center"}>
        <div className={"bg-[#FF00FF1A] p-3 rounded-full"}>
          <Ticket className={"size-5 text-[#FF00FF]"} />
        </div>
        <div>
          <p className="font-bold text-sm md:text-base">
            Creative Tech Lab 2024 Ticket
          </p>
          <p className="text-gray-500 text-xs">Digital Event • Jan 10, 2024</p>
        </div>
      </div>
      <div>
        <Button
          className={"text-gray-400 hover:text-secondary"}
          variant={"ghost"}
        >
          <ArrowDownload />
        </Button>
      </div>
    </div>
  );
};
