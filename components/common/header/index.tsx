"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { NavLinks, NavLinksSM } from "@/components/common/header/nav-links";
import { useAuth } from "@/hooks/auth";
import { env } from "@/lib/env";
import { CurrencySwitch } from "./currency-switch";

export const Header: FC = () => {
  return (
    <header>
      <nav className={"flex items-center justify-between"}>
        <div className="flex space-x-12 items-center">
          <NavLogo />
          <NavLinks />
        </div>
        <div className="flex md:space-x-6">
          <AuthActions />
          <CurrencySwitch />
          <NavLinksSM />
        </div>
      </nav>
    </header>
  );
};

export const AuthActions: FC = () => {
  const { user } = useAuth();

  return (
    <div className={"hidden xl:flex items-center space-x-6 "}>
      {user.data ? (
        <Button asChild variant={"secondary"}>
          <Link href={"/dashboard"}>Dashboard</Link>
        </Button>
      ) : (
        <Button asChild variant={"secondary"}>
          <Link href={"/signin"}>Sign in</Link>
        </Button>
      )}
    </div>
  );
};

export const NavLogo: FC = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/images/logo.png"}
        unoptimized
        className={"w-16 md:w-24"}
        alt={env.app.name ?? "Logo"}
        width={112}
        height={40}
      />
    </Link>
  );
};
