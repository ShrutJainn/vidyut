import express from "express";
import crypto from "crypto";
import twilio from "twilio";
import { instance } from "../index.js";

const router = express.Router();

router.post("/checkout", async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };

  const order = await instance.orders.create(options);
  return res.status(200).json({ success: true, order });
});

router.post("/paymentVerification", (req, res) => {
  const body = req.body;

  const signature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_KEY)
    .update(body.toString())
    .digest("hex");

  const accountSid = process.env.TWILIO_SID;
  const authToken = process.env.TWILIO_AUTHTOKEN;
  const client = twilio(accountSid, authToken);

  client.messages
    .create({
      body: `Congrats on being a part of VIDHYUT! 

              Thank you so much ! For contributing to us and mother nature. 

              You would be happy to know that , the plant you just donated would contribute 0.0067% oxygen to your locality once it's a tree 🌴.

              Order no. : XXXXXXXXX
              Dispatch ID : vidhyut@XXXX`,
      from: "+17752588071",
      to: "+917415935284",
    })
    .then((message) => console.log(message.sid))
    .catch((err) => console.log(err));

  return res.redirect("http://localhost:5173/");
});

export default router;
