import type { Metadata } from "next";
import { Heading } from "@/components/settings/heading";
import { PersonalInformation } from "@/components/settings/personal-information";
import { ProfileDetails } from "@/components/settings/profile-details";

export const metadata: Metadata = {
  title: "Account details",
  description: "Account details",
};

export default function Page() {
  return (
    <>
      <Heading>Account details</Heading>
      <div className="flex flex-col xl:flex-row gap-5">
        <ProfileDetails />
        <PersonalInformation />
      </div>
    </>
  );
}
