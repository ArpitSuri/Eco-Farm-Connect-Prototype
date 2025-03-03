// import React from 'react'

// const SignupIndustry = () => {
//   return (
//     <div>

// <section className="bg-white">
//   <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
//     <main
//       className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
//     >
//       <div className="max-w-xl lg:max-w-3xl">

//         <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
//           SignUp as a Industry
//         </h1>

//         <p className="mt-4 leading-relaxed text-gray-500">
//           Please fill the full form to create an account as a Industry.
//         </p>

//         <form action="#" className="mt-8 grid grid-cols-6 gap-6">
//           <div className="col-span-6 sm:col-span-3">
//             <label htmlFor="ind_name" className="block text-sm font-medium text-gray-700">
//               Industry Name
//             </label>

//             <input
//               type="text"
//               id="ind_name"
//               name="industryname"
//               className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
//             />
//           </div>

//           <div className="col-span-6">
//             <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

//             <input
//               type="email"
//               id="Email"
//               name="email"
//               className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
//             />
//           </div>
          
//           <div className="col-span-6 sm:col-span-3">
//             <label htmlFor="gst_no" className="block text-sm font-medium text-gray-700">
//               GST Number
//             </label>

//             <input
//               type="text"
//               id="gst_no"
//               name="gst_no"
//               className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
//             />
//           </div>

//           <div className="col-span-6 sm:col-span-3">
//             <label htmlFor="phone_no" className="block text-sm font-medium text-gray-700">
//               Phone Number
//             </label>

//             <input
//               type="text"
//               id="phone_no"
//               name="phone_no"
//               className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
//             />
//           </div>


//           <div className="col-span-6 sm:col-span-3">
//             <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

//             <input
//               type="password"
//               id="Password"
//               name="password"
//               className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
//             />
//           </div>


//           <div className="col-span-6">
//             <label htmlFor="website" className="block text-sm font-medium text-gray-700"> Website Url </label>

//             <input
//               type="url"
//               id="website"
//               name="website"
//               className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
//             />
//           </div>




//           <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
//             <button
//               className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:outline-hidden"
//             >
//               Create an account
//             </button>

//             <p className="mt-4 text-sm text-gray-500 sm:mt-0">
//               Already have an account?
//               <a href="/login" className="text-gray-700 underline">Log in</a>.
//             </p>
//           </div>
//         </form>
//       </div>
//     </main>
//   </div>
// </section>
//     </div>
//   )
// }

// export default SignupIndustry

import React, { useState } from "react";
import axios from "axios";

const SignupIndustry = () => {
  const [formData, setFormData] = useState({
    industryname: "",
    email: "",
    gst_no: "",
    phone_no: "",
    password: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/auth/sign-industry`, formData);
      setMessage("Account created successfully!");
      setFormData({
        industryname: "",
        email: "",
        gst_no: "",
        phone_no: "",
        password: "",
        website: "",
      });
    } catch (error) {
      setMessage("Error: " + (error.response?.data?.message || "Something went wrong"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Sign Up as an Industry
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Please fill the full form to create an account.
              </p>

              {message && <p className="mt-4 text-sm text-red-600">{message}</p>}

              <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="industryname" className="block text-sm font-medium text-gray-700">
                    Industry Name
                  </label>
                  <input
                    type="text"
                    id="industryname"
                    name="industryname"
                    value={formData.industryname}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
                    required
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="gst_no" className="block text-sm font-medium text-gray-700">
                    GST Number
                  </label>
                  <input
                    type="text"
                    id="gst_no"
                    name="gst_no"
                    value={formData.gst_no}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="phone_no" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone_no"
                    name="phone_no"
                    value={formData.phone_no}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
                    required
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                    Website URL
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:outline-none"
                  >
                    {loading ? "Creating..." : "Create an account"}
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <a href="/login" className="text-gray-700 underline"> Log in</a>.
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default SignupIndustry;
