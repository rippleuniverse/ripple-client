"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components/common/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/common/sheet";
import { useAuth } from "@/hooks/auth";
import { NAV_LINKS } from "@/lib/auth";

export const NavLinks = () => {
  return (
    <div className={"hidden xl:flex items-center space-x-6"}>
      {NAV_LINKS.map((link, index) => (
        <Link
          key={index}
          target={link.blank ? "_blank" : ""}
          href={link.link}
          className={"text-[#F5F3F0B2]"}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export const NavLinksSM: FC = () => {
  const { user } = useAuth();

  return (
    <div className={"block xl:hidden"}>
      <Sheet>
        <SheetTrigger asChild>
          <Button className={"text-white relative z-10"}>
            <Menu className={"size-5"} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader></SheetHeader>
          <div className={"space-y-5 p-8"}>
            <ul className={"space-y-4"}>
              {NAV_LINKS.map((link, index) => (
                <li key={index}>
                  <Link
                    target={link.blank ? "_blank" : ""}
                    href={link.link}
                    className={"w-full block text-lg"}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className={"space-y-4"}>
              {user.data ? (
                <li>
                  <Button asChild variant={"outline"}>
                    <Link href={"/"}>Dashboard</Link>
                  </Button>
                </li>
              ) : (
                <li>
                  <Button asChild variant={"outline"}>
                    <Link href={"/signin"}>Sign in</Link>
                  </Button>
                </li>
              )}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
