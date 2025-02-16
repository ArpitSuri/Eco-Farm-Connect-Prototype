import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8 w-full" >
      <p>© {new Date().getFullYear()} Bio-Waste Hub. All rights reserved.</p>
      <Link to="/login-admin"> Login</Link>
    </footer>

  );
};

export default Footer;
