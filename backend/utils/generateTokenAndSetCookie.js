import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET environment variable is missing");
  }

  // Generate the JWT token with userId and expiration time
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d", // Token expires in 7 days
  });

  // Set the token as a cookie in the response
  res.cookie("token", token, {
    httpOnly: true, // Prevents client-side JS from accessing the cookie
    secure: process.env.NODE_ENV === "production", // Use HTTPS in production
    sameSite: "strict", // Strict SameSite policy to prevent CSRF
    maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expires in 7 days (same as token expiration)
  });

  return token;
};
