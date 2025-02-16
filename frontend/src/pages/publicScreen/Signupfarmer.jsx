// import React from 'react'

// const Signupfarmer = () => {
//   return (
//     <div>

// <section className="bg-white">
//   <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
//     <main
//       className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
//     >
//       <div className="max-w-xl lg:max-w-3xl">

//         <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
//           SignUp as a Farmer
//         </h1>

//         <p className="mt-4 leading-relaxed text-gray-500">
//           Please fill the full form to create an account as a farmer.
//         </p>

//         <form action="#" className="mt-8 grid grid-cols-6 gap-6">
//           <div className="col-span-6 sm:col-span-3">
//             <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
//               First Name
//             </label>

//             <input
//               type="text"
//               id="FirstName"
//               name="firstname"
//               className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
//             />
//           </div>

//           <div className="col-span-6 sm:col-span-3">
//             <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
//               Last Name
//             </label>

//             <input
//               type="text"
//               id="LastName"
//               name="lastname"
//               className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
//             />
//           </div>
//           <div className="col-span-6 sm:col-span-3">
//             <label htmlFor="aadhar_no" className="block text-sm font-medium text-gray-700">
//               Aadhar Number
//             </label>

//             <input
//               type="text"
//               id="aadhar_no"
//               name="aadhar_no"
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
//             <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

//             <input
//               type="password"
//               id="Password"
//               name="password"
//               className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
//             />
//           </div>

//           <div className="col-span-6 sm:col-span-3">
//             <label htmlFor="add_farm" className="block text-sm font-medium text-gray-700">
//               Address of Farm
//             </label>

//             <textarea
//               type="text"
//               id="add_farm"
//               name="farmaddress"
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

// export default Signupfarmer


import React, { useState } from 'react';
import axios from 'axios';

const Signupfarmer = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    aadhar_no: '',
    phone_no: '',
    email: '',
    password: '',
    farmaddress: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/sign-farmer', formData);
      alert('Signup successful');
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Signup failed');
    }
  };

  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">SignUp as a Farmer</h1>
              <p className="mt-4 leading-relaxed text-gray-500">Please fill the full form to create an account as a farmer.</p>
              <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
                {['firstname', 'lastname', 'aadhar_no', 'phone_no', 'email', 'password', 'farmaddress'].map((field, index) => (
                  <div key={index} className={`col-span-6 ${field === 'farmaddress' ? 'sm:col-span-3' : 'sm:col-span-3'}`}>
                    <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                      {field.replace('_', ' ').toUpperCase()}
                    </label>
                    <input
                      type={field === 'password' ? 'password' : 'text'}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
                    />
                  </div>
                ))}
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:outline-hidden"
                  >
                    Create an account
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

export default Signupfarmer;
