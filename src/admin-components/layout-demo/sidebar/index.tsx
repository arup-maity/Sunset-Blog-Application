import React from 'react'
import SidebarMenu from './SidebarMenu'

const AdminSidebar = () => {
   return (
      <div className='admin-sidebar fixed start-0 bg-[#0c0c0c] dark:bg-[#1A1A1B] transition-all duration-400 ease-in-out z-20'>
         <SidebarMenu />
      </div>
   )
}

export default AdminSidebar