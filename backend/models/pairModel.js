import mongoose from "mongoose";



const pairSchema = new mongoose.Schema({
  receiverId: { type: String, required: true }, // ID of the receiver
  senderId: { type: String, required: true }, // ID of the sender
  createdAt: { type: Date, default: Date.now }, // Timestamp
});
const Pair = mongoose.model("Pair", pairSchema);
export default Pair;