"use client";

import { FC } from "react";
import { Article } from "@/components/blogs/blog-items/articles";
import { Container } from "@/components/common/container";
import { useRelatedBlogs } from "@/hooks/blogs";
import { madeSoulmaze } from "@/lib/fonts";

export const OtherArticles: FC = () => {
  const blogs = useRelatedBlogs();

  if (!blogs.data?.length) return null;

  return (
    <section
      className={
        "py-12 px-4 rounded-2xl relative overflow-hidden bg-[#F6F6F6] space-y-16"
      }
    >
      <Container className={"space-y-8"}>
        <div className="space-y-5">
          <h2
            className={`text-center ${madeSoulmaze.className} text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase`}
          >
            other articles & <span className={"text-secondary"}>stories</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 *:bg-white">
          {blogs.data?.map((item) => (
            <Article item={item} key={item.id} />
          ))}
        </div>
      </Container>
    </section>
  );
};
