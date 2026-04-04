import { FC } from "react";
import { Container } from "@/components/common/container";
import { Testimonial } from "@/components/programs/testimonials";
import { madeSoulmaze } from "@/lib/fonts";

export const AboutContent: FC = () => {
  return (
    <Container className="space-y-12 max-w-5xl py-8 text-base md:text-lg">
      <h2 className={`${madeSoulmaze.className} text-xl`}>Breifing</h2>
      <p>
        Ripple Universe is a cutting-edge creative tech startup dedicated to
        guiding individuals from diverse backgrounds into the cosmos of creative
        tech. We understand the challenges faced by those transitioning into
        creative tech and are committed to BUILDING confidence and skill
        development in this post-modern era.
      </p>
      <p>
        Our innovative immersive experiences, galleries, podcasts, programs, and
        culture driven storytelling place us as No 1 in Africa. We empower our
        people to embrace new opportunities and thrive in their careers. At
        Ripple Universe, we believe that everyone deserves a place in the tech
        landscape, and we are here to help make that happen.
      </p>
      <hr className="border-none bg-gray-200 h-[0.05rem]" />
      <div className="space-y-3">
        <h2 className={`${madeSoulmaze.className} text-xl`}>
          Address & contact
        </h2>
        <p>
          Lagos - 3rd Avenue Osapa London Garden&apos;s Estate, Lekki, Lagos
          State, Nigeria
        </p>
        <p>
          London - 167-169 Great Portland Street, 5th Floor, London, United
          Kingdom
        </p>
        <p>Contact Number - +44 7985 242146</p>
      </div>
      <hr className="border-none bg-gray-200 h-[0.05rem]" />

      <div className="space-y-3">
        <h2 className={`${madeSoulmaze.className} text-xl`}>Testimonials</h2>

        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/*@ts-expect-error*/}
        <marquee
          behavior="smooth"
          className={"flex gap-4 mt-6 relative z-10"}
          direction="left"
        >
          <div className="flex gap-4">
            <Testimonial
              className="bg-gray-50"
              name={"Dr Amanda K."}
              testimonial={
                "Ripple guided me during what I thought was my transition into the tech industry, but ended up being transferring my already existing skills and making personalized for my niche in design"
              }
            />
            <Testimonial
              className="bg-gray-50"
              name={"Victor A."}
              testimonial={
                "I passed my first tech job interview. Honestly Ripple, thank you so much for the creative space, and all the support and mentorship. You've really created a safe space honestly."
              }
            />
            <Testimonial
              className="bg-gray-50"
              name={"Joyce A."}
              testimonial={
                "Working with Ripple Universe gave me the chance to be involved in real digital operations and learn hands-on. It opened doors for me professionally and helped me secure a role where I could apply the skills I gained. I'm grateful for the experience and growth it provided."
              }
            />
          </div>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/*@ts-expect-error*/}
        </marquee>
      </div>
    </Container>
  );
};
