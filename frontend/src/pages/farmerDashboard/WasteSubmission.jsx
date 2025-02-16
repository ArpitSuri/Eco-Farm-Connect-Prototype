// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { Leaf, Upload, Sprout } from 'lucide-react';

// // const API_URL =  'http://localhost:8080/api/waste/submit';

// // const Card = ({ className, children }) => (
// //   <div className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-xl ${className}`}>{children}</div>
// // );

// // const CardHeader = ({ children }) => (
// //   <div className="p-8 flex flex-col items-center border-b border-gray-200">{children}</div>
// // );

// // const CardTitle = ({ children }) => (
// //   <div className="text-center">
// //     <div className="flex justify-center mb-4">
// //       <Sprout className="h-12 w-12 text-green-600" />
// //     </div>
// //     <h2 className="text-3xl font-bold text-green-600">{children}</h2>
// //   </div>
// // );

// // const CardContent = ({ children }) => <div className="p-8">{children}</div>;

// // const Label = ({ htmlFor, children }) => (
// //   <label htmlFor={htmlFor} className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
// //     <Leaf className="h-4 w-4 text-green-600" />
// //     {children}
// //   </label>
// // );

// // const Input = ({ className, ...props }) => (
// //   <input
// //     className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 bg-white/50 backdrop-blur-sm transition-all duration-200 ${className}`}
// //     {...props}
// //   />
// // );

// // const Textarea = ({ className, ...props }) => (
// //   <textarea
// //     className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 bg-white/50 backdrop-blur-sm transition-all duration-200 ${className}`}
// //     {...props}
// //   />
// // );

// // const Select = ({ children, value, onChange }) => (
// //   <select
// //     value={value}
// //     onChange={onChange}
// //     className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 bg-white/50 backdrop-blur-sm transition-all duration-200"
// //   >
// //     {children}
// //   </select>
// // );

// // const Button = ({ children, className, ...props }) => (
// //   <button
// //     className={`w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-semibold shadow-lg hover:from-green-700 hover:to-green-600 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 ${className}`}
// //     {...props}
// //   >
// //     {children}
// //   </button>
// // );

// // function WasteSubmission() {
// //   const [formData, setFormData] = useState({
// //     address: '',
// //     crop: '',
// //     wasteType: '',
// //     farmPhoto: null,
// //   });

// //   const [selectedFileName, setSelectedFileName] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const [message, setMessage] = useState('');

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       setSelectedFileName(file.name);
// //       setFormData((prev) => ({
// //         ...prev,
// //         farmPhoto: file,
// //       }));
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setMessage('');

// //     const form = new FormData();
// //     form.append('address', formData.address);
// //     form.append('crop', formData.crop);
// //     form.append('wasteType', formData.wasteType);
// //     form.append('farmPhoto', formData.farmPhoto);

// //     try {
// //       const response = await axios.post(API_URL, form, {
// //         headers: { 'Content-Type': 'multipart/form-data' },
// //       });

// //       if (response.status === 200) {
// //         setMessage('Waste submission successful!');
// //         setFormData({ address: '', crop: '', wasteType: '', farmPhoto: null });
// //         setSelectedFileName('');
// //       } else {
// //         setMessage('Failed to submit waste details.');
// //       }
// //     } catch (error) {
// //       setMessage(error.response?.data?.error || 'An error occurred. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-green-50 p-4 md:p-8 flex items-center justify-center">
// //       <Card className="max-w-2xl w-full">
// //         <CardHeader>
// //           <CardTitle>Farmer Information</CardTitle>
// //           <p className="mt-2 text-gray-600">Please fill in your farm details below</p>
// //         </CardHeader>

// //         <CardContent>
// //           {message && (
// //             <p className={`text-center text-lg font-semibold ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
// //               {message}
// //             </p>
// //           )}

// //           <form onSubmit={handleSubmit} className="space-y-6">
// //             <div className="space-y-2">
// //               <Label htmlFor="address">Farm Location</Label>
// //               <Textarea
// //                 id="address"
// //                 name="address"
// //                 placeholder="Enter your farm's complete address"
// //                 value={formData.address}
// //                 onChange={handleInputChange}
// //                 className="min-h-32"
// //                 required
// //               />
// //             </div>

// //             <div className="space-y-2">
// //               <Label htmlFor="crop">Primary Crop</Label>
// //               <Input
// //                 id="crop"
// //                 name="crop"
// //                 placeholder="What do you primarily grow?"
// //                 value={formData.crop}
// //                 onChange={handleInputChange}
// //                 required
// //               />
// //             </div>

// //             <div className="space-y-2">
// //               <Label htmlFor="wasteType">Agricultural Waste Type</Label>
// //               <Select name="wasteType" value={formData.wasteType} onChange={handleInputChange} required>
// //                 <option value="">Select your main waste type</option>
// //                 <option value="crop-residue">Crop Residue</option>
// //                 <option value="animal-waste">Animal Waste</option>
// //                 <option value="agricultural-byproducts">Agricultural Byproducts</option>
// //                 <option value="packaging-materials">Packaging Materials</option>
// //                 <option value="other">Other</option>
// //               </Select>
// //             </div>

