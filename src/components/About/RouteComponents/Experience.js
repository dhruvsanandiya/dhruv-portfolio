import React from "react";

import "../../../styles/About/Route/Experience.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <>
      <div className="experience">
        <div className="experience__container">
          <div className="experience__header">
            <h2 className="experience__number">
              0<span>2</span>
            </h2>
            <h1 data-aos="fade-down" data-aos-offset="0">
              E<span>xperience</span>.
            </h1>
          </div>
          <div className="experience__description">
            <div className="experience__main-box">
              {/* Ruhiverse Technologies */}
              <div className="experience__box">
                <h2>Ruhiverse Technologies</h2>
                <h3>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="experience__calendar"
                  />
                  &nbsp;&nbsp;Jan 2025 - Present
                </h3>
                <ul>
                  <p>Responsible for -</p>
                  <li data-aos="fade-right" data-aos-delay="200">
                    <span>
                      Developed a full-featured Loan Management System using
                      React.js, integrated with PHP/MySQL APIs using Axios.
                    </span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="400">
                    <span>
                      Enhanced UI/UX using Tailwind CSS, implemented role-based
                      access, real-time search, and pagination.
                    </span>
                  </li>
                </ul>
              </div>

              {/* CodSoft */}
              <div className="experience__box">
                <h2>CodSoft</h2>
                <h3>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="experience__calendar"
                  />
                  &nbsp;&nbsp;May 2024 - Jun 2024
                </h3>
                <ul>
                  <p>Responsible for -</p>
                  <li data-aos="fade-right" data-aos-delay="200">
                    <span>
                      Designed a Task Management App UI using Figma, focusing on
                      user-centric features like task tracking and
                      prioritization.
                    </span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="400">
                    <span>
                      Created wireframes and interactive prototypes to ensure
                      cross-device functionality and smooth user experience.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
