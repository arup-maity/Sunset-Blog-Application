import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarGroup,
   SidebarHeader,
} from "@/components/ui/sidebar"
import SidebarMenu from "./SidebarMenu"

export function AppSidebar() {
   return (
      <Sidebar className="bg-black">
         {/* <SidebarHeader /> */}
         <SidebarContent>
            <SidebarMenu />
         </SidebarContent>
         {/* <SidebarFooter /> */}
      </Sidebar>
   )
}
