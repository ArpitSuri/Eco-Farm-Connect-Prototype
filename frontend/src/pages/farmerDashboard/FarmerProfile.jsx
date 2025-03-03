import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import BotPressChat from "../../components/ChatBot";

const FarmerProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token"); // Get JWT token from localStorage
      if (!token) {
        console.error("No token found");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/farmer/me`, {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in headers
          },
        });

        setUser(response.data); // Set user details
      } catch (error) {
        console.error("Error fetching user details:", error.response?.data?.message || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) return <p className="text-center text-gray-700">Loading...</p>;

  if (!user) return <p className="text-center text-red-500">User not found</p>;

  return (<>
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-6"
    >
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 text-center"
      >
        {/* Profile Image */}
        <motion.div 
          className="relative w-32 h-32 mx-auto"
          whileHover={{ scale: 1.1 }}
        >
          <img
            src={user.profileImage ||"https://plus.unsplash.com/premium_photo-1739042113037-417f65ffc458?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "}
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-4 border-green-500 shadow-lg"
          />
        </motion.div>

        {/* Profile Info */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-green-800 mt-4"
        >
          {user.firstname + " " + user.lastname}
        </motion.h1>
        {/* <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-gray-600"
        >
          `{user.aadhar_no || "No aadhar number"}
        </motion.p>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-gray-600"
        >
          {user.phone_no || "No phone number"}
        </motion.p>*/}

         <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-4 text-gray-700 space-y-2"
        >
          <p><strong>Aadhar Number:</strong> {user.aadhar_no}</p>
          <p><strong> Phone Number:</strong> {user.phone_no || "Not Provided"}</p>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-4 text-gray-700 space-y-2"
        >
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong> Farm Addresss:</strong> {user.farmaddress || "Not Provided"}</p>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="mt-6 flex justify-center gap-4"
        >
          {/* <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all"
          >
            Edit Profile
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-400 transition-all"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
          >
            Logout
          </motion.button> */}
        </motion.div>
      </motion.div>
    </motion.div>
    <BotPressChat/>
    </>
  );
};

export default FarmerProfile;
