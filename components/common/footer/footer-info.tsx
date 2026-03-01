import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import { NavLogo } from "@/components/common/header";
import { X } from "@/components/common/icons/x";

export const FooterInfo = () => {
  return (
    <div className={"w-full lg:w-8/12 space-y-10"}>
      <div>
        <NavLogo />
      </div>
      <p className={"text-white text-xs md:text-sm lg:text-base md:w-7/12"}>
        Ripple Universe™ equips creatives, technologists, and innovators with
        the skills, community, and culture needed to thrive in AI and emerging
        tech.
      </p>
      <div className="flex gap-3">
        <Link
          target="_blank"
          href={"https://www.facebook.com/share/17EtUn71jv/?mibextid=wwXIfr"}
          className={"text-white"}
        >
          <Facebook className={"size-6"} />
        </Link>
        <Link
          target="_blank"
          href={
            " https://www.instagram.com/ripple.universe?igsh=MW94YnZjenZyYnFlZA=="
          }
          className={"text-white"}
        >
          <Instagram className={"size-6"} />
        </Link>
        <Link
          href={"https://x.com/ripple_universe?s=21"}
          target="_blank"
          className={"text-white"}
        >
          <X size={22} />
        </Link>
        <Link
          target="_blank"
          href={"https://www.linkedin.com/company/ripple-universe"}
          className={"text-white"}
        >
          <Linkedin className={"size-6"} />
        </Link>
        <Link
          target="_blank"
          href={"https://youtube.com/@rippleuniversestudio?si=L8pSkL3i2Ld2haLi"}
          className={"text-white"}
        >
          <Youtube className={"size-6"} />
        </Link>
      </div>
      <div>
        <p className="text-white text-xs">
          <Link
            href={
              "https://www.instagram.com/ripple.pods?igsh=MWZkZWs2YjAwN204dA=="
            }
            target="_blank"
          >
            Ripple podcast
          </Link>
        </p>
      </div>
    </div>
  );
};
