import React from "react";
import { Link } from "react-router-dom";

import "../../styles/About/About.scss";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="about__container">
          <div className="about__header" id="about__heading">
            <h1 data-aos="fade-down" data-aos-delay="0" data-aos-offset="20">
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                A
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                B
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                O
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                U
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                T
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
            <p></p>
          </div>

          <div className="about__details-container">
            {/* Hello */}
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-once="true"
            >
              <Link to="/about/intro">
                <h1>
                  0<span>1</span>
                </h1>
                <h2>
                  H<span>ello,</span>
                </h2>
                <p>
                  I am <span>Dhruv Sanandiya.</span> <br />
                  Full Stack Developer & AI Engineer specializing in fintech, ed-tech, and AI products. 
                  Experienced in building scalable web platforms, AI-powered systems, and secure backend architectures 
                  with focus on performance, security, and long-term maintainability.
                </p>
              </Link>
            </div>

            {/* Experience */}
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="-180"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <Link to="/about/experience">
                <h1>
                  0<span>2</span>
                </h1>
                <h2>
                  E<span>xperience</span>
                </h2>
                <p>
                  <span>
                    Full Stack Developer Intern at Xelentor Technologies (Jul 2025 – Sep 2025).
                  </span>
                  <br />
                  <span>
                    React.js Developer Intern at Ruhiverse Technologies (Jan 2025 – Jun 2025).
                    Built production systems including loan management platforms, LMS systems, 
                    AI trip planners, and RAG systems with strong backend logic and GenAI integration.
                  </span>
                </p>
              </Link>
            </div>

            {/* Work */}
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="50"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <Link to="/about/internships">
                <h1>
                  0<span>3</span>
                </h1>
                <h2>
                  W<span>ork</span>
                </h2>
                <ul>
                  <li>
                    <span>Xelentor Technologies</span> – Full Stack Developer Intern
                  </li>
                  <li>
                    <span>Ruhiverse Technologies</span> – React.js Developer Intern
                  </li>
                </ul>
              </Link>
            </div>

            {/* Engineering */}
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="-180"
              data-aos-delay="700"
              data-aos-once="true"
            >
              <Link to="/about/graduation">
                <h1>
                  0<span>4</span>
                </h1>
                <h2>
                  E<span>ngineering</span>
                </h2>
                <p>
                  <span>
                    G H Patel College Of Engineering And Technology (GCET)
                  </span>
                  <br />
                  Pursuing B.Tech in Computer Science & Design (2021–2025).
                  Gained hands-on experience in full stack development and
                  visual effects design for college tech events. Contributed to
                  large-scale event media as part of the VFX team for IMAZE.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
