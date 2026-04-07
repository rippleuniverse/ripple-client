"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Badge } from "@/components/common/badge";
import { Button } from "@/components/common/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/common/carousel";
import { BlogProps } from "@/components/home/explore/blogs";
import { Event } from "@/components/home/explore/events";
import { LearnSkills } from "@/components/home/explore/learn-skills";
import { RippleShop } from "@/components/home/explore/ripple-shop";
import { Job } from "@/components/jobs/roles";
import { useOverview } from "@/hooks/events";
import { useRolesOverview } from "@/hooks/roles";
import { madeSoulmaze } from "@/lib/fonts";

export const OtherItems: FC = () => {
  const roles = useRolesOverview();
  const events = useOverview();

  return (
    <Carousel className={"w-full"}>
      <CarouselContent className={"gap-0"}>
        <CarouselItem className={"basis-11/12 md:basis-5/12 max-h-133"}>
          <LearnSkills className={"xl:w-full h-full"} />
        </CarouselItem>
        <CarouselItem className={"basis-11/12 md:basis-5/12 max-h-133"}>
          <div className={"bg-[#E9FFFF] rounded-xl p-8 w-full space-y-3"}>
            <div className="flex flex-col gap-4">
              <h2
                className={`${madeSoulmaze.className} text-lg md:text-xl lg:text-2xl xl:text-[1.5rem] uppercase`}
              >
                events & <br />{" "}
                <span className="text-secondary">experiences</span>
              </h2>
              <p className={"text-sm md:text-base leading-6"}>
                Join live sessions, galleries, workshops, and community
                meetups—online and offline.
              </p>
            </div>
            <div>
              <Button variant={"outline"} asChild size={"lg"}>
                <Link href={"/"}>Explore all events</Link>
              </Button>
            </div>

            <Carousel>
              <CarouselContent>
                {events.data?.map((event) => (
                  <CarouselItem
                    key={event.id}
                    className={"basis-10/12 md:basis-7/12"}
                  >
                    <Event
                      image={event.featured_image}
                      title={event.title}
                      date={event.date}
                      id={event.id}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </CarouselItem>
        <CarouselItem className={"basis-11/12 md:basis-5/12 max-h-133"}>
          <div className={"bg-[#FFFFE9] rounded-xl p-8 w-full space-y-3"}>
            <div className="flex flex-col gap-4">
              <h2
                className={`${madeSoulmaze.className} text-lg md:text-xl lg:text-2xl xl:text-[1.5rem] uppercase`}
              >
                blog & <br /> <span className="text-secondary">podcasts</span>
              </h2>
              <p className={"text-sm md:text-base leading-6"}>
                Stories, Ideas & Conversations from Creative Tech.
              </p>
            </div>
            <div>
              <Button variant={"outline"} asChild size={"lg"}>
                <Link href={"/"}>Explore all </Link>
              </Button>
            </div>

            <Carousel>
              <CarouselContent>
                <CarouselItem className={"basis-7/12"}>
                  <Blog
                    image={"/images/home/blog-1.png"}
                    title={"Blog 1"}
                    type={"blog"}
                  />
                </CarouselItem>
                <CarouselItem className={"basis-7/12"}>
                  <Blog
                    image={"/images/home/blog-2.png"}
                    title={"Blog 1"}
                    type={"blog"}
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </CarouselItem>
        <CarouselItem className={"basis-11/12 md:basis-5/12 max-h-133"}>
          <RippleShop className={"xl:w-full h-full"} />
        </CarouselItem>
        <CarouselItem className={"basis-11/12 md:basis-5/12 max-h-133"}>
          <div className={"bg-[#E9FFEC] rounded-xl p-8 w-full space-y-3"}>
            <div className="flex flex-col gap-4">
              <h2
                className={`${madeSoulmaze.className} text-lg md:text-xl lg:text-2xl xl:text-[1.5rem] uppercase`}
              >
                ripple & <br /> <span className="text-secondary">jobs</span>
              </h2>
              <p className={"text-sm md:text-base leading-6"}>
                Discover jobs, internships, and opportunities created and
                curated by Ripple.
              </p>
            </div>
            <div>
              <Button variant={"outline"} asChild size={"lg"}>
                <Link href={"/"}>Explore all events</Link>
              </Button>
            </div>

            <Carousel>
              <CarouselContent>
                {roles.data?.map((role) => (
                  <CarouselItem
                    key={role.id}
                    className={"basis-full lg:basis-9/12"}
                  >
                    <Job role={role} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

const Blog: FC<BlogProps> = ({ type, title, image }) => {
  return (
    <div className={"rounded-3xl relative"}>
      <Badge
        variant={"secondary"}
        className={"px-5 py-2 absolute top-3 right-3 font-semibold capitalize"}
      >
        {type}
      </Badge>
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        unoptimized
        className={"w-full object-cover rounded-3xl block h-60 md:h-48 xl:h-48"}
      />
    </div>
  );
};
