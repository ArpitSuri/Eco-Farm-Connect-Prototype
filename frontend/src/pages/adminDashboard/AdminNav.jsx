import React from 'react'
import { Link } from 'react-router-dom'

const AdminNav = () => {
  return (
    <header className="bg-green-700">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <h4 className="text-2xl font-bold text-white">Admin Portal</h4>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link className="text-white" to="/admin-dashboard"> Profile </Link>
                </li>

                <li>
                  <Link className="text-white" to="all-farmers"> All Farmers</Link>
                </li>

                <li>
                  <Link className="text-white" to="all-industries"> All Industries</Link>
                </li>
                <li  className="text-white" onClick={()=>{
                  localStorage.removeItem('user');
                  window.location.href = '/';
                }}>logout</li>

                
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AdminNav
