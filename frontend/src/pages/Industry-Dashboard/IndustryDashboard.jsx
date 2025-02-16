import React from 'react'
import IndustryNav from './IndustryNav'
import { Outlet } from 'react-router-dom'

const IndustryDashboard = () => {
  return (
    <div>
      <IndustryNav/>
      <div>
        <Outlet/> {/* Nested pages will be rendered here */}
      </div>
    </div>
  )
}

export default IndustryDashboard
