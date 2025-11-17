import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "7d",
	});

	res.cookie("token", token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production", // required on Vercel
		sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // REQUIRED for cross-domain
		maxAge: 7 * 24 * 60 * 60 * 1000,
	});
};
