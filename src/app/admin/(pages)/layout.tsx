import AdminLayout from '@/admin-components/layout'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <AdminLayout>
         {children}
      </AdminLayout>
   )
}

export default Layout