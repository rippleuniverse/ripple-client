"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FC } from "react";
import { Articles } from "@/components/blogs/blog-items/articles";
import { Podcasts } from "@/components/blogs/podcast-items/podcasts";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { Search } from "@/components/common/search";
import { useCategories } from "@/hooks/podcasts";
import { madeSoulmaze } from "@/lib/fonts";

export const PodcastItems: FC = () => {
  return (
    <section
      className={
        "pt-7 pb-3 px-4 rounded-2xl relative overflow-hidden bg-white space-y-16"
      }
    >
      <Container className={"space-y-8 max-w-2xl"}>
        <div className="space-y-5">
          <h2
            className={`text-center ${madeSoulmaze.className} text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase`}
          >
            Ripple <span className={"text-secondary"}>pods</span>
          </h2>
          <p
            className={
              "text-[#4E4E4E] text-xs md:text-sm lg:text-base text-center max-w-md mx-auto"
            }
          >
            At Ripple Pods we unpack everything from the 9-5 grind, digital
            culture, dating in the algorithm age, to navigating friendships,
            community, and the constant quest for growth.
          </p>
        </div>

        <Search placeholder={"Search podcast episodes…"} />
        <PodcastsFilter />
      </Container>
      <Container>
        <Podcasts />
      </Container>
    </section>
  );
};

export const PodcastsFilter: FC = () => {
  const categories = useCategories();
  const searchParams = useSearchParams();
  const selectedCategoryId = searchParams.get("podcast_category");
  const noCategory = selectedCategoryId === "" || !selectedCategoryId;

  console.log(noCategory);

  return (
    <div
      className={"flex justify-center md:items-center gap-2 md:gap-4 flex-wrap"}
    >
      <Button
        size={"sm"}
        asChild
        className={`text-xs ${noCategory ? "" : "bg-[#F5F5F5] text-black"}`}
      >
        <Link scroll={false} href={"?"}>
          All
        </Link>
      </Button>
      {categories.data?.map((item) => (
        <Button
          asChild
          key={item.id}
          size={"sm"}
          className={`text-xs ${selectedCategoryId === item.id ? "" : "bg-[#F5F5F5] text-black"}`}
        >
          <Link scroll={false} href={`?podcast_category=${item.id}`}>
            {item.name}
          </Link>
        </Button>
      ))}
    </div>
  );
};
