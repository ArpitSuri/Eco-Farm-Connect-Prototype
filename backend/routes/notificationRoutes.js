import express from "express"
import {
  getNotifications,
  addNotification,
  deleteNotification,
  acceptNotification,
} from"../controllers/notificationController.js";
const router = express.Router();


router.get("/", getNotifications); // GET /api/notifications
router.post("/", addNotification); // POST /api/notifications
router.delete("/:id", deleteNotification); // DELETE /api/notifications/:id
router.post("/accept-notification", acceptNotification); // POST /api/accept-notification


export default router