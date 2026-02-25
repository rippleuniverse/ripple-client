"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";
import { cn } from "@/lib/utils";

const SIDEBAR_LINKS = [
  {
    name: "General",
    link: "/dashboard/settings",
  },
  {
    name: "Account Details",
    link: "/dashboard/settings/account-details",
  },
  {
    name: "Notifications",
    link: "/dashboard/settings/notifications",
  },
  {
    name: "Security",
    link: "/dashboard/settings/security",
  },
  {
    name: "Billing",
    link: "/dashboard/settings/billing",
  },
];

export const SidebarLinks: FC = () => {
  const pathname = usePathname();

  return (
    <div
      className={
        "space-y-4 border-b xl:border-r border-gray-200 p-4 xl:w-[20%]"
      }
    >
      <ul className={"space-y-7"}>
        {SIDEBAR_LINKS.map((link) => (
          <Link
            role={"listitem"}
            key={link.link}
            className={cn(
              "block font-bold hover:bg-secondary-light px-4 py-3 rounded-full",
              link.link === pathname ? "bg-secondary-light" : null,
            )}
            href={link.link}
          >
            {link.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};
