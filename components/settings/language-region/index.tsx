"use client";

import { Globe } from "lucide-react";
import { FC } from "react";
import { Input } from "@/components/common/form/input";
import { Label } from "@/components/common/form/label";
import { DigitalPass } from "@/components/dashboard-home/digital-pass";
import { Heading } from "@/components/settings/heading";

export const LanguageRegion: FC = () => {
  return (
    <>
      <Heading>General</Heading>
      <div className="border border-gray-200 rounded-2xl p-7 space-y-8">
        <div className="flex items-center gap-4">
          <div className="p-4 rounded-full bg-gray-50 text-secondary-light">
            <Globe />
          </div>
          <div>
            <h5 className={"text-base md:text-lg font-semibold"}>
              Language & Region
            </h5>
            <p className={"text-xs md:text-sm text-gray-600"}>
              Customize your language preferences and regional formats.
            </p>
          </div>
        </div>
        <div className={"space-y-2"}>
          <Label className={"text-gray-400 font-bold text-xs"}>
            INTERFACE LANGUAGE
          </Label>
          <Input
            value={"English (United States)"}
            disabled
            className={"w-full rounded-full py-5 text-sm"}
          />
        </div>
        <DigitalPass />
      </div>
    </>
  );
};
