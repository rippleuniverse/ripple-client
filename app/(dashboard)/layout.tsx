import { DashboardFooter } from "@/components/common/dashboard-footer";
import { DashboardHeader } from "@/components/common/dashboard-header";
import { DashboardSidebar } from "@/components/common/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={"flex gap-6 p-4 bg-[#FAFAFA]"}>
      <DashboardSidebar />
      <main className={"space-y-12 lg:w-9/12 w-full"}>
        <DashboardHeader />
        {children}
        <div className={"h-[0.06rem] bg-gray-300"}></div>
        <DashboardFooter />
      </main>
    </div>
  );
}
