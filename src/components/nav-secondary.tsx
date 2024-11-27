import * as React from "react";
import { type LucideIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useTheme } from "next-themes";
export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
  }[];
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const { setTheme, theme } = useTheme();
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="ml-2 flex gap-2 flex-row items-center">
              <span>Dark Mode: </span>
              <Switch
                checked={theme === "dark" ? true : false}
                onCheckedChange={(e) => {
                  if (e) setTheme("dark");
                  else setTheme("light");
                }}
              />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
