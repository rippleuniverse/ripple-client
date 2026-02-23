import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Badge } from "@/components/common/badge";
import { Button } from "@/components/common/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/common/carousel";
import { madeSoulmaze } from "@/lib/fonts";

export const Blogs: FC = () => {
  return (
    <div
      className={
        "flex flex-col lg:flex-row bg-[#FFFFE9] rounded-xl p-8 h-max gap-16"
      }
    >
      <BlogInfo />
      <BlogList />
    </div>
  );
};

const BlogList: FC = () => {
  return (
    <>
      <div className="hidden md:grid grid-cols-4 gap-4 lg:w-9/12 h-max">
        <Blog
          image={"/images/home/blog-1.png"}
          title={"Blog 1"}
          type={"blog"}
        />
        <Blog
          image={"/images/home/blog-2.png"}
          title={"Blog 1"}
          type={"podcast"}
        />
        <Blog
          image={"/images/home/blog-3.png"}
          title={"Blog 1"}
          type={"podcast"}
        />
        <Blog
          image={"/images/home/blog-4.png"}
          title={"Blog 1"}
          type={"blog"}
        />
      </div>
      <div className={"block md:hidden max-w-56 mx-auto"}>
        <Carousel className={"w-full"}>
          <CarouselContent>
            <CarouselItem>
              <Blog
                image={"/images/home/blog-4.png"}
                title={"Blog 1"}
                type={"blog"}
              />
            </CarouselItem>
            <CarouselItem>
              <Blog
                image={"/images/home/blog-2.png"}
                title={"Blog 1"}
                type={"podcast"}
              />
            </CarouselItem>
            <CarouselItem>
              <Blog
                image={"/images/home/blog-3.png"}
                title={"Blog 1"}
                type={"podcast"}
              />
            </CarouselItem>
            <CarouselItem>
              <Blog
                image={"/images/home/blog-4.png"}
                title={"Blog 1"}
                type={"podcast"}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className={"-left-6"} />

          <CarouselNext className={"-right-6"} />
        </Carousel>
      </div>
    </>
  );
};

export type BlogProps = {
  type: "blog" | "podcast";
  title: string;
  image: string;
};

export const Blog: FC<BlogProps> = ({ type, title, image }) => {
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
        className={"w-full object-cover rounded-3xl block h-60 md:h-48 xl:h-72"}
      />
    </div>
  );
};

const BlogInfo: FC = () => {
  return (
    <div className={"space-y-3 w-full lg:w-3/12 h-max"}>
      <h2
        className={`${madeSoulmaze.className} text-lg md:text-xl lg:text-2xl xl:text-[1.5rem] uppercase`}
      >
        blog & <br /> <span className="text-secondary">podcasts</span>
      </h2>
      <p className={"text-sm md:text-base leading-6"}>
        Stories, Ideas & Conversations from Creative Tech.
      </p>
      <Button asChild variant={"outline"} size={"lg"}>
        <Link href={"/"}>Explore all</Link>
      </Button>
    </div>
  );
};
