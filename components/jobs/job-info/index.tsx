"use client";

import { Check } from "lucide-react";
import { ComponentProps, FC, PropsWithChildren } from "react";
import { Container } from "@/components/common/container";
import { useRole } from "@/hooks/roles";
import { creatoDisplay } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const JobInfo: FC = () => {
  const role = useRole();
  return (
    <section className={"bg-white"}>
      <Container className={"max-w-md lg:max-w-7xl py-8 gap-8"}>
        <InfoBlock title={"About the company"}>
          <p>{role.data?.about_company}</p>
        </InfoBlock>
        <InfoSeparator />
        <InfoBlock title={"What you’ll do"}>
          <p>{role.data?.description}</p>
        </InfoBlock>
        <InfoSeparator />
        <InfoBlock title={"What you’ll need to get the job done"}>
          <ul className={"text-sm md:text-base space-y-3"}>
            {role.data?.responsibilities.map((item, index) => (
              <li key={index} className={"flex items-center gap-5"}>
                <Check className={"stroke-1"} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </InfoBlock>
        <InfoSeparator />
        <InfoBlock title={"What we require"}>
          <ul className={"text-sm md:text-base space-y-3"}>
            {role.data?.requirements.map((item, index) => (
              <li key={index} className={"flex items-center gap-5"}>
                <Check className={"stroke-1"} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </InfoBlock>
        <InfoSeparator />

        <InfoBlock title={"Benefits"}>
          <InfoList>
            {role.data?.benefits.map((item, index) => (
              <li key={index} className={"flex items-center gap-5"}>
                <Check className={"stroke-1"} />
                <span>{item}</span>
              </li>
            ))}
          </InfoList>
        </InfoBlock>
      </Container>
    </section>
  );
};

type InfoBlockProps = PropsWithChildren<{
  title: string;
}>;

type InfoListProps = ComponentProps<"ul">;
type InfoListItemProps = ComponentProps<"li">;

export const InfoList: FC<InfoListProps> = ({ className, ...restProps }) => {
  const c = cn("text-sm md:text-base space-y-3", className);
  return <ul className={c} {...restProps} />;
};

export const InfoListItem: FC<InfoListItemProps> = ({
  className,
  children,
  ...restProps
}) => {
  const c = cn("flex items-center gap-5", className);
  return (
    <li className={c} {...restProps}>
      <Check className={"stroke-1"} />
      <span>{children}</span>
    </li>
  );
};

export const InfoSeparator: FC = () => (
  <div className={"h-[0.05rem] bg-gray-200 my-8"}></div>
);
export const InfoBlock: FC<InfoBlockProps> = ({ title, children }) => {
  return (
    <div className={"space-y-4"}>
      <h3
        className={`text-base md:text-xl font-bold ${creatoDisplay.className}`}
      >
        {title}
      </h3>
      {children}
    </div>
  );
};
