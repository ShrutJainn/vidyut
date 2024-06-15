import mongoose, { mongo } from "mongoose";

export function connectDB() {
  mongoose
    .connect(
      "mongodb+srv://shrutjain488:S4lFGSkf2uUAXbg9@cluster0.cwhip4e.mongodb.net/vidyutDb"
    )
    .then(() => {
      console.log("connected to the db");
    })
    .catch((err) => {
      console.log(err);
    });
}

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLenght: 5,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  cart: [
    {
      name: String,
      description: String,
      image: String,
    },
  ],
});

export const User = mongoose.model("User", userSchema);
