import express from "express";
import { getfarmerprofile } from "../controllers/farmerController.js";
import { getAllFarmer } from "../controllers/adminController.js";
const router = express.Router();

router.get("/me",getfarmerprofile);
router.get("/all",getAllFarmer);

export default router;