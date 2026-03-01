export type NavLink = {
  name: string;
  link: string;
  blank?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  {
    name: "Programs",
    link: "/programs",
  },
  {
    name: "Events",
    link: "/events",
  },
  {
    name: "Shop",
    link: "/shop",
  },
  {
    name: "Insights",
    link: "https://tally.so/r/nr9PE2",
    blank: true,
  },
  {
    name: "Jobs",
    link: "/jobs",
  },
  {
    name: "Blog & Podcasts",
    link: "/blogs",
  },
];
