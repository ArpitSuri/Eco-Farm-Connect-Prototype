import jwt from 'jsonwebtoken';
import Farmer from '../models/farmerModel.js';
import Industry from '../models/industryModel.js';
import Admin from '../models/userModel.js';

const farmerSignup = async (req, res) => {
    try {
        const{ firstname, lastname, email, password, aadhar_no,phone_no,farmaddress } = req.body;
    
      const existingUser = await Farmer.findOne({ phone_no });
        if (existingUser) {
          return res
            .status(400)
            .json({ success: false, error: "User already registered" });
        }
        
        // validate Required Fields
        if (!firstname || !lastname || !email || !password || !aadhar_no || !phone_no || !farmaddress) {
          return res
            .status(400)
            .json({ success: false, error: "Please enter all the fields" });
        }
        const newFarmer = new Farmer({
            firstname,
            lastname,
            email,
            password,
            aadhar_no,
            phone_no,
            farmaddress,
            role:"farmer"
            });
    
        await newFarmer.save();
    
        res.status(200).json({ success: true, message: "Farmer registered successfully" });
      } catch (error) {
          res.status(500).json({ success: false, message: "Internal server error in farmer registration", error: error.message });
        
      }
};

const industrySignup = async (req, res) => {      
  try {
    const{ industryname, phone_no, email, password, gst_no,website } = req.body;

  const existingUser = await Industry.findOne({ phone_no });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, error: "User already registered" });
    }
    
    // validate Required Fields
    if (!industryname || !phone_no || !email || !password || !gst_no) {
      return res
        .status(400)
        .json({ success: false, error: "Please enter all the fields" });
    }
    const newIndustry = new Industry({
      industryname,
      phone_no,
      email,
      password,
      gst_no,
      website,
      role:"industry"
    });

    await newIndustry.save();

    res.status(200).json({ success: true, message: "Industry registered successfully" });
  } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error in industry registration", error: error.message });
    
  }
};

const industryLogin = async (req, res) => {      
    try {
        const { phone_no, password } = req.body;
        const requestedUser = await Industry.findOne({ phone_no });

        if (!requestedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Direct string comparison (No bcrypt)
        if (password !== requestedUser.password) {
            return res.status(400).json({ success: false, message: "Incorrect password" });
        }

        const token = jwt.sign(
            { _id: requestedUser._id, role: requestedUser.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1d" }
        );

        res.status(200).json({
            success: true,
            token,
            user: { _id: requestedUser._id, name: requestedUser.name, role: requestedUser.role },
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
  };

  const farmerLogin = async (req, res) => {      
    try {
        const { phone_no, password } = req.body;
        const requestedUser = await Farmer.findOne({ phone_no });

        if (!requestedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Direct string comparison (No bcrypt)
        if (password !== requestedUser.password) {
            return res.status(400).json({ success: false, message: "Incorrect password" });
        }

        const token = jwt.sign(
            { _id: requestedUser._id, role: requestedUser.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1d" }
        );

        res.status(200).json({
            success: true,
            token,
            user: { _id: requestedUser._id, name: requestedUser.name, role: requestedUser.role },
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
};


const adminLogin = async (req, res) => {      
  try {
      const { email, password } = req.body;
      const requestedUser = await Admin.findOne({ email });

      if (!requestedUser) {
          return res.status(404).json({ success: false, message: "User not found" });
      }

      // Direct string comparison (No bcrypt)
      if (password !== requestedUser.password) {
          return res.status(400).json({ success: false, message: "Incorrect password" });
      }

      const token = jwt.sign(
          { _id: requestedUser._id, role: requestedUser.role },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "1d" }
      );

      res.status(200).json({
          success: true,
          token,
          user: { _id: requestedUser._id, name: requestedUser.name, role: requestedUser.role },
      });
  } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error", error: error.message });
  }
};

export { farmerSignup , industrySignup , industryLogin , farmerLogin, adminLogin };