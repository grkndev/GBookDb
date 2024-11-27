"use client";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Page({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const currentPath = path.split("/").pop() || "";
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
               

                {path.split("/").length > 1 &&
                  path
                    .split("/")
                    .slice(1, path.split("/").length - 1)
                    .map((subtab, index) => (
                      <SubTab
                        key={index}
                        subtab={subtab}
                        href={`/${path
                          .split("/")
                          .slice(1, index + 2)
                          .join("/")}`}
                      />
                    ))}

                {path.split("/").length > 0 && (
                  <BreadcrumbItem>
                    <BreadcrumbPage>
                      {currentPath.charAt(0).toUpperCase() +
                        currentPath.slice(1)}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
function SubTab({ subtab, href }: { subtab: string; href: string }) {
  return (
    <>
      <BreadcrumbItem>
        <BreadcrumbLink href={href}>
          {subtab.charAt(0).toUpperCase() + subtab.slice(1)}
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator className="hidden md:block" />
    </>
  );
}
