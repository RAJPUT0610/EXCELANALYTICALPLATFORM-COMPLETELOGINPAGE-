import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const loginUser = (req: Request, res: Response) => {
  const { email, password, role } = req.body;

  if (
    (role === "admin" && email === "admin@gmail.com" && password === "admin123") ||
    (role === "user" && email === "user@gmail.com" && password === "user123")
  ) {
    const token = jwt.sign({ email, role }, process.env.JWT_SECRET!, { expiresIn: "1h" });
    return res.json({ token });
  }

  return res.status(401).json({ message: "Invalid credentials" });
};
