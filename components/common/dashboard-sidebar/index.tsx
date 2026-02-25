"use client";

import { LogOut, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { Gear } from "@/components/common/icons/gear";
import { Grid } from "@/components/common/icons/grid";
import { Search } from "@/components/common/icons/search";
import { Star } from "@/components/common/icons/star";
import { Sheet, SheetContent, SheetTrigger } from "@/components/common/sheet";
import { Breakpoints } from "@/enums/breakpoints";
import useMediaQuery from "@/hooks/common/media-query";
import { env } from "@/lib/env";

export const DashboardSidebar: FC = () => {
  const isDesktop = useMediaQuery(Breakpoints.extraLarge);

  return (
    <>
      {!isDesktop ? (
        <Sheet>
          <SheetTrigger
            className={"fixed left-0 shadow-lg top-2 z-10 bg-secondary"}
            asChild
          >
            <Button>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className={"bg-black pl-7 py-7 space-y-4"}>
            <div className={"space-y-8"}>
              <div>
                <Link href={"/"}>
                  <Image
                    src={"/images/logo.png"}
                    unoptimized
                    className={"w-20"}
                    alt={env.app.name ?? "Logo"}
                    width={112}
                    height={40}
                  />
                </Link>
              </div>
              <div className={"space-y-3"}>
                <SheetTrigger asChild>
                  <Link
                    href={"/dashboard"}
                    className={
                      "flex items-center space-x-3 text-lg py-3 px-4 rounded-l-full bg-white text-secondary"
                    }
                  >
                    <Grid className={"size-5"} />
                    <span>Dashboard</span>
                  </Link>
                </SheetTrigger>
                <SheetTrigger asChild>
                  <Link
                    href={"/dashboard/purchases"}
                    className={
                      "flex items-center text-[#8E8E8E] fill-[#8E8E8E] space-x-3 text-lg py-3 px-4 rounded-l-full hover:bg-white hover:text-secondary"
                    }
                  >
                    <Star className={"size-5"} />
                    <span>Purchases</span>
                  </Link>
                </SheetTrigger>
                <SheetTrigger asChild>
                  <Link
                    href={"/dashboard/settings"}
                    className={
                      "flex items-center text-[#8E8E8E] fill-[#8E8E8E] space-x-3 text-lg py-3 px-4 rounded-l-full hover:bg-white hover:text-secondary"
                    }
                  >
                    <Gear className={"size-5"} />
                    <span>Settings</span>
                  </Link>
                </SheetTrigger>
              </div>
            </div>
            <div>
              <Link
                href={"/"}
                className={
                  "flex items-center text-[#8E8E8E] fill-[#8E8E8E] space-x-3 text-lg py-3 px-4 rounded-l-full hover:bg-white hover:text-secondary"
                }
              >
                <LogOut className={"size-5"} />
                <span>Logout</span>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <aside
          className={
            " bg-black w-2/12 pl-7 py-7 rounded-2xl lg:flex flex-col justify-between h-screen"
          }
        >
          <div className={"space-y-4"}>
            <div>
              <Link href={"/"}>
                <Image
                  src={"/images/logo.png"}
                  unoptimized
                  className={"w-16 md:w-36"}
                  alt={env.app.name ?? "Logo"}
                  width={112}
                  height={40}
                />
              </Link>
            </div>
            <div className={"space-y-3"}>
              <Link
                href={"/"}
                className={
                  "flex items-center space-x-3 text-lg py-3 px-4 rounded-l-full bg-white text-secondary"
                }
              >
                <Grid className={"size-5"} />
                <span>Dashboard</span>
              </Link>
              {/*<Link*/}
              {/*  href={"/"}*/}
              {/*  className={*/}
              {/*    "flex items-center text-[#8E8E8E] fill-[#8E8E8E] space-x-3 text-lg py-3 px-4 rounded-l-full hover:bg-white hover:fill-secondary hover:text-secondary"*/}
              {/*  }*/}
              {/*>*/}
              {/*  <Search className={"size-5"} />*/}
              {/*  <span>Explore</span>*/}
              {/*</Link>*/}
              <Link
                href={"/dashboard/purchases"}
                className={
                  "flex items-center text-[#8E8E8E] fill-[#8E8E8E] space-x-3 text-lg py-3 px-4 rounded-l-full hover:bg-white hover:text-secondary"
                }
              >
                <Star className={"size-5"} />
                <span>Purchases</span>
              </Link>
              <Link
                href={"/dashboard/settings"}
                className={
                  "flex items-center text-[#8E8E8E] fill-[#8E8E8E] space-x-3 text-lg py-3 px-4 rounded-l-full hover:bg-white hover:text-secondary"
                }
              >
                <Gear className={"size-5"} />
                <span>Settings</span>
              </Link>
            </div>
          </div>
          <div>
            <Link
              href={"/"}
              className={
                "flex items-center text-[#8E8E8E] fill-[#8E8E8E] space-x-3 text-lg py-3 px-4 rounded-l-full hover:bg-white hover:text-secondary"
              }
            >
              <LogOut className={"size-5"} />
              <span>Logout</span>
            </Link>
          </div>
        </aside>
      )}
    </>
  );
};
