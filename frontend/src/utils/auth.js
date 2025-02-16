import {jwtDecode} from "jwt-decode";

export const getUserRole = () => {
  const token = localStorage.getItem("token");
  
  if (!token) return null; // No token found

  try {
    const decoded = jwtDecode(token);
    return decoded.role; // Assuming role is stored in JWT
  } catch (error) {
    console.error("Invalid Token:", error);
    return null;
  }
};