import type { Metadata } from "next";
import { DashboardHeader } from "@/components/common/dashboard-header";
import { ActivePrograms } from "@/components/dashboard-home/active-programs";
import { DigitalPass } from "@/components/dashboard-home/digital-pass";
import { OtherItems } from "@/components/dashboard-home/other-items";
import { RecentPurchases } from "@/components/dashboard-home/recent-purchases";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function Page() {
  return (
    <>
      <DashboardHeader />
      <DigitalPass />
      <ActivePrograms />
      <OtherItems />
      <RecentPurchases />
    </>
  );
}
