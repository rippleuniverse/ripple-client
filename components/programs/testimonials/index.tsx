import Image from "next/image";
import { FC } from "react";
import { Container } from "@/components/common/container";
import { aeonik, madeSoulmaze } from "@/lib/fonts";

export const Testimonials: FC = () => {
  return (
    <section className={"bg-black rounded-2xl py-8 relative"}>
      <div
        className={
          "testimonial-fade-left h-64 top-12 w-9 md:w-24 absolute z-20 left-0"
        }
      ></div>
      <div
        className={
          "testimonial-fade-right h-64 top-12 w-9 md:w-24 absolute z-20 right-0 "
        }
      ></div>

      <Container>
        <h2
          className={`text-center ${madeSoulmaze.className} text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase`}
        >
          TESTIMONIALS
        </h2>
      </Container>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/*@ts-expect-error*/}
      <marquee
        behavior="smooth"
        className={"flex gap-4 mt-6 relative z-10"}
        direction="left"
      >
        <div className="flex gap-4">
          <Testimonial
            name={"Dr Amanda K."}
            testimonial={
              "Ripple guided me during what I thought was my transition into the tech industry, but ended up being transferring my already existing skills and making personalized for my niche in design"
            }
          />
          <Testimonial
            name={"Victor A."}
            testimonial={
              "I passed my first tech job interview. Honestly Ripple, thank you so much for the creative space, and all the support and mentorship. You’ve really created a safe space honestly."
            }
          />
          <Testimonial
            name={"Joyce A."}
            testimonial={
              "Working with Ripple Universe gave me the chance to be involved in real digital operations and learn hands-on. It opened doors for me professionally and helped me secure a role where I could apply the skills I gained. I’m grateful for the experience and growth it provided. "
            }
          />
        </div>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/*@ts-expect-error*/}
      </marquee>
    </section>
  );
};

type TestimonialProps = {
  name: string;
  testimonial: string;
};

const Testimonial: FC<TestimonialProps> = ({ testimonial, name }) => {
  return (
    <div
      className={`bg-white px-5 py-6 rounded-3xl h-50 w-[20rem] space-y-4 ${aeonik.className}`}
    >
      <p className={"text-wrap text-sm h-10/12"}>{testimonial}</p>
      <div className="flex items-center gap-3">
        <Image
          src={"/images/programs/testimonial.png"}
          alt={name}
          width={25}
          height={25}
          className={"size-6"}
        />
        <h5 className={`${aeonik.className} font-bold`}>{name}</h5>
      </div>
    </div>
  );
};
