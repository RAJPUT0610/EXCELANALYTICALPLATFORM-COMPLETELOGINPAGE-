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
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

export const registerUser = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ email, password: hashedPassword, role });
    await newUser.save();

    const token = jwt.sign({ email, role }, process.env.JWT_SECRET!, { expiresIn: "1h" });

    res.status(201).json({ message: "User registered", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.role !== role) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email, role }, process.env.JWT_SECRET!, { expiresIn: "1h" });
    res.json({ token });
  } catch {
    res.status(500).json({ message: "Login failed" });
  }
};
