"use client";

import { LinkIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components/common/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/common/carousel";
import { ArrowFillLeft } from "@/components/common/icons/arrow-fill-left";
import { ArrowFillRight } from "@/components/common/icons/arrow-fill-right";
import { useEvent } from "@/hooks/events";
import { madeSoulmaze } from "@/lib/fonts";

export const EventCarouselBanner: FC = () => {
  const event = useEvent();

  return (
    <section className={"lg:pb-32"}>
      <Carousel className={"w-full"}>
        <CarouselContent>
          <CarouselItem className={"max-w-[80vw] md:max-w-[70vw]"}>
            <div
              style={{
                background: `url(${event.data?.featured_image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className={
                "w-[80vw] md:w-[70wh] bg-cover bg-center h-52 md:h-96 lg:h-140 rounded-2xl relative flex flex-col justify-end pb-8"
              }
            >
              <div className="mx-auto w-11/12 flex gap-4 relative z-10">
                <div
                  className={
                    "bg-[#000000CC] space-y-4 xl:w-9/12 px-6 lg:px-10 py-4 lg:py-13 rounded-3xl md:h-40 lg:h-60"
                  }
                >
                  <h1
                    className={`lg:text-3xl xl:text-[3.4rem] text-[#FFF8C6] ${madeSoulmaze.className} line-clamp-2`}
                  >
                    {event.data?.title}
                  </h1>
                  <p
                    className={
                      "text-[#FFFFFFB2] text-xs md:text-sm lg:text-base xl:text-lg line-clamp-2 lg:line-clamp-3"
                    }
                  >
                    {event.data?.description}
                  </p>

                  <div className="block xl:hidden max-w-xs">
                    <EventActions />
                  </div>
                </div>
                <div
                  className={
                    "hidden xl:block bg-[#000000CC] space-y-4 xl:w-3/12 p-6 rounded-3xl h-60"
                  }
                >
                  <div className="space-y-3 text-[#FFFFFFB2] text-xs">
                    <p>[{event.data?.date}]</p>
                    <p className={"capitalize"}>
                      {event.data?.type} / {event.data?.access}
                    </p>
                    <p className="flex items-center space-x-2 text-[#FFF8C6]">
                      <LinkIcon className={"size-4"} />
                      <Link href={""}>[Venue or Online link placeholder]</Link>
                    </p>
                  </div>
                  <EventActions />
                </div>
              </div>
            </div>
          </CarouselItem>
          {event.data?.images.map((image, index) => (
            <CarouselItem
              key={index}
              className={"max-w-[80vw] md:max-w-[70vw]"}
            >
              <div
                style={{
                  background: `url(${image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className={
                  "w-[80vw] md:w-[70wh] h-52 md:h-96 lg:h-140 rounded-2xl relative flex flex-col justify-end pb-8"
                }
              ></div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className={"left-0"}
          icon={<ArrowFillLeft color={"#FFF8C6"} className={"scale-200"} />}
        />
        <CarouselNext
          className={"right-0"}
          icon={<ArrowFillRight color={"#FFF8C6"} className={"scale-200"} />}
        />
      </Carousel>
    </section>
  );
};

const EventActions: FC = () => {
  return (
    <div className="flex gap-2">
      <Button className={"bg-[#FFF8C6] text-black w-1/2 text-xs lg:text-sm"}>
        Buy Ticket
      </Button>
      <Button
        className={
          "border-white text-white border-[0.1rem] w-1/2 text-xs lg:text-sm"
        }
        variant={"outline"}
      >
        Book Seat
      </Button>
    </div>
  );
};
