import type { Metadata } from "next";
import { LanguageRegion } from "@/components/settings/language-region";

export const metadata: Metadata = {
  title: "Settings",
  description: "Settings",
};

export default function Page() {
  return (
    <>
      <LanguageRegion />
    </>
  );
}
