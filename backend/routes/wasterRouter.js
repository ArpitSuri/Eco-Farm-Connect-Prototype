import express from 'express';
import upload from '../utils/multer.js';
import { getallwaste, submitWaste } from '../controllers/wasteController.js';
const router = express.Router();


router.post('/submit',  upload.single('cropImage'), submitWaste);
router.get("/all", getallwaste);

export default router;