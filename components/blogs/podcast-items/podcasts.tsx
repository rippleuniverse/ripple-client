"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Pagination } from "@/components/common/pagination";
import { Podcast as PodcastType } from "@/helpers/podcasts";
import { usePodcasts } from "@/hooks/podcasts";

export const Podcasts: FC = () => {
  const podcasts = usePodcasts();
  return (
    <div className="space-y-9">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {podcasts.data?.data.map((podcast) => (
          <Podcast podcast={podcast} key={podcast.id} />
        ))}
      </div>
      {podcasts.data && <Pagination {...podcasts.data.meta} />}
    </div>
  );
};

export const Podcast: FC<{ podcast: PodcastType }> = ({ podcast }) => {
  return (
    <div className={"bg-gray-100 p-4 rounded-3xl space-y-3"}>
      <Link href={`/podcasts/${podcast.id}`} className={"block"}>
        <Image
          className={"block object-cover w-full rounded-3xl h-72"}
          src={podcast.featured_image}
          alt={podcast.title}
          width={230}
          height={330}
        />
      </Link>
      <div className="flex justify-between items-center gap-12">
        <div className={"text-[#4E4E4E]"}>
          <Link
            href={`/podcasts/${podcast.id}`}
            className={"font-bold text-sm md:text-base"}
          >
            {podcast.title}
          </Link>
          <p className={"text-xs md:text-sm line-clamp-2"}>
            {podcast.description}
          </p>
        </div>
        <div>
          <ChevronRight className={"text-black size-7"} />
        </div>
      </div>
      <div className="h-[0.09rem] bg-gray-200"></div>
      <div className="space-y-3">
        <div className={"flex gap-1"}>
          <span
            className={"bg-[#E0E2FF] text-xs px-3 py-1 rounded-full text-black"}
          >
            {podcast.category?.name}
          </span>
          <span
            className={"bg-gray-200 text-xs px-3 py-1 rounded-full text-black"}
          >
            {podcast.duration_in_minutes}{" "}
            {podcast.duration_in_minutes > 1 ? "mins" : "min"}
          </span>
        </div>
        <div>
          <Link
            href={`/podcasts/${podcast.id}`}
            className={
              "text-[#EF4920] flex items-center space-x-1 text-xs md:text-sm"
            }
          >
            <span>Listen now</span>
            <ChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};
