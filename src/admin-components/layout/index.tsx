import React from 'react'
import AdminSidebar from './sidebar'
import AdminHeader from './header'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className='relative w-full h-full bg-[#F8F8FA] dark:bg-[#101011] dark:bg-dark-skin'>
         <AdminSidebar />
         <div className="relative min-h-screen flex flex-col transition-all duration-400 ease-in-out ps-64">
            <div className="sticky top-0 z-10">
               <AdminHeader />
            </div>
            <div className="flex-grow">
               {children}
            </div>
            <div className="webx-admin-footer p-2">
               <p className="text-sm opacity-65">&copy; {new Date().getFullYear()} Arup Maity. All rights reserved.</p>
            </div>
         </div>
      </div>
   )
}

export default AdminLayout