import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { madeSoulmaze } from "@/lib/fonts";

export const Hero: FC = () => {
  return (
    <section>
      <Container
        className={
          "max-w-4xl text-center space-y-6 md:space-y-8 overflow-hidden relative"
        }
      >
        <h1
          className={`text-white text-center ${madeSoulmaze.className} text-2xl md:text-3xl lg:text-5xl xl:text-6xl`}
        >
          Creative <br /> <span className={"text-secondary"}>Tech Lab</span> for
          the <br /> Future
        </h1>
        <p className={"text-[#F5F3F0B2] text-xs md:text-base lg:text-lg"}>
          Ripple Universe™ equips creatives, technologists, and innovators with
          the skills, community, and culture needed to thrive in AI and emerging
          tech.
        </p>
        <div className={"flex justify-center"}>
          <Button asChild variant={"secondary"} size={"lg"}>
            <Link href={"/signup"}>Join the Community</Link>
          </Button>
        </div>
        <div className={""}>
          <Image
            src={"/images/home/hero-1.png"}
            className={"object-cover w-full"}
            alt={"Hero 1"}
            width={900}
            height={625}
          />
        </div>
      </Container>
    </section>
  );
};
