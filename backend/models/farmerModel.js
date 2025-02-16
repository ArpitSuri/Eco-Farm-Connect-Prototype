import mongoose from "mongoose";

const farmerSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    aadhar_no: { type: String, required: true },
    phone_no: { type: String, required: true,unique:true },
    email: { type: String, required: true},
    password: { type: String, required: true },
    farmaddress: { type: String, required: true },
    role:{type:String,enum:["farmer","industry","admin"]},
});

const Farmer = mongoose.model("Farmer", farmerSchema);
export default Farmer;