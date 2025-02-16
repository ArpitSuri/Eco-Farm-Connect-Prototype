import mongoose from "mongoose"
const notificationSchema = new mongoose.Schema({
  message: { type: String, required: true },
  time: { type: String, default: () => new Date().toLocaleString() },
});

const Notification = mongoose.model("Notification" , notificationSchema);
export default Notification;