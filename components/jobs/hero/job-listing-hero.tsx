"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/common/breadcrumb";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { useRole } from "@/hooks/roles";
import { madeSoulmaze } from "@/lib/fonts";

export const JobListingHero: FC = () => {
  const role = useRole();

  return (
    <section>
      <Container
        className={
          "max-w-md lg:max-w-7xl flex flex-col lg:flex-row items-center justify-between pb-16 gap-8"
        }
      >
        <div className={"w-full lg:w-1/2 space-y-6 lg:space-y-8 xl:space-y-12"}>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className={"text-white/50"}>
                Ripple jobs
              </BreadcrumbItem>
              <BreadcrumbSeparator className={"text-white"} />
              <BreadcrumbItem className={"text-white"}>
                Job ID {role.data?.id}
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1
            className={`text-center lg:text-left text-white ${madeSoulmaze.className} text-2xl md:text-4xl lg:text-4xl xl:text-[3.43rem] leading-7 md:leading-10 lg:leading-12`}
            dangerouslySetInnerHTML={{
              __html: role.data?.name.replaceAll(" ", "<br/>") ?? "",
            }}
          />
          <p
            className={
              "text-[#F5F3F0B2] text-xs md:text-sm xl:text-base text-center lg:text-left line-clamp-3"
            }
          >
            {role.data?.description}
          </p>
          <div className={"flex justify-center lg:justify-start"}>
            <Button asChild size={"lg"} variant={"secondary"}>
              <Link href={"#scroll-apply"}>Apply for this role</Link>
            </Button>
          </div>
        </div>
        <div className={"w-full lg:w-1/2 flex justify-center"}>
          <div className={"relative"}>
            <Image
              src={"/images/jobs/hero-2.png"}
              alt={"Hero 2"}
              width={185}
              height={195}
              className={
                " w-24 xl:w-36 absolute -right-1/5 lg:-right-1/5 xl:-right-1/3  top-1/4 rotate-90 z-10"
              }
            />
            <Image
              src={"/images/jobs/hero-2.png"}
              alt={"Hero 2"}
              width={185}
              height={195}
              className={
                " w-24 xl:w-36 absolute -left-1/5 lg:-left-1/5 xl:-left-1/3  top-1/2 -rotate-90 z-10"
              }
            />
            <div
              className={
                "bg-white rounded-4xl py-8 px-5 w-80 shadow-md relative z-20"
              }
            >
              <ul className={"space-y-8"}>
                <li className={"text-sm md:text-base"}>
                  <span className={"text-[#484848]"}>Company:</span>{" "}
                  <span className={"font-medium"}>
                    {role.data?.company_name}
                  </span>
                </li>
                <li className={"text-sm md:text-base"}>
                  <span className={"text-[#484848]"}>Location:</span>{" "}
                  <span className={"font-medium"}>
                    {role.data?.company_location}
                  </span>
                </li>
                <li className={"text-sm md:text-base"}>
                  <span className={"text-[#484848]"}>Job type:</span>{" "}
                  <span className={"font-medium"}>{role.data?.type}</span>
                </li>
                <li className={"text-sm md:text-base"}>
                  <span className={"text-[#484848]"}>Salary:</span>{" "}
                  <span className={"font-medium"}>{role.data?.salary}</span>
                </li>
                <li className={"text-sm md:text-base"}>
                  <span className={"text-[#484848]"}>Experience level:</span>{" "}
                  <span className={"font-medium"}>
                    {role.data?.experience_level}
                  </span>
                </li>
                <li className={"text-sm md:text-base"}>
                  <span className={"text-[#484848]"}>Job style:</span>{" "}
                  <span className={"font-medium"}>{role.data?.style}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
