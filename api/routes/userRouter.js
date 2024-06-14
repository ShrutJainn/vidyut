import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from "../db.js";
import zod from "zod";
import { protectedRoute } from "../middlewares/protectedRoute.js";
const userRouter = express.Router();

const jwtSecret = process.env.JWT_SECRET;


const signupSchema = zod.object({
  username: zod.string(),
  email: zod.string().email(),
  password: zod.string(),
  name: zod.string(),
});
const loginSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
});

userRouter.get("/", protectedRoute, async (req, res) => {
  try {
    const { userId } = req;
    const user = await User.findOne({ _id: userId });

    if (!user) return res.status(411).json({ error: "User does not exists" });

    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

userRouter.post("/signup", async (req, res) => {
  try {
    const { username, email, password, name } = req.body;
    const { success } = signupSchema.safeParse(req.body);
    if (!success) return res.status(411).json({ error: "Invalid inputs" });
    const user = await User.findOne({ username: username });

    if (user) return res.status(411).json({ error: "User already exists" });
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = await User.create({
      username,
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { userId: newUser._id, username: newUser.username },
      jwtSecret
    );

    return res.status(200).json({
      msg: "User created successfully",
      token,
      user: { username, email, name },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const { success } = loginSchema.safeParse(req.body);
    if (!success) return res.status(411).json({ error: "Invalid inputs" });

    const user = await User.findOne({ username });
    if (!user) return res.status(411).json({ error: "User does not exists" });

    const isValidPassword = bcrypt.compareSync(password, user?.password);
    if (!isValidPassword)
      return res.status(411).json({ error: "Incorrect password" });

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      jwtSecret
    );

    return res.status(200).json({ msg: "Login successful", user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default userRouter;
