import type React from 'react';
import { useState } from 'react';
import './index.css';

const Sidebar = () => (
  <div className="sidebar">
  <div className="sidebar-header">
  <div className="logo-title-container">
    <span className="logo">&#x1F4CA;</span>
    <span className="sidebar-app">Excel Analytics</span>
  </div>
</div>


    {/* Left-side illustration with text */}
    <div className="sidebar-illustration">
   
      <div className="sidebar-text-stack">
        <p>Upload.</p>
        <p>Analyse.</p>
        <p>Visualise.</p>
      </div>
        <img src="/IMG_20250612_165844-Photoroom.png" alt="Girl working with laptop" className="sidebar-img" />
    </div>
  </div>
);


const Login = () => {
  const [role, setRole] = useState<'user' | 'admin'>('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRoleToggle = () => {
    setRole(role === 'user' ? 'admin' : 'user');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will handle backend auth later
  };

  return (
    <div className="login-page">
      <Sidebar />
      <div className="login-form-wrapper">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">Login to</h2>
          <h2 className="login-title-b">Excet Analytics</h2>
          <input
            type="email"
            className="login-input"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <div className="role-toggle-container">
            <span className="role-option user">User</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={role === 'admin'}
                onChange={handleRoleToggle}
              />
              <span className="slider round"></span>
            </label>
            <span className="role-option admin">Admin</span>
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
          <div className="login-links">
            <a href="#" className="forgot-password">Forgot password?</a>
              <div className="signup-wrapper">
    <span className="signup-text">New user?</span>
    <a href="#" className="signup-link">Sign up</a>
  </div>
          </div>
          {error && <div className="login-error">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;
