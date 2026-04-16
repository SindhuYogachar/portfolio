import React from "react";
import FadeIn from "./FadeIn";
import "../assets/styles/Contact.scss";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';

const Contact = () => {
  return (
    <section id="contact" className="contact-minimal">

      <div className="contact-wrapper">

        {/* 🔥 MAIN BUTTON */}
        <FadeIn>
          <a href="mailto:sindhuyagnihotri1998@gmail.com" className="contact-main-btn">
            <EmailIcon /> Get In Touch
          </a>
        </FadeIn>

        {/* 🔹 SMALL LINKS */}
        <FadeIn delay={0.2}>
          <div className="contact-links">

            <a href="/Sindhu.Y_CV.pdf" download="Sindhu.Y_CV.pdf">
              <DownloadIcon /> Download CV
            </a>

            <span>•</span>

            <a
              href="https://www.linkedin.com/in/sindhu-yogachar/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon /> LinkedIn
            </a>

          </div>
        </FadeIn>

      </div>

    </section>
  );
};

export default Contact;