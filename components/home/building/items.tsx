import Image from "next/image";
import { FC, PropsWithChildren } from "react";
import { madeSoulmaze } from "@/lib/fonts";

type BuildingItemProps = PropsWithChildren<{
  title: string;
  image: string;
}>;

export const BuildingItems: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
      <BuildingItem title={"LEARN"} image={"/images/home/building-1.png"}>
        In our community, you’ll find structured programs, courses, and labs to
        help you get started in creative AI and tech, so you can scale from
        learning to earning.
      </BuildingItem>
      <BuildingItem title={"Experience"} image={"/images/home/building-2.png"}>
        Take part in events, galleries, masterclasses, and hands-on experiences
        that bring learning and culture together, making every moment memorable.
      </BuildingItem>{" "}
      <BuildingItem title={"Create"} image={"/images/home/building-3.png"}>
        Build, experiment, show your work, and team up with people from around
        the world, giving you the freedom to create.
      </BuildingItem>{" "}
      <BuildingItem title={"Connect"} image={"/images/home/building-4.png"}>
        Join a growing network of creatives, technologists, leaders, and
        partners, so you always have new connections.
      </BuildingItem>
    </div>
  );
};

const BuildingItem: FC<BuildingItemProps> = ({ title, image, children }) => {
  return (
    <div
      className={
        "bg-[#2C2C2C] rounded-4xl p-6 space-y-4 overflow-hidden flex flex-col justify-between"
      }
    >
      <div className="space-y-3">
        <h3
          className={`${madeSoulmaze.className} text-white text-xl md:text-3xl uppercase`}
        >
          {title}
        </h3>
        <p className={"text-white text-xs md:text-sm lg:text-base"}>
          {children}
        </p>
      </div>
      <div className={"flex justify-end"}>
        <Image
          src={image}
          alt={"Learn"}
          width={255}
          height={200}
          className={"object-cover w-36 md:w-48 translate-x-4 translate-y-8"}
        />
      </div>
    </div>
  );
};
