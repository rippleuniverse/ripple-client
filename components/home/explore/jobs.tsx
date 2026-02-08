import { ArrowRight, Dot } from "lucide-react";
import Link from "next/link";
import { ComponentProps, FC } from "react";
import { Button } from "@/components/common/button";
import { OpenRole } from "@/helpers/roles";
import { madeSoulmaze, manRope } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const Jobs: FC = () => {
  return (
    <div className={"bg-[#E9FFEC] rounded-xl p-8 w-full xl:w-9/12 space-y-4"}>
      <div className="flex justify-between">
        <h2
          className={`${madeSoulmaze.className} text-lg md:text-xl lg:text-2xl xl:text-[1.5rem] uppercase`}
        >
          Ripple <br /> <span className="text-secondary">jobs</span>
        </h2>
        <Button variant={"outline"} asChild>
          <Link href={"/"}>Explore all Jobs</Link>
        </Button>
      </div>
      <p className={"text-sm md:text-base max-w-sm"}>
        Discover jobs, internships, and opportunities created and curated by
        Ripple.
      </p>

      <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
        {/*<Job title={"Senior Software Developer"} location={"Google"} />*/}
        {/*<Job title={"Senior Software Developer"} location={"Google"} />*/}
        {/*<Job title={"Senior Software Developer"} location={"Google"} />*/}
        {/*<Job title={"Senior Software Developer"} location={"Google"} />*/}
        {/*<Job title={"Senior Software Developer"} location={"Google"} />*/}
        {/*<Job title={"Senior Software Developer"} location={"Google"} />*/}
      </div>
    </div>
  );
};
