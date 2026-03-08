import Link from "next/link";
import { FC } from "react";
import { NAV_LINKS } from "@/lib/auth";

export const FooterLinks: FC = () => {
  return (
    <div className={"lg:w-4/12 grid grid-cols-1 md:grid-cols-2 gap-8"}>
      <ul className={"space-y-4"}>
        {NAV_LINKS.map((link, index) => (
          <li key={index}>
            <Link
              href={link.link}
              className={"text-[#F5F3F0B2] text-sm md:text-base"}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className={"space-y-6"}>
        <div className={"text-white"}>
          <h4 className={"text-sm md:text-base font-medium"}>Address:</h4>
          <p className={"text-xs md:text-base"}>
            Lagos - 3rd Avenue Osapa London Garden’s Estate, Lekki, Lagos State,
            Nigeria
          </p>
          <p className={"text-xs md:text-base"}>
            London - 167-169 Great Portland Street, 5th Floor, London, United
            Kingdom
          </p>
        </div>
        <div className={"text-white"}>
          <h4 className={"text-sm md:text-base font-medium"}>Contact:</h4>
          <p className={"underline text-xs md:text-base"}>+44 7985 242146</p>
          <p className={"underline text-xs md:text-base"}>
            <Link href={"mailto:contact@rippleuniverse.org"}>
              contact@rippleuniverse.org
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
