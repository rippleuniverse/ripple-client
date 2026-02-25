import { Circle } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components/common/button";

export const LoginHistory: FC = () => {
  return (
    <div className={"border border-gray-200 rounded-2xl p-6 space-y-6"}>
      <h3 className={"text-sm text-gray-500 font-bold"}>LOGIN HISTORY</h3>
      <div className="flex gap-2">
        <div className="space-y-12">
          <Circle className={"fill-green-200 stroke-none size-2.5"} />
          <Circle className={"fill-gray-300 stroke-none size-2.5"} />
          <Circle className={"fill-red-500 stroke-none size-2.5"} />
        </div>
        <div className={"h-39 w-0.5 bg-gray-200"}></div>
        <div className="space-y-4">
          <div className={"-space-y-1"}>
            <p className="font-bold text-sm">Successful Login</p>
            <small className="text-xs text-gray-500">Today, 10:23 AM</small>
          </div>
          <div className={"-space-y-1"}>
            <p className="font-bold text-sm">Password Changed</p>
            <small className="text-xs text-gray-500">Today, 10:23 AM</small>
          </div>
          <div className={"-space-y-1"}>
            <p className="font-bold text-sm">Failed Attempt</p>
            <small className="text-xs text-gray-500">Today, 10:23 AM</small>
          </div>
        </div>
      </div>
      <Button
        variant={"ghost"}
        asChild
        className={"w-full text-xs text-secondary-light font-bold"}
      >
        <Link href={"/"}>VIEW FULL LOG</Link>
      </Button>
    </div>
  );
};
