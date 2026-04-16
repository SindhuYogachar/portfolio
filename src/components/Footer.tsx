import React from "react";
import "../assets/styles/Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          © {new Date().getFullYear()} Sindhu Y. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;