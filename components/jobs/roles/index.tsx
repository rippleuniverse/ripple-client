"use client";

import { ArrowRight, Dot } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Container } from "@/components/common/container";
import { Pagination } from "@/components/common/pagination";
import { OpenRole } from "@/helpers/roles";
import { useOpenRoles } from "@/hooks/roles";
import { manRope } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const Roles: FC = () => {
  const roles = useOpenRoles();

  return (
    <section className={"py-12"}>
      <Container className={"max-w-7xl space-y-12"}>
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
          {roles.data?.data.map((role) => (
            <Job
              key={role.id}
              className={"border-[0.15rem] border-[#F2F2F2]"}
              role={role}
            />
          ))}
        </div>
        {roles.data && <Pagination {...roles.data.meta} />}
      </Container>
    </section>
  );
};

type JobProps = {
  role: OpenRole;
  className?: string;
};

export const Job: FC<JobProps> = ({ role, className }) => {
  const c = cn("rounded-xl bg-white py-7 px-5 space-y-4", className);

  return (
    <div className={c}>
      <div className={`flex justify-between ${manRope.className}`}>
        <Link
          href={`/jobs/${role.id}`}
          className={"font-medium text-base md:text-lg hover:text-[#FF6C24]"}
        >
          <span className={"max-w-56 block"}>{role.name}</span>
        </Link>
        <button
          className={
            "rounded-full bg-[#FFF2E7] w-10 h-8 md:h-10 flex justify-center items-center"
          }
        >
          <ArrowRight className={"text-[#FF6C24] size-4 md:size-6"} />
        </button>
      </div>
      <p
        className={
          "text-[#696969] flex items-center space-x-0 md:space-x-1 text-xs md:text-sm lg:text-base"
        }
      >
        <span className={"line-clamp-1"}>{role.company_location}</span> <Dot />{" "}
        <span>Location</span>
      </p>
      <div className={"flex flex-wrap items-center gap-4"}>
        <span
          className={
            "bg-[#F5FAEF] text-[#71AC36] text-[0.7rem] px-2 py-1 rounded-xl capitalize"
          }
        >
          {role.type.replace("_", " ")}
        </span>
        <span
          className={
            "bg-[#EEF6FC] text-[#399AD6] text-[0.7rem] px-2 py-1 rounded-xl capitalize"
          }
        >
          {role.experience_level}
        </span>
        <span
          className={
            "bg-[#FEEFEC] text-[#EF4920] text-[0.7rem] px-2 py-1 rounded-xl capitalize"
          }
        >
          {role.style.replace("_", " ")}
        </span>
      </div>
    </div>
  );
};
