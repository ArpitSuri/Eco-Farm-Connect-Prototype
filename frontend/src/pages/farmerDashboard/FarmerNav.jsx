// import React, { useState } from 'react';
// import { Plus, Bell, User, LogOut, Edit, Trash, Package, BarChart3, DollarSign, Search, Filter, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// const FarmerNav = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between bg-gradient-to-r from-green-700 to-emerald-600 shadow-lg p-4">
//           <motion.span 
//             className="text-2xl font-bold text-white"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             Farmer Portal
//           </motion.span>
//           <div className="flex items-center space-x-6">
//             <motion.button 
//               className="relative"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Bell className="h-6 w-6 text-white hover:text-white transition-colors" />
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//                 3
//               </span>
//             </motion.button>
//             <motion.button 
//               className="flex items-center space-x-2 text-white hover:text-white transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <User className="h-6 w-6" />
//               <span>Profile</span>
//             </motion.button>
//             <motion.button 
//               className="text-red-500 hover:text-red-600 transition-colors"
//               whileHover={{ scale: 1.1, rotate: 90 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <LogOut className="h-6 w-6" />
//             </motion.button>
//           </div>
//         </div>
//   )
// }

// export default FarmerNav

import React from 'react'
import { Link } from 'react-router-dom'
import NotificationPanel from '../../components/NotificationPanel';

const FarmerNav = () => {
  return (
    <header className="bg-green-700">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <h4 className="text-2xl font-bold text-white">Farmer Portal</h4>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link className="text-white" to="/farmer-dashboard"> Profile </Link>
                </li>

                <li>
                  <Link className="text-white" to="/farmer-dashboard/waste-submission"> Waste Submission </Link>
                </li>
                <li  className="text-white" onClick={()=>{
                  localStorage.removeItem('user');
                  window.location.href = '/';
                }}>logout</li>

                 <li>
                  <NotificationPanel />
                </li> 

                {/* <li>
                  <Link className="text-white" to="/farmer-dashboard/notifications"> Notification </Link>
                </li>  */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default FarmerNav


