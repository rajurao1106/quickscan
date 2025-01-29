import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import Razorpay from "razorpay";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cors({ origin: "http://192.168.29.118:5174", credentials: true }));

app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse incoming cookies

const razorpay = new Razorpay({
	key_id: "rzp_test_rnzCxSf5oYy7vE", // Your Razorpay Key ID
	key_secret: "gWPuWF19btPhEMy3mduwJIUq", // Your Razorpay Key Secret
  });

app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.post("/create-order", async (req, res) => {
	const { amount } = req.body;
  
	const options = {
	  amount: amount * 100, // Amount in paise
	  currency: "INR",
	  receipt: "order_rcptid_11",
	  payment_capture: 1,
	};
  
	try {
	  const response = await razorpay.orders.create(options);
	  res.json(response);
	} catch (error) {
	  res.status(500).json({ error: error.message });
	}
  });

app.listen(PORT, () => {
	connectDB();
	console.log("Server is running on port: ", PORT);
});