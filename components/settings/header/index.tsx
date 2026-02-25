"use client";

import { FC } from "react";
import { Search } from "@/components/common/search";
import { madeSoulmaze } from "@/lib/fonts";

export const Header: FC = () => {
  return (
    <div className={"bg-black rounded-xl p-5 space-y-3"}>
      <div className="flex space-x-3">
        <span
          className={
            "bg-secondary/20 rounded-xl px-4 py-1 text-secondary text-xs font-bold"
          }
        >
          Preferences
        </span>
        <span className="text-gray-500 text-xs md:text-sm">
          • Manage your experience
        </span>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
        <h1
          className={`text-white ${madeSoulmaze.className} text-xl md:text-2xl lg:text-3xl`}
        >
          Account settings
        </h1>
      </div>
    </div>
  );
};
