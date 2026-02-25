import { DashboardFooter } from "@/components/common/dashboard-footer";
import { DashboardSidebar } from "@/components/common/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={"flex gap-6 p-4 bg-[#FAFAFA]"}>
      <DashboardSidebar />
      <main className={"space-y-12 xl:w-10/12 w-full"}>
        {children}
        <div className={"h-[0.06rem] bg-gray-300"}></div>
        <DashboardFooter />
      </main>
    </div>
  );
}
