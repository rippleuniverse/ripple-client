import { FC, PropsWithChildren } from "react";
import { madeSoulmaze } from "@/lib/fonts";

export const Heading: FC<PropsWithChildren> = (props) => {
  return <h2 className={`${madeSoulmaze.className} text-lg`} {...props} />;
};
