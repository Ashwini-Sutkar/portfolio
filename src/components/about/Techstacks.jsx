import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiPostman,
  SiFigma,
  SiBootstrap,
  Si1Password,
  

} from "react-icons/si";

import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiFigma />
            <h5>Figma</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <Si1Password />
            <h5>Open ai</h5>
          </div>
          <div>
            <Si1Password />
            <h5>Lovable ai</h5>
          </div>

          <div>
            <Si1Password />
            <h5>Perplexity ai</h5>
          </div>

          <div>
            <SiBootstrap />
            <h5>Bootstrap</h5>
          </div>

          <div>
            <SiMaterialui />
            <h5>Material Ui</h5>
          </div>        
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <Si1Password />
            <h5>Claude ai</h5>
          </div>
        </div>
      </div>
    </>
  );
};
