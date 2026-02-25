import { Header } from "@/components/settings/header";
import { SidebarLinks } from "@/components/settings/sidebar-links";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div
        className={"flex flex-col xl:flex-row gap-6 bg-white p-4 rounded-xl"}
      >
        <SidebarLinks />
        <div className={"space-y-5 xl:w-[80%]"}>{children}</div>
      </div>
    </>
  );
}