// //             <div className="space-y-2">
// //               <Label>Farm Photo</Label>
// //               <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-green-400 transition-colors bg-gray-100">
// //                 <div className="flex flex-col items-center gap-4">
// //                   <Upload className="h-12 w-12 text-green-600" />
// //                   <label htmlFor="farm-photo" className="text-green-600 hover:text-green-700 cursor-pointer font-semibold text-lg">
// //                     Upload Farm Image
// //                   </label>
// //                   <p className="text-sm text-gray-600 mt-2">{selectedFileName || 'JPG, PNG, or GIF accepted'}</p>
// //                   <Input id="farm-photo" type="file" accept="image/*" onChange={handleFileChange} className="hidden" required />
// //                 </div>
// //               </div>
// //             </div>

// //             <Button type="submit" disabled={loading}>
// //               {loading ? 'Submitting...' : 'Submit Farm Information'}
// //             </Button>
// //           </form>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// // }

// // export default WasteSubmission;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Leaf, Upload, Sprout } from 'lucide-react';
// import BotPressChat from '../../components/ChatBot';

// const API_URL = 'http://localhost:8080/api/waste/submit';

// const WasteSubmission = () => {
//   const [formData, setFormData] = useState({
//     address: '',
//     crop: '',
//     wasteType: '',
//     farmPhoto: null,
//   });
  
//   const [selectedFileName, setSelectedFileName] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedFileName(file.name);
//       setFormData((prev) => ({ ...prev, farmPhoto: file }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.address || !formData.crop || !formData.wasteType || !formData.farmPhoto) {
//       setMessage('Please fill all required fields.');
//       return;
//     }
//     setLoading(true);
//     setMessage('');

//     const form = new FormData();
//     form.append('address', formData.address);
//     form.append('crop', formData.crop);
//     form.append('wasteType', formData.wasteType);
//     form.append('farmPhoto', formData.farmPhoto);

//     try {
//       const response = await axios.post(API_URL, form, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       if (response.status === 200) {
//         setMessage('Waste submission successful! ✅');
//         setFormData({ address: '', crop: '', wasteType: '', farmPhoto: null });
//         setSelectedFileName('');
//       } else {
//         setMessage('Failed to submit waste details. ❌');
//       }
//     } catch (error) {
//       setMessage(error.response?.data?.error || 'An error occurred. Please try again. ❌');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (<>
//     <div className="min-h-screen bg-green-50 p-4 md:p-8 flex items-center justify-center">
//       <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-lg">
//         <div className="text-center">
//           <Sprout className="h-12 w-12 text-green-600 mx-auto" />
//           <h2 className="text-3xl font-bold text-green-600">Farmer Information</h2>
//           <p className="mt-2 text-gray-600">Please fill in your farm details below</p>
//         </div>

//         {message && <p className={`text-center mt-4 ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>{message}</p>}

//         <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//           <div>
//             <label className="block text-sm font-semibold text-gray-700">Farm Location</label>
//             <textarea name="address" value={formData.address} onChange={handleInputChange} required className="w-full p-2 border rounded-lg"></textarea>
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-gray-700">Primary Crop</label>
//             <input type="text" name="crop" value={formData.crop} onChange={handleInputChange} required className="w-full p-2 border rounded-lg" />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-gray-700">Agricultural Waste Type</label>
//             <select name="wasteType" value={formData.wasteType} onChange={handleInputChange} required className="w-full p-2 border rounded-lg">
//               <option value="">Select your main waste type</option>
//               <option value="crop-residue">Crop Residue</option>
//               <option value="animal-waste">Animal Waste</option>
//               <option value="agricultural-byproducts">Agricultural Byproducts</option>
//               <option value="packaging-materials">Packaging Materials</option>
//               <option value="other">Other</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-gray-700">Farm Photo</label>
//             <input type="file" accept="image/*" onChange={handleFileChange} required className="block w-full p-2 border rounded-lg" />
//             <p className="text-sm text-gray-600 mt-2">{selectedFileName || 'No file selected'}</p>
//           </div>

//           <button type="submit" disabled={loading} className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition">
//             {loading ? 'Submitting...' : 'Submit Farm Information'}
//           </button>
//         </form>
//       </div>
//     </div>
//     <BotPressChat/>
//     </>
//   );
// };

// export default WasteSubmission;

import { useState } from "react";
import axios from "axios";

export default function WasteSubmission() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    quantityOfWaste: "",
    typeOfWaste: "",
    cropGrownLast: "",
    quantityOfCropGrown: "",
    cropImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, cropImage: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      await axios.post("http://localhost:8080/api/waste/submit", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Waste submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to submit waste");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Waste Submission Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="quantityOfWaste" placeholder="Quantity of Waste (kg)" value={formData.quantityOfWaste} onChange={handleChange} className="w-full p-2 border rounded" required />
        <select name="typeOfWaste" value={formData.typeOfWaste} onChange={handleChange} className="w-full p-2 border rounded" required>
          <option value="">Select Waste Type</option>
          <option value="Organic">Organic</option>
          <option value="Plastic">Plastic</option>
          <option value="Metal">Metal</option>
        </select>
        <input type="text" name="cropGrownLast" placeholder="Last Crop Grown" value={formData.cropGrownLast} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="quantityOfCropGrown" placeholder="Quantity of Last Crop Grown (kg)" value={formData.quantityOfCropGrown} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="file" name="cropImage" onChange={handleFileChange} className="w-full p-2 border rounded" required />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Submit</button>
      </form>
    </div>
  );
}



