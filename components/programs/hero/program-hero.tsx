"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/common/breadcrumb";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { Divider } from "@/components/common/divider";
import { useProgram } from "@/hooks/programs";
import { madeSoulmaze } from "@/lib/fonts";

export const ProgramHero: FC = () => {
  const program = useProgram();

  return (
    <section>
      <Container
        className={
          "max-w-md lg:max-w-7xl flex flex-col lg:flex-row items-center justify-between pb-16 gap-12"
        }
      >
        <div className={"w-full lg:w-1/2 space-y-6 lg:space-y-8"}>
          <div className={"space-y-6 lg:space-y-8"}>
            <Breadcrumb>
              <BreadcrumbList className={"text-xs md:text-base"}>
                <BreadcrumbItem>
                  <BreadcrumbLink className={"text-gray-400"} asChild>
                    <Link href={"/programs"}>Ripple Programs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className={"text-white"} />
                <BreadcrumbItem className={"text-white"}>
                  Program ID {program.data?.id}
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1
              className={`text-center lg:text-left text-white ${madeSoulmaze.className} text-2xl md:text-4xl lg:text-4xl xl:text-[3.43rem] leading-7 md:leading-10 lg:leading-12`}
            >
              {program.data?.name}
            </h1>
            <p
              className={
                "text-[#F5F3F0B2] text-xs md:text-sm xl:text-base text-center lg:text-left"
              }
            >
              {program.data?.description}
            </p>
            <p
              className={
                "text-[#F5F3F0B2] text-xs md:text-sm xl:text-base text-center lg:text-left"
              }
            >
              Created by{" "}
              <span className={"font-bold text-white"}>
                {program.data?.author}
              </span>
            </p>
            <div className={"flex justify-center lg:justify-start"}>
              <Button asChild size={"lg"} variant={"secondary"}>
                <Link href={`/programs/${program.data?.id}/checkout`}>
                  Enroll for this course
                </Link>
              </Button>
            </div>
          </div>
          <Divider />
          <div className="flex divide-x-[0.09rem] divide-[#FFFFFF3B]">
            <div className={"pr-5"}>
              <div className="flex items-center gap-2">
                <h5 className="text-white text-lg md:text-2xl lg:text-3xl xl:text-4xl">
                  {program.data?.rating.avg_rating}
                </h5>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={
                        index < Math.round(program.data?.rating.avg_rating || 0)
                          ? "fill-[#FF78E6] size-4 md:size-6 lg:size-9"
                          : "fill-[#555555] size-4 md:size-6 lg:size-9"
                      }
                    />
                  ))}
                </div>
              </div>
              <p className={"text-[#F5F3F0B2] text-xs lg:text-base xl:text-lg"}>
                {program.data?.rating.count} ratings
              </p>
            </div>
            <div className={"pl-5"}>
              <div className="flex items-center gap-2">
                <h5 className="text-white text-lg md:text-2xl lg:text-3xl xl:text-4xl capitalize">
                  {program.data?.experience_level}
                </h5>
              </div>
              <p className={"text-[#F5F3F0B2] text-xs lg:text-base xl:text-lg"}>
                Recommended experience
              </p>
            </div>
          </div>
        </div>

        <div className={"w-full lg:w-1/2 flex justify-center"}>
          {program.data && (
            <Image
              src={program.data?.featured_image}
              alt={"Job"}
              width={670}
              height={550}
              className={"w-9/12 xl:w-7/12 object-cover"}
            />
          )}
        </div>
      </Container>
    </section>
  );
};
