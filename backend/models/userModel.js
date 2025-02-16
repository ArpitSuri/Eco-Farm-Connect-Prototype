import mongoose from "mongoose";

// Schema for user
const adminSchema= new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role:{type:String,enum:["farmer","industry","admin"]},
});

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
