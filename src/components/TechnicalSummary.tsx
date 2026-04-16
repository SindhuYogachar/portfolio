import React from "react";
import FadeIn from "./FadeIn";
import "../assets/styles/TechnicalSummary.scss";

const TechnicalSummary: React.FC = () => {
  return (
    <section id="technical-summary" className="tech-summary">

      <div className="tech-summary-container">

        <div className="tech-summary-grid">

          {/* LEFT */}
          <FadeIn delay={0.1}>
            <div className="tech-summary-left">
              <h2>Professional Overview</h2>
            </div>
          </FadeIn>

          {/* RIGHT */}
          <FadeIn delay={0.3}>
            <div className="tech-summary-right">
              <p  style={{ textAlign: "justify" }}>
               Technical Program Management professional with over 5 years of experience in IT, including specialized experience in TPM and Jira administration and governance. Skilled in driving cross-functional engineering programs, optimizing workflows, and implementing scalable processes to support efficient delivery.
<br></br>Experienced in Agile environments with a strong focus on issue lifecycle management, process automation, and data-driven reporting. Brings a solid technical foundation in quality engineering and RPA automation, enabling a structured and systems-oriented approach to program execution.
              </p>

             
            </div>
          </FadeIn>

        </div>

      </div>

    </section>
  );
};

export default TechnicalSummary;