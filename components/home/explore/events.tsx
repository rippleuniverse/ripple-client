import { ChevronRight } from "lucide-react";
import Image from "next/image";
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
import { madeSoulmaze } from "@/lib/fonts";

type EventProps = {
  image: string;
  title: string;
  date: string;
};

export const Events: FC = () => {
  return (
    <div className={"bg-[#E9FFFF] rounded-xl p-8 w-full xl:w-9/12 space-y-6"}>
      <div className="flex flex-col gap-4 xl:flex-row xl:gap-32">
        <h2
          className={`${madeSoulmaze.className} text-lg md:text-xl lg:text-2xl xl:text-[1.5rem] uppercase`}
        >
          events & <br /> <span className="text-secondary">experiences</span>
        </h2>
        <p className={"text-sm md:text-base leading-6"}>
          Join live sessions, galleries, workshops, <br /> and community
          meetups—online and <br /> offline.
        </p>
      </div>
      <div>
        <Button variant={"outline"} asChild size={"lg"}>
          <Link href={"/"}>Explore all events</Link>
        </Button>
      </div>

      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Event
          image={"/images/home/event-1.png"}
          title={"Event Title here"}
          date={"02/12/25"}
        />
        <Event
          image={"/images/home/event-1.png"}
          title={"Event Title here"}
          date={"02/12/25"}
        />
        <Event
          image={"/images/home/event-1.png"}
          title={"Event Title here"}
          date={"02/12/25"}
        />
      </div>
      <div className={"block md:hidden"}>
        <Carousel className={"w-full"}>
          <CarouselContent>
            <CarouselItem>
              <Event
                image={"/images/home/event-1.png"}
                title={"Event Title here"}
                date={"02/12/25"}
              />
            </CarouselItem>
            <CarouselItem>
              <Event
                image={"/images/home/event-1.png"}
                title={"Event Title here"}
                date={"02/12/25"}
              />
            </CarouselItem>
            <CarouselItem>
              <Event
                image={"/images/home/event-1.png"}
                title={"Event Title here"}
                date={"02/12/25"}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className={"-left-5"} />
          <CarouselNext className={"-right-5"} />
        </Carousel>
      </div>
    </div>
  );
};

export const Event: FC<EventProps> = ({ date, title, image }) => {
  return (
    <div className={"bg-[#BFF0F0] p-4 rounded-3xl space-y-3"}>
      <Image
        className={"block object-cover w-full rounded-3xl"}
        src={image}
        alt={title}
        width={230}
        height={330}
      />
      <div className="flex items-center justify-between">
        <div className={"text-[#4E4E4E]"}>
          <h3 className={"font-bold text-sm md:text-base"}>{title}</h3>
          <p>{date}</p>
        </div>
        <div>
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};
