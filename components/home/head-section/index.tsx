import { FC, PropsWithChildren } from "react";
import { Header } from "@/components/common/header";
import { cn } from "@/lib/utils";

type HeadSectionProps = PropsWithChildren<{
  className?: string;
}>;

export const HeadSection: FC<HeadSectionProps> = ({ children, className }) => {
  const c = cn(
    "pt-7 px-4 md:px-16 lg:px-24 xl:px-32 bg-black rounded-2xl relative space-y-12 overflow-hidden",
    className,
  );

  return (
    <div className={c}>
      <div className={"mx-auto space-y-12"}>
        <Header />
      </div>
      {children}
    </div>
  );
};
