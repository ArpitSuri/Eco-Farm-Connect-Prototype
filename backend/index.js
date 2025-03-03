import express from "express";
import dbConnection from "./utils/dbConnection.js";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/authRoutes.js";
import farmerRouter from "./routes/farmerRoutes.js";
import industryRouter from "./routes/industryRouter.js";
import adminRouter from "./routes/adminRoute.js";
import wasteRouter from "./routes/wasterRouter.js"
import notificationRoutes from"./routes/notificationRoutes.js";





dbConnection();
const app = express();
dotenv.config();
app.use("/uploads", express.static("uploads"));
app.use(cors({
  origin: 'https://eco-farm-connect-prototype.vercel.app',
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/api/auth" , authRouter);
app.use("/api/farmer", farmerRouter);
app.use("/api/industry",industryRouter);
app.use("/api/admin", adminRouter);
app.use('/api/waste', wasteRouter);
app.use("/api/notifications", notificationRoutes);
app.listen(8080, () => {
  console.log(`Server is running on port ${8080}`);
});