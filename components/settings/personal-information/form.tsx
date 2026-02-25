"use client";

import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { Input } from "@/components/common/form/input";
import { Label } from "@/components/common/form/label";
import { Textarea } from "@/components/common/form/textarea";

export const PersonalInformationForm: FC = () => {
  return (
    <form className={"space-y-7"}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className={"space-y-2"}>
          <Label className={"font-bold text-gray-400 uppercase text-xs"}>
            First Name
          </Label>
          <Input className={"border-gray-200 rounded-full py-5 w-full"} />
        </div>
        <div className={"space-y-2"}>
          <Label className={"font-bold text-gray-400 uppercase text-xs"}>
            Last Name
          </Label>
          <Input className={"border-gray-200 rounded-full py-5 w-full"} />
        </div>
        <div className={"space-y-2"}>
          <Label className={"font-bold text-gray-400 uppercase text-xs"}>
            email address
          </Label>
          <Input
            type={"email"}
            className={"border-gray-200 rounded-full py-5 w-full"}
          />
        </div>
        <div className={"space-y-2"}>
          <Label className={"font-bold text-gray-400 uppercase text-xs"}>
            Phone number
          </Label>
          <Input
            type={"tel"}
            className={"border-gray-200 rounded-full py-5 w-full"}
          />
        </div>
      </div>
      <div className={"space-y-2"}>
        <Label className={"font-bold text-gray-400 uppercase text-xs"}>
          First Name
        </Label>
        <Textarea
          className={"border-gray-200 rounded-3xl py-5 w-full min-h-44"}
        />
      </div>
      <div className="flex justify-end space-x-2 xl:space-x-4">
        <Button
          asChild
          size={"xl"}
          className={"font-bold border-gray-200"}
          variant={"outline"}
        >
          <Link href={"/dashboard/settings"}>Cancel</Link>
        </Button>
        <Button
          size={"xl"}
          className={"font-bold border-gray-200 bg-secondary-light"}
        >
          Save Changes
        </Button>
      </div>
    </form>
  );
};
