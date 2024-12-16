import React from "react";
import { FaReact, FaHardHat } from "react-icons/fa";
import "./Projects.css";
import foodWeb from "../../Assets/images/shopping.jpg"
import photoShotWeb from "../../Assets/images/Landingpage.jpg"
import imdbClone from "../../Assets/images/urbn.png"
import amazonClone from "../../Assets/images/amazone.png"
import {
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiFigma,
  SiBehance
} from "react-icons/si";
// import {
//   SiBlockchaindotcom,
//   SiHtml5,
//   SiMaterialui,
//   SiChai,
//   SiEthereum,
//   SiExpress,
//   SiSocketdotio,
//   SiTailwindcss,
//   SiReactrouter,
//   SiJavascript,
//   SiMongodb,
//   SiNodedotjs,
//   SiCss3,
//   SiRedux,
// } from "react-icons/si";

const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects   
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={amazonClone}
                  alt="amazon-clone"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Amazon Clone</h2>
              <p>
              Amazon is an e-commerce platform that sells many product lines, including media (books, movies, music, and software), baby products, consumer electronics, beauty products, groceries, health and personal care products, industrial & scientific supplies, kitchen items, jewelry, watches, sporting goods, toys and games.</p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <FaReact />
              </div>
              <div>
                <a
                  href="https://main--amazon-clone-5d4f2c.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Ashwini-Sutkar/amazone-clone/tree/main"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> 
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={imdbClone}
                  alt="imdb-clone"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Urbanwood</h2>
              <p>
              UrbanWood is an online furniture store , solid wood furniture for modern homes. 
               blending durability with elegant designs, tailored to fit your style and space perfectly.              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <FaReact />
              </div>
              <div>
                <a
                  href="https://urbanwood.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Ashwini-Sutkar/urbanwood"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> 
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={foodWeb}
                  alt="shopping"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Ecommerce Shopping App</h2>
              <p>
              Our simplified e-commerce app focuses on delivering a seamless, 
              intuitive shopping experience. By employing a clean, minimalist design,
               we aim to remove unnecessary clutter and streamline the shopping process.
                
              </p>
              <div>
                {/* <SiHtml5 /> */}
                <SiBehance />
                {/* <SiNodedotjs /> */}
                <SiFigma />
                {/* <SiExpress />
                <SiMongodb /> */}

              </div>
              <div>
                <a
                  href="https://www.behance.net/gallery/208910405/Shopping-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://www.behance.net/gallery/208910405/Shopping-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Design
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> 
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={photoShotWeb}
                  alt="photographic-website"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Landing Pages</h2>
              <p> Showcasing different types of Landing pages Such as Fashion Outfits , Coffee, healthy eatings and so on. 
              </p>  
              <div>
                <SiBehance />
                <SiFigma />
              </div>
              <div>
                <a
                  href="https://www.behance.net/gallery/214088573/Landing-Pages"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://www.behance.net/gallery/214088573/Landing-Pages"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Design
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </>
  );
};

export default Projects;