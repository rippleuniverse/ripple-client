import { ArrowRight, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components/common/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/common/carousel";
import { Progress } from "@/components/common/progress";
import { madeSoulmaze, plusJarkataSans } from "@/lib/fonts";

export const ActivePrograms: FC = () => {
  return (
    <div className={"space-y-7"}>
      <div className="flex justify-between">
        <h2 className={`${madeSoulmaze.className} text-lg md:text-2xl`}>
          Active PROGRAMS
        </h2>
        <Link
          href={"/programs"}
          className={
            "text-[#64748B] flex items-center space-x-1 text-xs md:text-sm font-bold"
          }
        >
          <span>View all</span>
          <ArrowRight className={"size-3"} />
        </Link>
      </div>
      <Carousel className={"w-full"}>
        <CarouselContent className={"gap-4 md:gap-8"}>
          <Program />
          <Program />
          <Program />
          <Program />
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export const Program: FC = () => {
  return (
    <CarouselItem
      className={
        "basis-10/12 md:basis-5/12 lg:basis-1/3 p-4 space-y-4 bg-white rounded-xl"
      }
    >
      <div>
        <Link href={"/"}>
          <Image
            src={"/images/programs/program.png"}
            alt={"Program"}
            width={200}
            height={150}
            className={"w-full object-cover h-56 rounded-2xl"}
          />
        </Link>
      </div>
      <Link
        href={"/"}
        className="flex items-center justify-between text-[#4E4E4E]"
      >
        <span className={"block"}>
          <span className={"font-bold block"}>Title of the course here</span>
          <span className={"block text-xs"}>Ripple</span>
        </span>
        <ChevronRight />
      </Link>
      <div className={"space-y-2"}>
        <div className="flex justify-between">
          <p
            className={`${plusJarkataSans.className} text-gray-400 text-xs font-bold`}
          >
            PROGRESS
          </p>
          <p className="text-xs text-secondary-light font-bold">65%</p>
        </div>
        <Progress className={"w-full"} value={65} />
      </div>
      <div>
        <Button size={"lg"} variant={"ghost"} asChild className={" font-bold"}>
          <Link href={"/"} className={"flex items-center bg-gray-100 w-full"}>
            <span>Continue Learning</span>
            <Play className={"size-3 fill-black"} />
          </Link>
        </Button>
      </div>
    </CarouselItem>
  );
};
