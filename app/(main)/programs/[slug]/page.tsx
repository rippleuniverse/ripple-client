import { Metadata } from "next";
import { HeadSection } from "@/components/home/head-section";
import { CourseReviews } from "@/components/programs/course-reviews";
import { ProgramHero } from "@/components/programs/hero/program-hero";
import { LearnSkills } from "@/components/programs/learn-skills";
import { OtherCourses } from "@/components/programs/other-courses";

export const metadata: Metadata = {
  title: "Program",
  description: "Learn the Skills shaping the future",
};

export default function Page() {
  return (
    <>
      <HeadSection>
        <ProgramHero />
      </HeadSection>
      <div className={"bg-[#FFFFE9] py-12"}>
        <LearnSkills />
      </div>
      <CourseReviews />
      <OtherCourses />
    </>
  );
}
