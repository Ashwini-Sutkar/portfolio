import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import { Introduction } from "./Introduction";
import { Techstacks } from "./Techstacks";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right">
          Hi, I am <span className="about__name">Ashwini Sutkar</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          A UI/UX Designer with expertise in Frontend Development, 
          specializing in crafting intuitive and visually appealing user interfaces.
          I am dedicated to delivering seamless user experiences by blending creative design with clean, responsive code.
          Passionate about solving problems and building impactful projects.
         
        
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/Ashwini-Sutkar"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:ashwinisutkar7@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+919266726544"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/ashwini-sutkar07/"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <Introduction />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
