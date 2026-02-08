"use client";

import { ChevronDown, FilterX } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/common/dropdown";
import { Search } from "@/components/common/search";
import { useQueryParams } from "@/hooks/common/query-params";
import { madeSoulmaze } from "@/lib/fonts";

export const OpenRoles: FC = () => {
  return (
    <section className={"py-12"}>
      <Container className={"max-w-4xl space-y-8"}>
        <h2
          className={`text-center text-2xl md:text-3xl lg:text-4xl ${madeSoulmaze.className}`}
        >
          open <span className={"text-[#DE03B5]"}>roles</span>
        </h2>
        <div className="space-y-4">
          <Search
            placeholder={"Search for jobs"}
            inputClassName={"md:w-11/12"}
          />
          <RoleFilter />
        </div>
      </Container>
    </section>
  );
};

const experienceLevels = [
  { label: "All", value: "" },
  { label: "Beginner", value: "beginner" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Advanced", value: "advanced" },
];

const jobTypes = [
  { label: "All", value: "" },
  {
    label: "Full-time",
    value: "full_time",
  },
  {
    label: "Part-time",
    value: "part_time",
  },
  {
    label: "Internship",
    value: "internship",
  },
  {
    label: "Contract",
    value: "contract",
  },
];

const jobStyles = [
  { label: "All", value: "" },
  {
    label: "On-site",
    value: "on_site",
  },
  {
    label: "Remote",
    value: "remote",
  },
  {
    label: "Hybrid",
    value: "hybrid",
  },
];

const RoleFilter: FC = () => {
  const experience = useQueryParams("experience_level");
  const type = useQueryParams("type");
  const style = useQueryParams("style");
  const router = useRouter();

  const handleClearFilters = () => {
    router.push("?", { scroll: false });
  };

  return (
    <div
      className={"flex justify-center md:items-center gap-2 md:gap-6 flex-wrap"}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={"bg-[#F5F5F5] text-xs md:text-sm"}
            variant={"ghost"}
          >
            <span>Experience Level</span>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={"w-56"}>
          {experienceLevels.map((item) => (
            <DropdownMenuItem
              key={item.value}
              role={"button"}
              onClick={() => experience.handleSetQueryParam(item.value)}
            >
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={"bg-[#F5F5F5] text-xs md:text-sm"}
            variant={"ghost"}
          >
            <span>Job type</span>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={"w-56"}>
          {jobTypes.map((item) => (
            <DropdownMenuItem
              key={item.value}
              role={"button"}
              onClick={() => type.handleSetQueryParam(item.value)}
            >
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={"bg-[#F5F5F5] md:text-sm text-xs"}
            variant={"ghost"}
          >
            <span>Job style</span>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={"w-56"}>
          {jobStyles.map((item) => (
            <DropdownMenuItem
              key={item.value}
              role={"button"}
              onClick={() => style.handleSetQueryParam(item.value)}
            >
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        onClick={handleClearFilters}
        className={"hover:text-secondary"}
        variant={"ghost"}
      >
        <span>Clear filters</span>
        <FilterX />
      </Button>
    </div>
  );
};
