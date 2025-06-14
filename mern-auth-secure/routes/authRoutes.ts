// import { Router } from "express";
// import { registerUser, loginUser } from "../controllers/authController";
// import { verifyToken } from "../middleware/authMiddleware";

// const router = Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);

// router.get("/protected", verifyToken, (req, res) => {
//   const user = (req as any).user;
//   res.json({ message: `Hello ${user.email}! You are a(n) ${user.role}.` });
// });

// export default router;
// second update
// import express from "express";
// import { loginUser, registerUser } from "../controllers/authController";

// const router = express.Router();

// router.post("/register", registerUser); 
// router.post("/login", loginUser);

// export default router;

import express from "express";
import { loginUser, registerUser, resetPassword } from "../controllers/authController";

const router = express.Router();

router.post("/register", registerUser); 
router.post("/login", loginUser);
router.post("/reset-password", resetPassword); // ✅ Added for forgot password

export default router;

