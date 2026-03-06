"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { ArrowFillLeft } from "@/components/common/icons/arrow-fill-left";
import { useBlog } from "@/hooks/blogs";
import { madeSoulmaze } from "@/lib/fonts";

export const BlogDetailsHero: FC = () => {
  const blog = useBlog();

  return (
    <section>
      <Container
        className={
          "max-w-md lg:max-w-7xl flex flex-col lg:flex-row items-center justify-between pb-12 lg:pb-28 gap-8"
        }
      >
        <div className={"w-full lg:w-1/2 space-y-6 lg:space-y-8"}>
          <Link href={"/blogs"} className={"flex items-center space-x-3"}>
            <ArrowFillLeft color={"#FFF8C6"} size={35} />
            <span
              className={
                "border-[#FFF8C6] border-[0.09rem] text-[#FFF8C6] text-xs md:text-sm lg:text-base rounded-full px-4 py-2"
              }
            >
              Ripple Blogs
            </span>
          </Link>
          <h1
            className={`text-center lg:text-left text-white ${madeSoulmaze.className} text-2xl md:text-4xl lg:text-4xl xl:text-[3.43rem] leading-7 md:leading-10 lg:leading-12`}
          >
            {blog.data?.title}
          </h1>
          <p
            className={
              "text-[#F5F3F0B2] text-xs md:text-sm xl:text-base text-center lg:text-left"
            }
          >
            {blog.data?.description}
          </p>
          <div className={"flex justify-center gap-2 lg:justify-start"}>
            <Button asChild size={"sm"} variant={"secondary"}>
              <Link href={`/blogs?category=${blog.data?.category.id}`}>
                {blog.data?.category.name}
              </Link>
            </Button>
            <Button
              className={"bg-[#FFF8C6]"}
              size={"sm"}
              variant={"secondary"}
            >
              {blog.data?.read_time}
            </Button>
          </div>
        </div>
        <div className={"w-full lg:w-1/2 flex justify-center"}>
          <div className={"w-62 h-76 md:w-82 md:h-96 relative"}>
            <Image
              src={"/images/jobs/hero-2.png"}
              alt={"Hero 2"}
              width={185}
              height={195}
              className={
                "hidden lg:block w-24 xl:w-36 absolute -left-20 xl:-left-30 -rotate-90 top-1/2"
              }
            />
            <Image
              src={"/images/jobs/hero-2.png"}
              alt={"Hero 2"}
              width={185}
              height={195}
              className={
                "hidden lg:block w-24 xl:w-36 absolute -right-20 xl:-right-30 rotate-90 top-1/4"
              }
            />
            {blog.data && (
              <Image
                src={blog.data.featured_image}
                alt={"Job"}
                width={350}
                height={500}
                className={
                  "relative z-10 size-full object-cover rounded-3xl border-4 border-[#F2F2F233]"
                }
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
