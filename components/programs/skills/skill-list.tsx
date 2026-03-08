"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Pagination } from "@/components/common/pagination";
import { Program as ProgramType } from "@/helpers/programs";
import { usePrice } from "@/hooks/common/currency";
import { usePrograms } from "@/hooks/programs";
import { currencyFormatter } from "@/lib/utils";

export const SkillList: FC = () => {
  const programs = usePrograms();

  return (
    <div
      className={"text-[#F8F8F8] rounded-3xl px-6 py-8 bg-[#F8F8F8] space-y-6"}
    >
      <div className="px-3 py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 rounded-3xl">
        {programs.data?.data.map((program) => (
          <Program key={program.id} program={program} />
        ))}
      </div>
      {programs.data && <Pagination {...programs.data.meta} />}
    </div>
  );
};

export const Program: FC<{ program: ProgramType }> = ({ program }) => {
  const price = usePrice(program.price);

  return (
    <div className={"bg-white p-4 rounded-3xl space-y-3"}>
      <Link href={`/programs/${program.id}`} className={"block"}>
        <Image
          className={"block object-cover w-full rounded-3xl h-72"}
          src={program.featured_image}
          alt={program.name}
          width={230}
          height={330}
        />
      </Link>
      <div className="flex items-center gap-12">
        <div className={"text-[#4E4E4E]"}>
          <Link
            href={`/programs/${program.id}`}
            className={"font-bold text-sm md:text-base"}
          >
            {program.name}
          </Link>
          <p className={"text-xs md:text-sm"}>{program.author}</p>
        </div>
        <div>
          <ChevronRight className={"text-black size-7"} />
        </div>
      </div>
      <div className={"flex gap-1"}>
        <span
          className={
            "bg-[#FF81D1] text-xs font-medium px-3 py-1 rounded-full text-black capitalize"
          }
        >
          {program.experience_level}
        </span>
        <span
          className={
            "bg-gray-200 text-xs font-medium px-3 py-1 rounded-full text-black"
          }
        >
          {program.rating.avg_rating}
        </span>
      </div>
      {price && (
        <h2 className={"text-black font-bold text-xl md:text-2xl"}>
          {currencyFormatter(price.currency, price.amount)}
        </h2>
      )}
    </div>
  );
};
