import React from "react";
import "./Login.scss";
import {
  FaUser,
  FaLock,
  FaFacebook,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

export default function Login() {
  return (
    <div className="login-container">
      <h1 className="title">Login</h1>
      <div className="login-form">
        <div className="input-container">
          <AiOutlineMail className="icon" />
          <input type="email" placeholder="Email" className="input-field" />
        </div>
        <div className="input-container">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <FiEye className="icon-eye" />
        </div>
        <a href="#" className="forgot-password">
          Forgot Password?
        </a>
        <button className="login-button">LOGIN</button>
        <button className="signup-button">SIGNUP</button>
      </div>
      <div className="social-login">
        <button className="social-button facebook">
          <FaFacebook className="social-icon" /> Facebook
        </button>
        <button className="social-button twitter">
          <FaTwitter className="social-icon" /> Twitter
        </button>
        <button className="social-button google">
          <FaGoogle className="social-icon" /> Google
        </button>
      </div>
    </div>
  );
}
