import React from "react";
import MatrixRain from "./MatrixRain";
import "../styles/style.css";
import avatar from "../assets/avatar.mp4";
import logo from "../assets/teal.png";

export default function BusinessCard() {
  return (
    <>
      <MatrixRain />
      <div className="card">
        <video src={avatar} autoPlay loop muted playsInline className="avatar-video" />
        <h1>Sara Mazal</h1>
        <p className="job-title web">WebDeveloper & EthicalHacker</p>

        <blockquote>
          "The future is not some place we are going, but one we are creating."
          <span>- Inspired by Ghost in the Shell</span>
        </blockquote>

        <div className="socials">
          <SocialButton link="https://www.linkedin.com/in/sara-mazal" icon="fa-brands fa-linkedin-in" label="LinkedIn" className="linked" />
          <SocialButton link="https://github.com/saramazal" icon="fa-brands fa-github" label="GitHub" className="github" />
          <SocialButton link="https://tryhackme.com/p/maz4l" icon="fas fa-shield-alt" label="TryHackMe" className="shield" />
          <SocialButton link="https://codepen.io/Saramazal" icon="fab fa-codepen" label="CodePen" className="codepen" />
          <SocialButton link="https://saramazal.vercel.app/" icon="fa-solid fa-globe" label="WebPortal" className="twitter" />
          <SocialButton link="https://maz4lhacks.vercel.app/" icon="fa-solid fa-meteor" label="MazalHacks" className="blog" />
        </div>

        <div className="footer">
          <div className="footer-text">&gt; ENCRYPTED_TRANSMISSION_COMPLETE</div>
          <div className="status">
            <div className="status-dot"></div>
            <span>ONLINE</span>
          </div>
          <img src={logo} alt="Mazal Logo" className="footer-logo" />
          <p className="mazal">maz4l <span>&copy;</span> 2025 </p>
        </div>
      </div>
    </>
  );
}

function SocialButton({ link, icon, label, className }) {
  return (
    <button className={className} onClick={() => window.open(link)}>
      <i className={icon}></i> {label}
    </button>
  );
}
