import { RotateCcwKey } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { Input } from "@/components/common/form/input";
import { Label } from "@/components/common/form/label";

export const ChangePassword: FC = () => {
  return (
    <div className={"border border-gray-200 rounded-2xl p-6  space-y-5"}>
      <div className={"flex justify-between space-x-2 items-center"}>
        <div>
          <h1 className={"font-semibold text-base md:text-xl"}>
            Change Password
          </h1>
          <p className={"text-xs md:text-sm text-gray-500"}>
            Update your password to keep your account secure.
          </p>
        </div>
        <div className="p-4 rounded-full bg-gray-50 text-secondary-light">
          <RotateCcwKey />
        </div>
      </div>
      <Form />
    </div>
  );
};

const Form: FC = () => {
  return (
    <form className={"space-y-6"}>
      <div className={"space-y-2"}>
        <Label className={"font-bold text-gray-400 uppercase text-xs"}>
          Current Password
        </Label>
        <Input
          type={"password"}
          className={"border-gray-200 rounded-full py-5 w-full"}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className={"space-y-2 md:w-1/2"}>
          <Label className={"font-bold text-gray-400 uppercase text-xs"}>
            New Password
          </Label>
          <Input
            type={"password"}
            className={"border-gray-200 rounded-full py-5 w-full"}
          />
        </div>
        <div className={"space-y-2 md:w-1/2"}>
          <Label className={"font-bold text-gray-400 uppercase text-xs"}>
            Confirm Password
          </Label>
          <Input
            type={"password"}
            className={"border-gray-200 rounded-full py-5 w-full"}
          />
        </div>
      </div>
      <div className="h-[0.05rem] bg-gray-300"></div>
      <div className="flex justify-between items-center">
        <Link href={"/"} className={"text-gray-500 text-xs md:text-sm"}>
          Forgot your password?
        </Link>
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
