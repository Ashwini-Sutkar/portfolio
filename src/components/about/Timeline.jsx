import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";
import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          {/* //Stark Digital */}
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"June 2025 - October 2025"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              UI/UX Designer            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            > Stark Digital media pvt ltd</h4>
            <p data-aos="fade-right">
           Designed web applications in Figma for government platforms. Collaborated closely with developers to ensure pixel-perfect implementation and refined user flows and layouts based on user and internal feedback.      </p>
          </VerticalTimelineElement>





        {/* //yakai solutions */}
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"December 2023 - April 2025"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              UI/UX Designer            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            > Yakai solutions pvt ltd</h4>
            <p data-aos="fade-right">
            Designed user interfaces of web based applications using Figma tools.
            Collaborated with the development team to ensure the successful implementation of design elements. 
            Designed creative visual/interactive elements based on wire-frames.
            Worked closely with Product managers and Developers to create design strategies & facilitate a user-centered design approach.           </p>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            date={"August 2022 - November 2023"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              UI Developer
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
             Chapter Apps Inc Pvt Ltd (Elearning)
            </h4>
            <p data-aos="fade-right">
              {/* Working as Member Of Technical Staff, Led multiple projects in web development, system optimization, and API integration. */}
              Led E-learning platform development, improved developer productivity through creating Applications in Html,css,Javascript
               and enhanced user experience using Design React Library and Redux. improved user learning experience.     
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"December 2021 - August 2022"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Full Stack Web Development Bootcamp Training 
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            ></h4>
            <p data-aos="fade-right">
             Complete the 10 Months Full Stack Web Development Bootcamp Training from Newton School
            </p>
          </VerticalTimelineElement>




          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"June 2017 - July 2021"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Completed B.TECH in Electrical Engineering
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            ></h4>
            <p data-aos="fade-right"> 
             Fabtech Technical Campus College of Engineering Sangola,  Maharashtra
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
