"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Pagination } from "@/components/common/pagination";
import { BlogItem } from "@/helpers/blogs";
import { useBlogs } from "@/hooks/blogs";

export const Articles: FC = () => {
  const blogs = useBlogs();

  return (
    <div className="space-y-9">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {blogs.data?.data.map((item) => (
          <Article item={item} key={item.id} />
        ))}
      </div>
      {blogs.data && <Pagination {...blogs.data.meta} />}
    </div>
  );
};

export const Article: FC<{ item: BlogItem }> = ({ item }) => {
  return (
    <div className={"bg-gray-100 p-4 rounded-3xl space-y-3"}>
      <Link href={`/blogs/${item.slug}`} className={"block"}>
        <Image
          className={"block object-cover w-full rounded-3xl h-72"}
          src={item.featured_image}
          alt={item.title}
          width={230}
          height={330}
        />
      </Link>
      <div className="flex justify-between items-center gap-12">
        <div className={"text-[#4E4E4E]"}>
          <Link
            href={`/blogs/${item.slug}`}
            className={"font-bold text-sm md:text-base"}
          >
            {item.title}
          </Link>
          <p className={"text-xs md:text-sm line-clamp-2"}>
            {item.description}
          </p>
        </div>
        <div>
          <ChevronRight className={"text-black size-7"} />
        </div>
      </div>
      <div className="h-[0.09rem] bg-gray-200"></div>
      <div className="space-y-3">
        <div className={"flex gap-1"}>
          <Link
            href={`/blogs?category=${item.category.id}`}
            scroll={false}
            className={"bg-[#E0E2FF] text-xs px-3 py-1 rounded-full text-black"}
          >
            {item.category.name}
          </Link>
          <span
            className={"bg-gray-200 text-xs px-3 py-1 rounded-full text-black"}
          >
            {item.read_time}
          </span>
        </div>
        <div>
          <Link
            href={`/blogs/${item.slug}`}
            className={
              "text-[#EF4920] flex items-center space-x-1 text-xs md:text-sm"
            }
          >
            <span>Read article</span>
            <ChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};
