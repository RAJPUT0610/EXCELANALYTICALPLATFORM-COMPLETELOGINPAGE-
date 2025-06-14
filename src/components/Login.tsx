// // import type React from 'react';
// // import { useState } from 'react';
// // import "./index.css"; 


// // const Sidebar = () => (
// //   <div className="sidebar">
// //   <div className="sidebar-header">
// //   <div className="logo-title-container">
// //     <span className="logo">&#x1F4CA;</span>
// //     <span className="sidebar-app">Excel Analytics</span>
// //   </div>
// // </div>


// //     {/* Left-side illustration with text */}
// //     <div className="sidebar-illustration">
   
// //       <div className="sidebar-text-stack">
// //         <p>Upload.</p>
// //         <p>Analyse.</p>
// //         <p>Visualise.</p>
// //       </div>
// //         <img src="/IMG_20250612_165844-Photoroom.png" alt="Girl working with laptop" className="sidebar-img" />
// //     </div>
// //   </div>
// // );


// // const Login = () => {
// //   const [role, setRole] = useState<'user' | 'admin'>('user');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');

// //   const handleRoleToggle = () => {
// //     setRole(role === 'user' ? 'admin' : 'user');
// //   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     // Will handle backend auth later
// //   };

// //   return (
// //     <div className="login-page">
// //       <Sidebar />
// //       <div className="login-form-wrapper">
// //         <form className="login-form" onSubmit={handleSubmit}>
// //           <h2 className="login-title">Login to</h2>
// //           <h2 className="login-title-b">Excet Analytics</h2>
// //           <input
// //             type="email"
// //             className="login-input"
// //             placeholder="Email"
// //             value={email}
// //             onChange={e => setEmail(e.target.value)}
// //             required
// //           />
// //           <input
// //             type="password"
// //             className="login-input"
// //             placeholder="Password"
// //             value={password}
// //             onChange={e => setPassword(e.target.value)}
// //             required
// //           />
// //           <div className="role-toggle-container">
// //             <span className="role-option user">User</span>
// //             <label className="switch">
// //               <input
// //                 type="checkbox"
// //                 checked={role === 'admin'}
// //                 onChange={handleRoleToggle}
// //               />
// //               <span className="slider round"></span>
// //             </label>
// //             <span className="role-option admin">Admin</span>
// //           </div>
// //           <button className="login-button" type="submit">
// //             Login
// //           </button>
// //           <div className="login-links">
// //             <a href="#" className="forgot-password">Forgot password?</a>
// //               <div className="signup-wrapper">
// //     <span className="signup-text">New user?</span>
// //     <a href="#" className="signup-link">Sign up</a>
// //   </div>
// //           </div>
// //           {error && <div className="login-error">{error}</div>}
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

// import type React from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom'; // ✅ Import Link from react-router-dom
// import "./index.css"; 

// const Sidebar = () => (
//   <div className="sidebar">
//     <div className="sidebar-header">
//       <div className="logo-title-container">
//         <span className="logo">&#x1F4CA;</span>
//         <span className="sidebar-app">Excel Analytics</span>
//       </div>
//     </div>

//     <div className="sidebar-illustration">
//       <div className="sidebar-text-stack">
//         <p>Upload.</p>
//         <p>Analyse.</p>
//         <p>Visualise.</p>
//       </div>
//       <img src="/IMG_20250612_165844-Photoroom.png" alt="Girl working with laptop" className="sidebar-img" />
//     </div>
//   </div>
// );

// const Login = () => {
//   const [role, setRole] = useState<'user' | 'admin'>('user');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleRoleToggle = () => {
//     setRole(role === 'user' ? 'admin' : 'user');
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Will handle backend auth later
//     console.log({ email, password, role });
//   };

//   return (
//     <div className="login-page">
//       <Sidebar />
//       <div className="login-form-wrapper">
//         <form className="login-form" onSubmit={handleSubmit}>
//           <h2 className="login-title">Login to</h2>
//           <h2 className="login-title-b">Excel Analytics</h2>
          
//           <input
//             type="email"
//             className="login-input"
//             placeholder="Email"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             className="login-input"
//             placeholder="Password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             required
//           />

