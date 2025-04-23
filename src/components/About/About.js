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
                  Highly passionate Front-End Developer & UI/UX Designer with
                  strong problem-solving skills and design thinking approach.
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
                    React Developer Intern at Ruhiverse Technologies (Jan 2025 –
                    Present).
                  </span>
                  <br />
                  <span>
                    Previously a UI/UX Intern at CodSoft (May 2024 – June 2024).
                    Experience in building responsive, user-friendly
                    applications using React.js, Tailwind CSS, and backend
                    integrations.
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
                    <span>Ruhiverse Technologies</span> – React Developer Intern
                  </li>
                  <li>
                    <span>CodSoft</span> – UI/UX Designer Intern
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
