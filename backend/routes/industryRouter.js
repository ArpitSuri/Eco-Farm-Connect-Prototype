import express from "express";
import { getindustryprofile } from "../controllers/industryController.js";
import { getAllIndustry } from "../controllers/adminController.js";
const router = express.Router();

router.get("/me",getindustryprofile);
router.get("/all",getAllIndustry);


export default router;