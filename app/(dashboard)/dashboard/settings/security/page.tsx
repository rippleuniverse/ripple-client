import type { Metadata } from "next";
import { Heading } from "@/components/settings/heading";
import { ActiveSessions } from "@/components/settings/security/active-sessions";
import { ChangePassword } from "@/components/settings/security/change-password";
import { LoginHistory } from "@/components/settings/security/login-history";

export const metadata: Metadata = {
  title: "Security",
  description: "Security",
};

export default function Page() {
  return (
    <>
      <Heading>Security</Heading>
      <div className="flex flex-col xl:flex-row gap-5">
        <div className={"w-full space-y-8"}>
          <ChangePassword />
          {/*<ActiveSessions />*/}
        </div>
        {/*<div className={"xl:w-5/12 space-y-8"}>*/}
        {/*  <LoginHistory />*/}
        {/*</div>*/}
      </div>
    </>
  );
}