//           <div className="role-toggle-container">
//             <span className="role-option user">User</span>
//             <label className="switch">
//               <input
//                 type="checkbox"
//                 checked={role === 'admin'}
//                 onChange={handleRoleToggle}
//               />
//               <span className="slider round"></span>
//             </label>
//             <span className="role-option admin">Admin</span>
//           </div>

//           <button className="login-button" type="submit">
//             Login
//           </button>

//           <div className="login-links">
//             <a href="#" className="forgot-password">Forgot password?</a>
//             <div className="signup-wrapper">
//               <span className="signup-text">New user?</span>
//               <Link to="/register" className="signup-link">Sign up</Link> {/* ✅ Updated */}
//             </div>
//           </div>

//           {error && <div className="login-error">{error}</div>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { API } from "../api/api";
import { Link } from "react-router-dom";
import "./index.css";

const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar-header">
      <div className="logo-title-container">
        <span className="logo">&#x1F4CA;</span>
        <span className="sidebar-app">Excel Analytics</span>
      </div>
    </div>
    <div className="sidebar-illustration">
      <div className="sidebar-text-stack">
        <p>Upload.</p>
        <p>Analyse.</p>
        <p>Visualise.</p>
      </div>
      <img src="/IMG_20250612_165844-Photoroom.png" alt="Sidebar Illustration" className="sidebar-img" />
    </div>
  </div>
);

const Login = () => {
  const [role, setRole] = useState<"user" | "admin">("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetPassword, setResetPassword] = useState("");
  const [resetConfirm, setResetConfirm] = useState("");
  const [resetMessage, setResetMessage] = useState("");

  const handleRoleToggle = () => {
    setRole(role === "user" ? "admin" : "user");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await API.post("/login", { email, password, role });
      localStorage.setItem("token", res.data.token);
      // Optional: redirect to dashboard
    } catch (err) {
      setError("❌ Invalid credentials");
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (resetPassword !== resetConfirm) {
      setResetMessage("❌ Passwords do not match");
      return;
    }

    try {
      const res = await API.post("/reset-password", {
        email: resetEmail,
        newPassword: resetPassword,
      });
      setResetMessage("✅ " + res.data.message);

      setTimeout(() => {
        setShowResetModal(false);
        setResetEmail("");
        setResetPassword("");
        setResetConfirm("");
        setResetMessage("");
        alert("✅ Password updated! Please log in.");
      }, 2000);
    } catch {
      setResetMessage("❌ Reset failed");
    }
  };

  return (
    <div className="login-page">
      <Sidebar />
      <div className={`login-form-wrapper ${showResetModal ? "blur" : ""}`}>
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">Login to</h2>
          <h2 className="login-title-b">Excel Analytics</h2>

          <input
            type="email"
            className="login-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="role-toggle-container">
            <span className="role-option user">User</span>
            <label className="switch">
              <input type="checkbox" checked={role === "admin"} onChange={handleRoleToggle} />
              <span className="slider round"></span>
            </label>
            <span className="role-option admin">Admin</span>
          </div>

          <button className="login-button" type="submit">Login</button>

          <div className="login-links">
            <span className="forgot-password" onClick={() => setShowResetModal(true)}>
              Forgot password?
            </span>
            <div className="signup-wrapper">
              <span className="signup-text">New user?</span>
              <Link to="/register" className="signup-link">Sign up</Link>
            </div>
          </div>

          {error && <div className="login-error">{error}</div>}
        </form>
      </div>

      {/* Forgot Password Modal */}
      {showResetModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Reset Password</h3>
            <form onSubmit={handleResetPassword}>
              <input
                type="email"
                placeholder="Enter your email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="New password"
                value={resetPassword}
                onChange={(e) => setResetPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Confirm password"
                value={resetConfirm}
                onChange={(e) => setResetConfirm(e.target.value)}
                required
              />
              <button type="submit">Update</button>
              <button type="button" onClick={() => setShowResetModal(false)}>Cancel</button>
              {resetMessage && <p className="reset-message">{resetMessage}</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
