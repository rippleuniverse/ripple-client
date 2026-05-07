"use client";

import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { Job } from "@/components/jobs/roles";
import { useHomeRolesOverview } from "@/hooks/roles";
import { madeSoulmaze, manRope } from "@/lib/fonts";

export const Jobs: FC = () => {
  const roles = useHomeRolesOverview();

  return (
    <div className={"bg-[#E9FFEC] rounded-xl p-8 w-full xl:w-9/12 space-y-4"}>
      <div className="flex justify-between">
        <h2
          className={`${madeSoulmaze.className} text-lg md:text-xl lg:text-2xl xl:text-[1.5rem] uppercase`}
        >
          Ripple <br /> <span className="text-secondary">jobs</span>
        </h2>
        <Button variant={"outline"} asChild>
          <Link href={"/jobs"}>Explore all Jobs</Link>
        </Button>
      </div>
      <p className={"text-sm md:text-base max-w-sm"}>
        Where creative tech careers begin. Opportunities, freelance gigs, and
        career pathways curated for the Ripple community.
      </p>

      <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
        {roles.data?.map((role) => (
          <Job role={role} key={role.id} />
        ))}
      </div>
    </div>
  );
};
