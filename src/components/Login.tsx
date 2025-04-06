import React, { useState } from "react";
import "./Login.css";

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <button className="close-button" onClick={onClose} aria-label="Close login form">×</button>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit" className="login-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;