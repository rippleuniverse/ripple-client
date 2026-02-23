import Image from "next/image";
import { FC } from "react";
import { Bell } from "@/components/common/icons/bell";
import { madeSoulmaze } from "@/lib/fonts";

export const DashboardHeader: FC = () => {
  return (
    <div className={"flex flex-col-reverse md:flex-row justify-between gap-4"}>
      <div className={"space-y-1"}>
        <h1
          className={`${madeSoulmaze.className} text-xl md:text-3xl lg:text-4xl`}
        >
          Welcome back, <span className="text-[#FF00FF]">Alex!</span>
        </h1>
        <p className={"text-gray-500 text-xs md:text-sm lg:text-base"}>
          You&apos;re making great progress. Ready to dive back in?
        </p>
      </div>
      <div className={"flex flex-row-reverse lg:flex-row items-center gap-3"}>
        <div className={"bg-white p-3 rounded-full border-2 border-[#E2E8F0]"}>
          <Bell className={"text-[#64748B] stroke-none"} />
        </div>
        <div className={"w-[0.1rem] h-8 bg-[#E2E8F0]"}></div>

        <div className={"flex items-center space-x-2"}>
          <div className={"text-xs"}>
            <p className="font-bold">Alex Rivera</p>
            <p className="text-secondary font-semibold">PRO member</p>
          </div>
          <Image
            src={"/images/blogs/avatar.png"}
            alt={"Avatar"}
            width={40}
            height={40}
            className={"size-12 rounded-full border-3 border-secondary"}
          />
        </div>
      </div>
    </div>
  );
};
