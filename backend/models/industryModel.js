import mongoose from "mongoose";

const industryrSchema = new mongoose.Schema({
    industryname: { type: String, required: true },
    email: { type: String, required: true},
    gst_no: { type: String, required: true },
    phone_no: { type: String, required: true,unique:true },
    password: { type: String, required: true },
    website: { type: String },
    role:{type:String,enum:["farmer","industry","admin"]},
});

const Industry = mongoose.model("Industry", industryrSchema);
export default Industry;