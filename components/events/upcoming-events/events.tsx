"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Pagination } from "@/components/common/pagination";
import { type Event } from "@/helpers/events";
import { useEvents } from "@/hooks/events";

export const Events: FC = () => {
  const events = useEvents();

  return (
    <div className="space-y-9">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {events.data?.data.map((event) => (
          <Event event={event} key={event.id} />
        ))}
      </div>
      {events.data && <Pagination {...events.data.meta} />}
    </div>
  );
};

const Event: FC<{ event: Event }> = ({ event }) => {
  return (
    <div className={"bg-gray-100 p-4 rounded-3xl space-y-3"}>
      <Link href={`/events/${event.id}`} className={"block"}>
        <Image
          className={"block object-cover w-full rounded-3xl h-72"}
          src={event.featured_image}
          alt={event.title}
          width={230}
          height={330}
        />
      </Link>
      <div className="flex justify-between items-center gap-12">
        <div className={"text-[#4E4E4E]"}>
          <Link
            href={`/events/${event.id}`}
            className={"font-bold text-sm md:text-base"}
          >
            {event.title}
          </Link>
          <p className={"text-xs md:text-sm"}>{event.date}</p>
        </div>
        <div>
          <ChevronRight className={"text-black size-7"} />
        </div>
      </div>
      <div className="h-[0.09rem] bg-gray-200"></div>
      <div className={"flex gap-1"}>
        <span
          className={
            "bg-[#E0E2FF] text-xs px-3 py-1 rounded-full capitalize text-black"
          }
        >
          {event.type}
        </span>
        <span
          className={
            "bg-gray-200 text-xs px-3 py-1 rounded-full capitalize text-black"
          }
        >
          {event.access}
        </span>
      </div>
    </div>
  );
};
