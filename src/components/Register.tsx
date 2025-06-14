// import React, { useState } from "react";
// import { API } from "../api/api";
// import "./Register.css"; // <-- standard CSS file

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("user");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await API.post("/register", { email, password, role });
//       localStorage.setItem("token", res.data.token);
//       setMessage("✅ Registered successfully!");
//     } catch (err: any) {
//       setMessage(err.response?.data?.message || "❌ Registration failed.");
//     }
//   };

//   return (
//     <div className="register-container">
//       <form className="register-form" onSubmit={handleSubmit}>
//         <h2>Register</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           required
//         />
//         <select value={role} onChange={e => setRole(e.target.value)} required>
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//         </select>
//         <button type="submit">Register</button>
//         {message && <p className="register-message">{message}</p>}
//       </form>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { API } from "../api/api";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match.");
      return;
    }

    try {
      const res = await API.post("/register", { email, password, role });
      localStorage.setItem("token", res.data.token);
      setMessage("✅ Registered successfully!");
    } catch (err: any) {
      setMessage(err.response?.data?.message || "❌ Registration failed.");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <h2 className="signup-title">Create Your Account</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit">Sign Up</button>
          {message && <p className="signup-message">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
