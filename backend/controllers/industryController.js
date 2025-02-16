import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Industry from "../models/industryModel.js";
import WasteSubmission from "../models/wasteModel.js";

dotenv.config();

export const getindustryprofile = async (req, res) => {
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
        const farmer = await Industry.findById(decoded._id).select("-password"); // Exclude password

        if (!farmer) {
            return res.status(404).json({ message: "User does not exist" });
        }

        res.json(farmer);
    } catch (error) {
        console.error("Error fetching user:", error);
        return res.status(400).json({ message: "Invalid token or user not found" });
    }
};



