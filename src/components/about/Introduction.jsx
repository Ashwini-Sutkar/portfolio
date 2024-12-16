import React from "react";
import "./Introduction.css";
import RahulPng from "../../Assets/images/Ashwini_Photo.jpg";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">

              <img src={RahulPng} alt="Images" />

            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am{" "}
                <span className="different">Ashwini Sutkar</span> from{" "}
                <span className="different"> Solapur City, Maharashtra</span>. I
                have completed my graduation in Electrical Engineering
                from Fabtech Technical Campus College of Engineering, Sangola (dist. Solapur) and University(DBATU) Lonere, Raigad . A UI/UX Designer with strong technical
                skills. An impactful team player with creative problem - solving
                skills and willing to build user - friendly Applications. Looking
                for a role as a Designer to implement diverse experience and be
                a part of a growth-oriented environment.
              </h4>
              <h4>Some of my interests apart form Designing :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Drawing and Paintings{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Watching Podcast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Watching Movies and Webseries{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Reading Blogs and Books{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
