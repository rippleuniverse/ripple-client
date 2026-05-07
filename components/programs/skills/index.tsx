"use client";

import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { BulbMoney } from "@/components/common/icons/bulb-money";
import { Connect } from "@/components/common/icons/connect";
import { Grid } from "@/components/common/icons/grid";
import { Laptop } from "@/components/common/icons/laptop";
import { Particles } from "@/components/common/icons/particles";
import { Security } from "@/components/common/icons/security";
import { Stars } from "@/components/common/icons/stars";
import { Search } from "@/components/common/search";
import { SkillList } from "@/components/programs/skills/skill-list";
import { useFilter } from "@/hooks/common/filter";
import { useProgramCategories } from "@/hooks/programs";
import { creatoDisplay, madeSoulmaze } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const Skills: FC = () => {
  return (
    <section className={"pt-7 pb-3 px-4 rounded-2xl relative overflow-hidden"}>
      <Image
        src={"/images/programs/skills.png"}
        width={1600}
        height={580}
        alt={"Skills"}
        className={"absolute -top-36"}
      />
      <Container className={"space-y-8 max-w-2xl"}>
        <h2
          className={`text-center ${madeSoulmaze.className} text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase`}
        >
          Skills to transform <br /> your life and{" "}
          <span className={"text-secondary"}>career</span>
        </h2>
        <Search placeholder={"Search for courses or skill"} />
        <Categories />
      </Container>
    </section>
  );
};

export const Categories: FC = () => {
  const categories = useProgramCategories();
  // TODO: Filter is broken, fix
  const { filterValue, handleFilter, filter } = useFilter("category");

  return (
    <div className={"space-y-4"}>
      <h3
        className={`text-base md:text-xl lg:text-2xl font-bold text-center ${creatoDisplay.className}`}
      >
        Explore Categories
      </h3>
      <div
        className={
          "flex justify-center md:items-center gap-2 md:gap-3 flex-wrap"
        }
      >
        <Button
          onClick={() => handleFilter("")}
          className={cn(
            "text-xs md:text-sm",
            !filter ? "bg-black text-white" : "bg-[#F5F5F5] text-black",
          )}
          variant={"ghost"}
        >
          <span>All</span>
        </Button>
        {categories.data?.map((category) => (
          <Button
            onClick={() => handleFilter(category.id)}
            key={category.id}
            className={cn(
              "text-xs md:text-sm",
              category.id === filterValue
                ? "bg-black text-white"
                : "bg-[#F5F5F5] text-black",
            )}
            variant={"ghost"}
          >
            <span>{category.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
