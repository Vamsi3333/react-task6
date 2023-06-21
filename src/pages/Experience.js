import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {FaSchool} from 'react-icons/fa';
import {BsPersonWorkspace} from 'react-icons/bs';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2006 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            VSR EM High School, Nellore, Andhra Pradesh
          </h3>
          <p> Schooling</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Narayana Junior college, Nellore, Andhra pradesh
          </h3>

          <p>Intermediate, MPC</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            VIT, Chennai, Tamil Nadu
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            BTech
          </h4>

          <p>Electronics and communication engineering</p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
