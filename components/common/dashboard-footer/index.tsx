"use client";

import Link from "next/link";
import { FC } from "react";
import { plusJarkataSans } from "@/lib/fonts";

export const DashboardFooter: FC = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex gap-4 flex-col md:flex-row justify-between text-gray-400 text-xs md:text-sm">
      <div>
        <p>&copy; {year} Ripple Universe. All rights reserved.</p>
      </div>
      <div className={`flex gap-5 ${plusJarkataSans.className}`}>
        <Link href={"/"}>Privacy Policy</Link>
        <Link href={"/"}>Terms of Service</Link>
        <Link href={"/"}>Support</Link>
      </div>
    </div>
  );
};
