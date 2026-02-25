import { Pen } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components/common/button";

export const ProfileDetails: FC = () => {
  return (
    <div
      className={"border border-gray-200 rounded-2xl p-8 xl:w-4/12 space-y-5"}
    >
      <div className="mx-auto w-max relative ">
        <Image
          src={"/images/settings/avatar.jpg"}
          alt={"Avatar"}
          width={120}
          height={120}
          className={
            "size-30 rounded-full object-cover border-4 border-gray-100"
          }
        />

        <span
          className={
            "text-white bg-secondary-light  absolute bottom-1 border-4 border-white right-0 p-2 rounded-full"
          }
        >
          <Pen className={"size-3"} />
        </span>
      </div>
      <div>
        <h3
          className={
            "font-semibold text-base md:text-lg lg:text-xl text-center"
          }
        >
          Alex Morgan
        </h3>
        <p className="text-gray-500 text-xs md:text-sm text-center">
          Product Designer
        </p>
      </div>
      <div className="bg-gray-50 rounded-3xl p-3 text-center">
        <p className={"text-gray-400 font-bold text-xs"}>Member Since</p>
        <p className={"font-bold"}>January 2025</p>
      </div>
      <Button
        className={"font-bold w-full border-gray-200"}
        size={"xl"}
        variant={"outline"}
      >
        Remove picture
      </Button>
    </div>
  );
};
