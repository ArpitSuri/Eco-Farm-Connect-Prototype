import React from 'react'
import FarmerNav from './FarmerNav'
import { Outlet } from 'react-router-dom'

const FarmerDashboard = () => {
  return (
    <div>
      <FarmerNav/>
      <div>
        <Outlet/> {/* Nested pages will be rendered here */}
      </div>
    </div>
  )
}

export default FarmerDashboard;
