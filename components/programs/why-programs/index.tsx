import { FC, PropsWithChildren } from "react";
import { Container } from "@/components/common/container";
import { madeSoulmaze } from "@/lib/fonts";

export const WhyPrograms: FC = () => {
  return (
    <section className={"bg-[#FFECF7] rounded-2xl py-8 relative"}>
      <Container className={"space-y-4"}>
        <h2
          className={`text-center ${madeSoulmaze.className} text-black text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase`}
        >
          why ripple <span className={"text-[#DE03B5]"}>programs?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Item title={"expertly curated"}>
            Ripple programs are designed around real-world creative tech paths
            from AI, design to emerging digital roles
          </Item>
          <Item title={"Globally relevant"}>
            Ripple programs are informed by diverse cultural perspectives and
            real-world contexts, making them relevant across regions and
            industries.
          </Item>
          <Item title={"PREMIUM & FUTURE FACING"}>
            Each Ripple program is intentionally designed to create clarity,
            confidence, and creative direction. So learning feels relevant,
            human, and future-ready
          </Item>
        </div>
      </Container>
    </section>
  );
};

type ItemProps = PropsWithChildren<{
  title: string;
}>;

export const Item: FC<ItemProps> = ({ title, children }) => {
  return (
    <div className={"bg-white rounded-xl p-6 space-y-3"}>
      <h3
        className={`${madeSoulmaze.className} text-lg md:text-xl lg:text-2xl`}
      >
        {title}
      </h3>
      <p className={"text-xs md:text-sm lg:text-base"}>{children}</p>
    </div>
  );
};
