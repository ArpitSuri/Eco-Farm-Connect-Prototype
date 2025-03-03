import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const AdminProfile = () => {
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
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/admin/me`, {
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

  return (
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
            src={user.profileImage ||"https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
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
          {user.name  }
        </motion.h1>

         <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-4 text-gray-700 space-y-2"
        >
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-4 text-gray-700 space-y-2"
        >
          <p><strong>Email:</strong> {user.email}</p>

        </motion.div>

        {/* Buttons */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="mt-6 flex justify-center gap-4"
        >
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AdminProfile;
