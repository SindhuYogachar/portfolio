import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import icon1 from '../assets/images/specifications.png';
import icon2 from '../assets/images/jira.png';
import icon3 from '../assets/images/testing.png';

const labelsFirst = [
    "Jira Software & Jira Service Management",
    "Confluence",
    "JEasyBI & Power BI",
    "Aha! Roadmaps",
    "Postman (API Testing & Integrations)",
    
];

const labelsSecond = [
    "Jira & JSM",
    "Confluence",
    "EasyBI & PowerBI",
    "Postman & APIs",
    "Administration & Governance",
   
];

const labelsThird = [
    "Selenium",
    "Citrix",
    "SQL",
    "JIRA",
    "UiPath"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1 style={{ textAlign: "center" }}>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <img src={icon1} alt="Technical Program Manager" className="skill-icon" />
                    <h3>Technical Program Manager</h3>
                    <p style={{ textAlign: "justify" }}>Led cross-functional program execution and Agile delivery by leveraging Jira and Confluence for workflow optimization, while enabling data-driven decision-making through EasyBI and Power BI dashboards for program visibility and performance tracking.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech & Tools:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                     <img src={icon2} alt="Jira Administrator" className="skill-icon" style={{ width: "55px", height: "55px", objectFit: "contain" }} />
                    <h3>Jira Administrator</h3>
                    <p style={{ textAlign: "justify" }}>Designed and standardized Jira workflows to enable structured issue management and consistent process execution.
Implemented automation frameworks to streamline workflows and improve operational efficiency.
Managed reporting through EasyBI and Power BI to support governance, monitoring, and performance insights.</p>  <div className="flex-chips">
                        <span className="chip-title">Tech & Tools:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <img src={icon3} alt="RPA & Quality Engineer" className="skill-icon" />
                    <h3>RPA & Quality Engineer</h3>
                    <p style={{ textAlign: "justify" }}>Led QA and RPA initiatives in Agile environments, combining test strategy execution with automation.
Strengthened defect management and automation stability through structured tracking and collaboration.
Improved testing efficiency and release quality using Selenium, Citrix, and SQL.</p>  <div className="flex-chips">
                        <span className="chip-title">Tech & Tools:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;