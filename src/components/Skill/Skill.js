import React, { useEffect } from "react";

// Importing TagCloud for  3D Rotating Text Sphere
import TagCloud from "TagCloud";

import "../../styles/Skill/Skill.scss";

const Skill = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    const container = ".tagcloud";
    let radii;

    // If 3D Text Sphere is not showing up after deployment remove the return (i.e, return() =>{}) function from below code
    return () => {
      const texts = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Python",
        "C/C++",
        "SQL",
        "UI/UX Design",
        "Responsive Design",
      ];

      // Decrasing 'radius' value for small screen devices
      function radiusValue() {
        if (window.screen.width <= 778) {
          radii = 150;
        } else {
          radii = 290;
        }
        return radii;
      }

      const options = {
        radius: radiusValue(),
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);
  return (
    <>
      <div className="skill">
        <div className="skill__main-container">
          <div className="skill__header" id="skill__heading">
            <h1>
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                S
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                K
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                I
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                L
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                L
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
          </div>
          <div className="skill__inner-container">
            <div className="skill__info">
              <div className="skill__details-container">
                <div className="skill__details">
                  <h4>Languages</h4>
                  <ul>
                    <li>
                      <span>C, C++, Python, PHP(Basic), SQL</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>FrontEnd</h4>
                  <ul>
                    <li>
                      <span>HTML5, CSS3, JavaScript, TypeScript</span>{" "}
                    </li>
                    <li>
                      {" "}
                      <span>ReactJS, Tailwind CSS, Bootstrap</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>BackEnd</h4>
                  <ul>
                    <li>
                      <span>Node.js, Express.js, MySQL ,RESTful APIs</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>UI/UX & Design</h4>
                  <ul>
                    <li>
                      <span>Figma, Adobe After Effect</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3D Text Cloud  */}
            <div className="skill__cloud">
              <div
                className="tagcloud"
                data-aos="zoom-in-up"
                data-aos-offset="200"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
