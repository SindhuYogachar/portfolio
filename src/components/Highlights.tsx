import React from "react";
import FadeIn from "./FadeIn";
import "../assets/styles/Highlights.scss";

const Highlights = () => {
  return (
    <section id="highlights" className="highlights">
      
      <div className="highlights-container">

        <h2 className="section-title">Career Highlights</h2>

        <div className="highlights-grid">

          {/* ROLE 1 */}
          <FadeIn delay={0.1}>
            <div className="highlight-card">
              <h3>Technical Program Operations / Jira Administrator</h3>
              <ul style={{ textAlign: "justify" }}>
                <li>Drove Jira governance by designing and standardizing workflows, optimizing issue lifecycle management, and enabling cross-functional collaboration across Engineering, Security Operations, and Incident Management.</li>
                <li>Delivered process efficiency through implementation of Jira automation frameworks and AI-driven backlog optimization, strengthening Agile delivery and requirement quality.</li>
                <li>Enabled data-driven decision-making by developing and managing EasyBI and Power BI dashboards, improving program visibility and performance tracking.</li>
                 </ul>
            </div>
          </FadeIn>

          {/* ROLE 2 */}
          <FadeIn delay={0.2}>
            <div className="highlight-card">
              <h3>Quality Engineer</h3>
              <ul style={{ textAlign: "justify" }}>
                <li> Led quality engineering initiatives across Agile environments by designing and executing comprehensive test strategies, including regression and exploratory testing, to ensure robust product validation.</li>
                <li> Strengthened defect management by implementing structured tracking practices and collaborating closely with engineering teams to drive timely resolution and maintain high-quality standards.</li>
                <li> Enhanced QA efficiency and release stability by optimizing testing processes, improving test coverage, and delivering actionable quality insights to support informed release decisions.</li>
              </ul>
            </div>
          </FadeIn>

          {/* ROLE 3 */}
          <FadeIn delay={0.3}>
            <div className="highlight-card">
              <h3>RPA Automation Specialist</h3>
              <ul style={{ textAlign: "justify" }}>
                <li>Designed and implemented end-to-end RPA solutions to automate business processes, streamline operations, and reduce dependency on manual workflows across multiple systems.</li>
                <li>Strengthened automation reliability and performance by implementing monitoring frameworks, exception handling mechanisms, and SQL-based data processing to support stable and scalable automation.</li>
                <li>Strengthened automation reliability and performance by implementing monitoring frameworks, exception handling mechanisms, and SQL-based data processing to support stable and scalable automation.</li>
                
              </ul>
            </div>
          </FadeIn>

        </div>

      </div>

    </section>
  );
};

export default Highlights;