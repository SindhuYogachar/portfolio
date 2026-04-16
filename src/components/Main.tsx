import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import myPhoto from "../assets/images/1000611518.png";
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
            <img src={myPhoto} alt="Avatar" />

        </div>

        <div className="content">
          
          <div className="social_icons">
            <a href="mailto:sindhuyagnihotri1998@gmail.com" target="_blank" rel="noreferrer">
              <EmailIcon/>
            </a>
            <a href="https://www.linkedin.com/in/sindhu-yogachar" target="_blank" rel="noreferrer">
              <LinkedInIcon/>
            </a>
          </div>

          <h1>Sindhu Y</h1>
          <p style={{ fontWeight: "bold" }}>Technical Program Manager | Jira Governance Specialist </p>

          {/* ✅ NEW BUTTON */}
          <a href="/Sindhu.Y_CV.pdf" download="Sindhu.Y_CV.pdf" className="cv-btn">
            <DownloadIcon /> Download CV
          </a>

         

        </div>
      </div>
    </div>
  );
}

export default Main;