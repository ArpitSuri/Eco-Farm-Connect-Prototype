import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

async function dbConnection() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log(`Error in Connection of Db: ${error}`);
    }
}

export default dbConnection;