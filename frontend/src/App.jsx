// // import { useState } from 'react'
// // import './App.css'
// // import { BrowserRouter, Route, Routes } from 'react-router-dom'
// // import Home from './pages/publicScreen/Home'
// // import PageNotFound from './pages/PageNotFound'
// // import Signupfarmer from './pages/publicScreen/Signupfarmer'
// // import SignupIndustry from './pages/publicScreen/SignupIndustry'
// // import Navbar from './components/Navbar'
// // import Footer from './components/Footer'
// // import LoginFarmer from './pages/publicScreen/LoginFarmer'
// // import LoginIndustry from './pages/publicScreen/LoginIndustry'
// // import LoginAdmin from './pages/publicScreen/LoginAdmin'
// // import ProtectedRoute from './components/ProtectedRoutes'
// // import FarmerDashboard from './pages/farmerDashboard/FarmerDashboard'
// // import AdminDashboard from './pages/adminDashboard/AdminDashboard'
// // import IndustryDashboard from './pages/Industry-Dashboard/IndustryDashboard'
// // import FarmerProfile from './pages/farmerDashboard/FarmerProfile'
// // import WasteSubmission from './pages/farmerDashboard/WasteSubmission'
// // import WasteListing from './pages/farmerDashboard/WasteListing'

// // function App() {
// //   return (
// //     <>
// //     <BrowserRouter>
// //     <Navbar />
// //     <Routes>
// //       {/* public routes */}
// //       <Route path="/" element={<Home />} />
// //       <Route path="/signup-farmer" element={<Signupfarmer />} />
// //       <Route path="/signup-industry" element={<SignupIndustry />} />
// //       <Route path="/login-farmer" element={<LoginFarmer />} />
// //       <Route path="/login-industry" element={<LoginIndustry />} />
// //       <Route path="/login-admin" element={<LoginAdmin />} />

       
// //         {/* Protected Routes */}
// //         <Route path="/farmer-dashboard" element={<ProtectedRoute allowedRole="farmer"><FarmerDashboard /></ProtectedRoute>} >
// //         <Route index element={<FarmerProfile/>}/>
        
// //         <Route path='waste-submission' element={<WasteSubmission/>}/>
// //         

// //         </Route>



// //         <Route path="/industry-dashboard" element={<ProtectedRoute allowedRole="industry"><IndustryDashboard /></ProtectedRoute>} />
// //         <Route path="/admin-dashboard" element={<ProtectedRoute allowedRole="admin">< AdminDashboard /></ProtectedRoute>} />



// //       {/* Catch-All Route */}
// //       <Route path="*" element={<PageNotFound />} />
// //     </Routes>
// //     <Footer/>

// //     </BrowserRouter>
      
// //     </>
// //   )
// // }

// // export default App



// import { useState } from 'react'
// import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
// import './App.css'
// import Home from './pages/publicScreen/Home'
// import PageNotFound from './pages/PageNotFound'
// import Signupfarmer from './pages/publicScreen/Signupfarmer'
// import SignupIndustry from './pages/publicScreen/SignupIndustry'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import LoginFarmer from './pages/publicScreen/LoginFarmer'
// import LoginIndustry from './pages/publicScreen/LoginIndustry'
// import LoginAdmin from './pages/publicScreen/LoginAdmin'
// import ProtectedRoute from './components/ProtectedRoutes'
// import FarmerDashboard from './pages/farmerDashboard/FarmerDashboard'
// import AdminDashboard from './pages/adminDashboard/AdminDashboard'
// import IndustryDashboard from './pages/Industry-Dashboard/IndustryDashboard'
// import FarmerProfile from './pages/farmerDashboard/FarmerProfile'
// import WasteSubmission from './pages/farmerDashboard/WasteSubmission'
// import IndustryProfile from './pages/Industry-Dashboard/IndustryProfile'
// import WastesSearch from './pages/Industry-Dashboard/WastesSearch'
// import AdminProfile from './pages/adminDashboard/AdminProfile'
// import AllFarmer from './pages/adminDashboard/AllFarmer'
// import AllIndustries from './pages/adminDashboard/AllIndustries'

// function AppContent() {
//   const location = useLocation();

//   // List of routes where Navbar should be hidden
//   const hideNavbarRoutes = [
//     '/farmer-dashboard',
//     "/farmer-dashboard/waste-submission",
//     '/industry-dashboard',
//     "/industry-dashboard/waste-search",
//     '/admin-dashboard',
//     "/admin-dashboard/all-farmers",
//     "/admin-dashboard/all-industries",
//   ];

//   const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

