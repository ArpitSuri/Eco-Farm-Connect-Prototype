import express from "express";
import { adminLogin, farmerLogin, farmerSignup, industryLogin, industrySignup } from "../controllers/auth.js";

const router = express.Router();

router.post("/sign-farmer", farmerSignup); 
router.post("/sign-industry", industrySignup); 
(router.post("/login-industry", industryLogin)) 
router.post("/login-farmer", farmerLogin); 
router.post("/login-admin", adminLogin); 

export default router;