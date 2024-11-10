import React from 'react'
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from './sidebar'
import AdminHeader from './header'
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <SidebarProvider>
         <AppSidebar />
         <main className='w-full bg-gray-100'>
            <AdminHeader />
            <div className="p-4">
               {children}
            </div>
         </main>
      </SidebarProvider>
   )
}

export default AdminLayout