import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNav from './AdminNav'

const AdminDashboard = () => {
  return (
    <div>
    <AdminNav/>
    <div>
      <Outlet/> {/* Nested pages will be rendered here */}
    </div>
  </div>
  )
}

export default AdminDashboard
