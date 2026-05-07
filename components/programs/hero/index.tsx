import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { madeSoulmaze } from "@/lib/fonts";

export const Hero: FC = () => {
  return (
    <section>
      <Container
        className={
          "max-w-md lg:max-w-7xl flex flex-col lg:flex-row items-center justify-between pb-16"
        }
      >
        <div className={"w-full lg:w-1/2 space-y-6 lg:space-y-8 xl:space-y-12"}>
          <div>
            <span
              className={
                "hidden lg:inline border-white border-[0.1rem] text-white text-xs md:text-sm lg:text-base rounded-full px-4 py-2"
              }
            >
              Ripple Programs
            </span>
          </div>
          <h1
            className={`text-center lg:text-left text-white ${madeSoulmaze.className} text-2xl md:text-4xl lg:text-4xl xl:text-[3.43rem] leading-7 md:leading-10 lg:leading-12`}
          >
            Build the <br /> <span className={"text-[#FFF8C7]"}>skills</span>{" "}
            <br />
            <span className={"text-[#FFF8C7]"}>shaping</span> <br />
            <span className={"text-[#FF78E6]"}>the future</span>
          </h1>
          <p
            className={
              "text-[#F5F3F0B2] text-xs md:text-sm xl:text-base text-center lg:text-left"
            }
          >
            From creative AI fundamentals to advanced tech mastery, Ripple
            offers programs designed for real-world creative careers.
          </p>
          <div className={"flex justify-center lg:justify-start"}>
            <Button asChild size={"lg"} variant={"secondary"}>
              <Link href={"#courses"}>See all courses</Link>
            </Button>
          </div>
        </div>
        <div className={"w-full lg:w-1/2 flex justify-center"}>
          <Image
            src={"/images/programs/hero.png"}
            alt={"Job"}
            width={670}
            height={550}
            className={"w-9/12 lg:w-full object-cover"}
          />
        </div>
      </Container>
    </section>
  );
};
