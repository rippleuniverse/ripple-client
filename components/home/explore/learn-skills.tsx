import {
  Bot,
  ChartNoAxesCombined,
  Database,
  Proportions,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { madeSoulmaze } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const LearnSkills: FC<{ className?: string }> = ({ className }) => {
  const c = cn(
    "bg-[#FEE9FF] rounded-xl p-8 w-full  xl:w-3/12 space-y-6",
    className,
  );

  return (
    <div className={c}>
      <div className="space-y-4">
        <h2
          className={`${madeSoulmaze.className} text-lg md:text-xl lg:text-2xl xl:text-[1.5rem] uppercase`}
        >
          Build the <br /> Skills shaping the <br />{" "}
          <span className="text-secondary">future</span>
        </h2>
        <p className={"text-sm md:text-base"}>
          From creative AI fundamentals to advanced tech mastery, Ripple offers
          programs designed for real-world creative careers.
        </p>
        <div>
          <Button variant={"outline"} asChild>
            <Link href={"/programs"}>Explore all programs</Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="bg-white p-3 text-center rounded-2xl">
          <p className={"flex justify-center"}>
            <Shield className={"size-8 stroke-1"} />
          </p>
          <p className={"font-semibold text-xs lg:text-sm xl:text-sm"}>
            Cyber Security
          </p>
        </div>
        <div className="bg-white p-3 text-center rounded-2xl w-28">
          <p className={"flex justify-center"}>
            <Proportions className={"size-8 stroke-1"} />
          </p>
          <p className={"font-semibold text-xs lg:text-sm xl:text-sm"}>UI/UX</p>
        </div>
        <div className="bg-white p-3 text-center rounded-2xl">
          <p className={"flex justify-center"}>
            <Database className={"size-8 stroke-1"} />
          </p>
          <p className={"font-semibold text-xs lg:text-sm xl:text-sm"}>
            Data Science
          </p>
        </div>
        <div className="bg-white p-3 text-center rounded-2xl">
          <p className={"flex justify-center"}>
            <Bot className={"size-8 stroke-1"} />
          </p>
          <p className={"font-semibold text-xs lg:text-sm xl:text-sm"}>
            Create AI
          </p>
        </div>
        <div className="bg-white p-3 text-center rounded-2xl">
          <p className={"flex justify-center"}>
            <ChartNoAxesCombined className={"size-8 stroke-1"} />
          </p>
          <p className={"font-semibold text-xs lg:text-sm xl:text-sm"}>
            Financial Literacy
          </p>
        </div>
      </div>
    </div>
  );
};
