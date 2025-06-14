// import { Request, Response } from "express";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";
// import { User } from "../models/User";

// const generateToken = (email: string, role: string) => {
//   return jwt.sign({ email, role }, process.env.JWT_SECRET!, { expiresIn: "1h" });
// };

// export const registerUser = async (req: Request, res: Response) => {
//   const { email, password, role } = req.body;

//   const existingUser = await User.findOne({ email });
//   if (existingUser) return res.status(400).json({ message: "User already exists" });

//   const user = new User({ email, password, role });
//   await user.save();

//   const token = generateToken(user.email, user.role);
//   res.status(201).json({ token });
// };

// export const loginUser = async (req: Request, res: Response) => {
//   const { email, password, role } = req.body;

//   const user = await User.findOne({ email });
//   if (!user || user.role !== role) return res.status(401).json({ message: "Invalid credentials" });

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) return res.status(401).json({ message: "Incorrect password" });

//   const token = generateToken(user.email, user.role);
//   res.json({ token });
// };
// second update
// 

import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

// 🔐 JWT Token Generator
const generateToken = (email: string, role: string): string => {
  return jwt.sign({ email, role }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });
};

// ✅ Register Controller
export const registerUser = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    const token = generateToken(email, role);
    res.status(201).json({ message: "User registered", token });
  } catch (err) {
    console.error("❌ Registration Error:", err);
    res.status(500).json({ message: "Server error during registration" });
  }
};

// ✅ Login Controller
export const loginUser = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.role !== role)
      return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(email, role);
    res.json({ token });
  } catch (err) {
    console.error("❌ Login Error:", err);
    res.status(500).json({ message: "Server error during login" });
  }
};

// ✅ Reset Password Controller
export const resetPassword = async (req: Request, res: Response) => {
  const { email, newPassword } = req.body;

  console.log("📩 Reset password request received:", { email, newPassword });

  try {
    const user = await User.findOne({ email });

    if (!user) {
      console.log("❌ User not found:", email);
      return res.status(404).json({ message: "User not found" });
    }

    console.log("🔐 Current password hash:", user.password);

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;

    await user.save();

    const updated = await User.findOne({ email });
    console.log("✅ Password successfully updated to hash:", updated?.password);

    res.json({ message: "Password updated successfully" });
  } catch (err) {
    console.error("❌ Reset Password Error:", err);
    res.status(500).json({ message: "Server error while resetting password" });
  }
};
