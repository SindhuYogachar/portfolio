import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1 style={{ textAlign: 'center' }}>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jul 2022 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Technical Program Operations / Jira Administrator</h3>
            <h4 className="vertical-timeline-element-subtitle">OneTrust, Bangalore</h4>
            <p style={{ textAlign: "justify" }}>
              Drove cross-functional program initiatives and Jira governance by standardizing workflows, implementing automation, and enhancing backlog quality through AI-driven solutions. Enabled improved issue lifecycle management and program visibility through structured reporting and scalable dashboards.


            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2022 - June 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Quality Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">OneTrust, Bangalore</h4>
            <p style={{ textAlign: "justify" }}>
              Led quality engineering initiatives across Agile environments, driving effective test strategies and defect management practices. Strengthened QA efficiency and test coverage through process optimization and cross-functional collaboration. Enabled stable and reliable releases by delivering actionable quality insights.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sept 2020 – Mar 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">RPA Automation Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Huawei Technologies, Bangalore</h4>
            <p style={{ textAlign: "justify" }}>
              Designed and implemented RPA solutions to automate repetitive business processes and streamline operations.
Developed robust automation scripts using Selenium and Citrix to handle complex, system-driven workflows.
Enhanced automation reliability and efficiency through structured monitoring, exception handling, and SQL-based data processing.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;