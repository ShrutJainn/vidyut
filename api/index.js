import "dotenv/config";
import express from "express";
import { connectDB } from "./db.js";
import userRouter from "./routes/userRouter.js";
const app = express();
app.use(express.json());

const PORT = process.env.PORT;
connectDB();

app.use("/api/users", userRouter);
app.listen(PORT, () => {
  console.log(`Successfully listening to port : ${PORT}`);
});
