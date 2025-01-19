import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Configure Nodemailer transporter
export const transporter = nodemailer.createTransport({
  service: "gmail", // Replace with your email provider, e.g., 'hotmail', 'yahoo', or use custom SMTP details
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

export const sender = {
  email: process.env.EMAIL_USER,
  name: "Raju Rao",
};
