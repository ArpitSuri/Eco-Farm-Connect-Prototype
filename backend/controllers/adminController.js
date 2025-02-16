import jwt from "jsonwebtoken";
import Admin from "../models/userModel.js"
import dotenv from "dotenv";
import Industry from "../models/industryModel.js";
import Farmer from "../models/farmerModel.js";

dotenv.config();

export const getadminprofile = async (req, res) => {
    try {
        const token = req.header("Authorization");
        
        if (!token) {
            return res.status(401).json({ message: "No token, authorization denied" });
        }

        // Ensure token follows "Bearer <token>" format
        const cleanToken = token.startsWith("Bearer ") ? token.split(" ")[1] : token;

        // Verify the token
        const decoded = jwt.verify(cleanToken, process.env.JWT_SECRET_KEY);
        
        // Fetch the farmer from the database
        const farmer = await Admin.findById(decoded._id).select("-password"); // Exclude password

        if (!farmer) {
            return res.status(404).json({ message: "User does not exist" });
        }

        res.json(farmer);
    } catch (error) {
        console.error("Error fetching user:", error);
        return res.status(400).json({ message: "Invalid token or user not found" });
    }
};


export const getAllFarmer = async (req, res) => {
    try {
      const { search } = req.query;
      
      // Default to fetching all data if no search query is provided
      const query = search ? { title: { $regex: search, $options: "i" } } : {};
      
      const data = await Farmer.find(query);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  };
  

export const getAllIndustry = async (req, res) => {
    try {
      const { search } = req.query;
      
      // Default to fetching all data if no search query is provided
      const query = search ? { title: { $regex: search, $options: "i" } } : {};
      
      const data = await Industry.find(query);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  };
  