//   return (
//     <>
//       {shouldShowNavbar && <Navbar />}
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/signup-farmer" element={<Signupfarmer />} />
//         <Route path="/signup-industry" element={<SignupIndustry />} />
//         <Route path="/login-farmer" element={<LoginFarmer />} />
//         <Route path="/login-industry" element={<LoginIndustry />} />
//         <Route path="/login-admin" element={<LoginAdmin />} />

//         {/* Protected Routes */}
//         <Route path="/farmer-dashboard" element={<ProtectedRoute allowedRole="farmer"><FarmerDashboard /></ProtectedRoute>} >
//             <Route index element={<FarmerProfile />} />
//             <Route path="waste-submission" element={<WasteSubmission />} />
//             {/* <Route path="waste-listing" element={<WasteListing />} /> */}
//           </Route>


//         <Route path="/industry-dashboard" element={<ProtectedRoute allowedRole="industry"><IndustryDashboard /></ProtectedRoute>} >
//         <Route index element={<IndustryProfile/>}/>
//         <Route path='waste-search' element={<WastesSearch/>}/>
//         </Route>
//         <Route path="/admin-dashboard" element={<ProtectedRoute allowedRole="admin"><AdminDashboard /></ProtectedRoute>} >
//         <Route index element={<AdminProfile/>}/>
//         <Route path='all-farmers' element={<AllFarmer/>}/>
//         <Route path='all-industries' element={<AllIndustries/>}/>
//         </Route>

//         {/* Catch-All Route */}
//         <Route path="*" element={<PageNotFound />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <AppContent />
//     </BrowserRouter>
//   );
// }

// export default App;


import { useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/publicScreen/Home';
import PageNotFound from './pages/PageNotFound';
import Signupfarmer from './pages/publicScreen/Signupfarmer';
import SignupIndustry from './pages/publicScreen/SignupIndustry';

import Footer from './components/Footer';
import LoginFarmer from './pages/publicScreen/LoginFarmer';
import LoginIndustry from './pages/publicScreen/LoginIndustry';
import LoginAdmin from './pages/publicScreen/LoginAdmin';
import ProtectedRoute from './components/ProtectedRoutes';
import FarmerDashboard from './pages/farmerDashboard/FarmerDashboard';
import AdminDashboard from './pages/adminDashboard/AdminDashboard';
import IndustryDashboard from './pages/Industry-Dashboard/IndustryDashboard';
import FarmerProfile from './pages/farmerDashboard/FarmerProfile';
import WasteSubmission from './pages/farmerDashboard/WasteSubmission';
import IndustryProfile from './pages/Industry-Dashboard/IndustryProfile';
import WastesSearch from './pages/Industry-Dashboard/WastesSearch';
import AdminProfile from './pages/adminDashboard/AdminProfile';
import AllFarmer from './pages/adminDashboard/AllFarmer';
import Navbar from './components/Navbar';
import AllIndustry from './pages/adminDashboard/AllIndustries';
import About from './pages/publicScreen/About';
import ContactUs from './pages/publicScreen/ContactUs';

function AppContent() {
  const location = useLocation();

  // List of routes where Navbar should be hidden
  const hideNavbarRoutes = [
    '/farmer-dashboard',
    "/farmer-dashboard/waste-submission",
    '/industry-dashboard',
    "/industry-dashboard/waste-search",
    '/admin-dashboard',
    "/admin-dashboard/all-farmers",
    "/admin-dashboard/all-industries",
  ];

  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/signup-farmer" element={<Signupfarmer />} />
        <Route path="/signup-industry" element={<SignupIndustry />} />
        <Route path="/login-farmer" element={<LoginFarmer />} />
        <Route path="/login-industry" element={<LoginIndustry />} />
        <Route path="/login-admin" element={<LoginAdmin />} />

        {/* Protected Routes */}
        <Route path="/farmer-dashboard" element={<ProtectedRoute allowedRole="farmer"><FarmerDashboard /></ProtectedRoute>} >
          <Route index element={<FarmerProfile />} />
          <Route path="waste-submission" element={<WasteSubmission />} />
        </Route>

        <Route path="/industry-dashboard" element={<ProtectedRoute allowedRole="industry"><IndustryDashboard /></ProtectedRoute>} >
          <Route index element={<IndustryProfile />} />
          <Route path='waste-search' element={<WastesSearch />} />
        </Route>

        <Route path="/admin-dashboard" element={<ProtectedRoute allowedRole="admin"><AdminDashboard /></ProtectedRoute>} >
          <Route index element={<AdminProfile />} />
          <Route path='all-farmers' element={<AllFarmer />} />
          <Route path='all-industries' element={<AllIndustry />} />
        </Route>

        {/* Catch-All Route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
