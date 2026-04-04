"use client";

import Link from "next/link";
import { FC } from "react";

export const Copyright: FC = () => {
  const year = new Date().getFullYear();
  return (
    <div
      className={
        "flex flex-col md:flex-row justify-between space-y-3 md:space-y-0"
      }
    >
      <p className={"text-xs md:text-sm text-white"}>
        {year}&copy; Ripple. All rights reserved.
      </p>
      <div className="flex gap-4 text-white">
        <Link className={"text-xs md:text-sm"} href={"/terms-of-use"}>
          Terms of Service
        </Link>
      </div>
    </div>
  );
};
