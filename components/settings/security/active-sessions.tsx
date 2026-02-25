import { TabletSmartphone } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

export const ActiveSessions: FC = () => {
  return (
    <div className={"border border-gray-200 rounded-2xl p-6 space-y-6"}>
      <div className={"flex justify-between space-x-2 items-center"}>
        <div>
          <h1 className={"font-semibold text-base md:text-xl"}>
            Active Sessions
          </h1>
          <p className={"text-xs text-gray-500"}>
            Manage devices where you&apos;re currently logged in.
          </p>
        </div>
        <Link
          className={"font-bold text-xs md:text-sm text-gray-400"}
          href={"/"}
        >
          Log out all devices
        </Link>
      </div>
      <div className="space-y-4">
        <div className="rounded-4xl p-3 md:p-4 flex items-center space-x-4  border border-gray-200">
          <div className="p-2 md:p-4 rounded-full bg-gray-50 text-gray-500">
            <TabletSmartphone className={"size-4 md:size-6"} />
          </div>
          <div className={"-space-y-1"}>
            <p className={"text-xs md:text-sm font-bold"}>Phone</p>
            <small className={"text-xs text-gray-500"}>
              San Francisco, US • Chrome • Just now
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
