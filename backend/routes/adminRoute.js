import express from "express";
import { getadminprofile } from "../controllers/adminController.js";

const router = express.Router();

router.get("/me",getadminprofile);

export default router;