import "dotenv/config";
import express from "express";
import { connectDB } from "./db.js";
import userRouter from "./routes/userRouter.js";
import paymentRouter from "./routes/paymentRoute.js";
import Razorpay from "razorpay";
const app = express();
import cors from "cors";

app.use(cors());
app.use(express.json());

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

const PORT = process.env.PORT;
connectDB();

app.use("/api/users", userRouter);
app.use("/api/pay", paymentRouter);

app.get("/api/getKey", (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
});
app.listen(PORT, () => {
  console.log(`Successfully listening to port : ${PORT}`);
});
