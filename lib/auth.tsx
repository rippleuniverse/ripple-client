import { ReactNode } from "react";
import { BriefcaseDuotone } from "@/components/common/icons/briefcase-duotone";
import { CalenderDuotone } from "@/components/common/icons/calender-duotone";
import { DocumentDuotone } from "@/components/common/icons/document-duotone";
import { MicrophoneDuotone } from "@/components/common/icons/microphone-duotone";
import { ShopDuotone } from "@/components/common/icons/shop-duotone";
import { UserAddDuotone } from "@/components/common/icons/user-add-duotone";
import { UserEditDuotone } from "@/components/common/icons/user-edit-duotone";

export type NavLink = {
  name: string;
  link: string;
  blank?: boolean;
  icon: ReactNode;
};

export const NAV_LINKS: NavLink[] = [
  {
    name: "About",
    link: "/about",
    icon: <UserAddDuotone size={24} />,
  },
  {
    name: "Programs",
    link: "/programs",
    icon: <DocumentDuotone size={24} />,
  },
  {
    name: "Events",
    link: "/events",
    icon: <CalenderDuotone size={24} />,
  },
  {
    name: "Shop",
    link: "/shop",
    icon: <ShopDuotone size={24} />,
  },
  {
    name: "Become a creator",
    link: "https://tally.so/r/nr9PE2",
    blank: true,
    icon: <UserEditDuotone size={24} />,
  },
  {
    name: "Jobs",
    link: "/jobs",
    icon: <BriefcaseDuotone size={24} />,
  },
  {
    name: "Blog & Podcasts",
    link: "/blogs",
    icon: <MicrophoneDuotone size={24} />,
  },
];
