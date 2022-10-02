import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experiences() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">

      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Engineer - Intuit
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software Engineer -  2,
            Bangalore, India
          </h4>
          <p>
          Building Intuit Data Exchange's Platform, a self serving platform for dynamic creation of infrastructure as a service
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2020 - Jan 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Engineer - Citrix
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software Engineer -  1,
            Bangalore, India
          </h4>
          <p>  Managing a few Spring-Hibernate RESTful multi-tenant micro-services for CITRIX SD-WAN Team </p>
        </VerticalTimelineElement>

        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2019 - July 2019"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Intern - Samsung
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software Engineer Intern,
            Bangalore, India
          </h4>
          <p> AI/ML intern worked on few NLP projects for classifying news sentiments </p>
        </VerticalTimelineElement>
       

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2016 - May 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            R.V College of Engineering, Bangalore, India
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer and Infomation Science</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Experiences;