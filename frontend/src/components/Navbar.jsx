// import { Link } from 'react-router-dom';
// import { useState } from 'react';

// import React from 'react'

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };
//   return (
//     <div>
//       {/* Navigation Bar */}
//       <nav className="flex justify-between items-center p-4 bg-green-600 text-white">
//         <div className="text-xl font-bold">EcoFarm-Connect</div>
//         <div className="flex items-center">
//           <Link to="/" className="mx-4">Home</Link>
//           <Link to="/about" className="mx-4">About Us</Link>
//           <Link to="/contact" className="mx-4">Contact Us</Link>
          
//           <div className="relative">
//             <button onClick={toggleDropdown} className="mx-4">
//               Sign Up
//             </button>
//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
//                 <Link to="/signup-farmer" className="block px-4 py-2">Sign Up as Farmer</Link>
//                 <Link to="/signup-industry" className="block px-4 py-2">Sign Up as Industry</Link>
//                 <Link to="/login-industry" className="block px-4 py-2">Login as Industry</Link>
//                 <Link to="/login-farmer" className="block px-4 py-2">Login as Farmer</Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar

import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header className="bg-green-600">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <a className="block text-teal-" href="/">
          <span className="text-white text-2xl ">EcoFarm-Connect</span>
        </a>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-black transition hover:text-gray-500/75" href="/about"> About </a>
            </li>

            <li>
              <a className="text-black transition hover:text-gray-500/75" href="/contact"> Contact </a>
            </li>

            <li>
              <a className="text-black transition hover:text-gray-500/75" href="/login-farmer"> Farmer login </a>
            </li>

            <li>
              <a className="text-black transition hover:text-gray-500/75" href="/login-industry"> Industry login </a>
            </li>

            <li>
              <a className="text-black transition hover:text-gray-500/75" href="/signup-farmer"> Farmer Signup </a>
            </li>

            <li>
              <a className="text-black transition hover:text-gray-500/75" href="/signup-industry"> Industry Signup </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>
    </div>
  )
}

export default Navbar


