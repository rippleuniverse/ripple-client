import { FC, PropsWithChildren } from "react";
import { Button } from "@/components/common/button";
import { Google } from "@/components/common/icons/google";

type FormLayoutProps = PropsWithChildren<{
  title: string;
}>;
export const FormLayout: FC<FormLayoutProps> = ({ title, children }) => {
  return (
    <div className={"space-y-10"}>
      <h2
        className={"text-lg md:text-xl lg:text-2xl text-center font-semibold"}
      >
        {title}
      </h2>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className={"bg-[#E9EAEB] h-[0.09rem] w-full"}></div>
          <span className={"text-sm text-[#717680]"}>or</span>
          <div className={"bg-[#E9EAEB] h-[0.09rem] w-full"}></div>
        </div>
        {children}
      </div>
    </div>
  );
};
