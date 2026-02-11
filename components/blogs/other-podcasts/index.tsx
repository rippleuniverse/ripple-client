"use client";

import { FC } from "react";
import { Podcast } from "@/components/blogs/podcast-items/podcasts";
import { Container } from "@/components/common/container";
import { useRelatedPodcasts } from "@/hooks/podcasts";
import { madeSoulmaze } from "@/lib/fonts";

export const OtherPodcasts: FC = () => {
  const podcasts = useRelatedPodcasts();

  if (!podcasts.data?.length) {
    return null;
  }

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
            other pods <span className={"text-secondary"}>for you</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 *:bg-white">
          {podcasts.data?.map((item) => (
            <Podcast podcast={item} key={item.id} />
          ))}
        </div>
      </Container>
    </section>
  );
};
