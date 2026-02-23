"use client";

import { FC } from "react";
import { Button } from "@/components/common/button";

export const Categories: FC = () => {
  return (
    <div className={"flex flex-wrap gap-2"}>
      <Button
        className={"bg-secondary text-white font-bold"}
        variant={"secondary"}
      >
        All Items
      </Button>
      <Button
        className={"text-gray-500 border-[0.1rem] border-gray-200 font-bold"}
        variant={"secondary"}
      >
        Events
      </Button>
      <Button
        className={"text-gray-500 border-[0.1rem] border-gray-200 font-bold"}
        variant={"secondary"}
      >
        Programs
      </Button>
      <Button
        className={"text-gray-500 border-[0.1rem] border-gray-200 font-bold"}
        variant={"secondary"}
      >
        Shop
      </Button>
      <Button
        className={"text-gray-500 border-[0.1rem] border-gray-200 font-bold"}
        variant={"secondary"}
      >
        Blog
      </Button>
      <Button
        className={"text-gray-500 border-[0.1rem] border-gray-200 font-bold"}
        variant={"secondary"}
      >
        Podcast
      </Button>
    </div>
  );
};
