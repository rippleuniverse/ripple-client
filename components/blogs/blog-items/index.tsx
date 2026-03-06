"use client";

import Link from "next/link";
import { FC } from "react";
import { Articles } from "@/components/blogs/blog-items/articles";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { Search } from "@/components/common/search";
import { useBlogCategories } from "@/hooks/blogs";
import { useFilter } from "@/hooks/common/filter";
import { madeSoulmaze } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const BlogItems: FC = () => {
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
            articles & <span className={"text-secondary"}>stories</span>
          </h2>
          <p
            className={
              "text-[#4E4E4E] text-xs md:text-sm lg:text-base text-center max-w-md mx-auto"
            }
          >
            Thoughtful essays, guides, and perspectives on creative technology,
            careers, culture, and the future of work.
          </p>
        </div>

        <Search placeholder={"Search articles"} />
        <BlogsFilter />
      </Container>
      <Container>
        <Articles />
      </Container>
    </section>
  );
};

export const BlogsFilter: FC = () => {
  const categories = useBlogCategories();
  const { filterValue, handleFilter } = useFilter("category");

  return (
    <div
      className={"flex justify-center md:items-center gap-2 md:gap-4 flex-wrap"}
    >
      <Button
        onClick={() => handleFilter("")}
        size={"sm"}
        className={cn(
          "text-xs cursor-pointer",
          !filterValue ? "" : "text-black bg-[#F5F5F5]",
        )}
      >
        All
      </Button>
      {categories.data?.map((category) => (
        <Button
          onClick={() => handleFilter(category.id)}
          key={category.id}
          size={"sm"}
          className={cn(
            "text-xs cursor-pointer",
            filterValue === category.id ? "" : "text-black bg-[#F5F5F5]",
          )}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};
