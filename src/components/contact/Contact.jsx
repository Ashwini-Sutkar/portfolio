import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";
import { Twitter } from "@material-ui/icons";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className={"contactcontainer " + themename} data-aos="fade-right">
          <a
            href="https://www.linkedin.com/in/ashwini-sutkar07/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin" />
          </a>
          <a
            href="https://github.com/Ashwini-Sutkar"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub className="github" />
          </a>
          <a
            href="mailto:ashwinisutkar7@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <CgMail className="email" />
          </a>
          <a href="tel:+919266726544" target="_blank" rel="noreferrer">
            <BsFillTelephoneFill className="phone" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;