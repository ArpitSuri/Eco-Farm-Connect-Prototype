import mongoose from "mongoose";

const wasteSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: String,
    quantityOfWaste: Number,
    typeOfWaste: String,
    cropGrownLast: String,
    quantityOfCropGrown: Number,
    cropImage: String,
  });
  
  const Waste = mongoose.model("Waste", wasteSchema);
  export default Waste