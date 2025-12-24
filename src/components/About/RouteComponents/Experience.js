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
              {/* Xelentor Technologies */}
              <div className="experience__box">
                <h2>Xelentor Technologies Pvt. Ltd.</h2>
                <h3>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="experience__calendar"
                  />
                  &nbsp;&nbsp;Jul 2025 – Sep 2025
                </h3>
                <ul>
                  <p>Full Stack Developer Intern - Responsible for -</p>
                  <li data-aos="fade-right" data-aos-delay="200">
                    <span>
                      Built full-stack LMS using React.js, ASP.NET Core, and MSSQL with JWT authentication 
                      and role-based access control.
                    </span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="400">
                    <span>
                      Implemented automated certificate generation, optimized APIs for performance, 
                      and created comprehensive dashboards for students and instructors.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Ruhiverse Technologies */}
              <div className="experience__box">
                <h2>Ruhiverse Technologies</h2>
                <h3>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="experience__calendar"
                  />
                  &nbsp;&nbsp;Jan 2025 – Jun 2025
                </h3>
                <ul>
                  <p>React.js Developer Intern - Responsible for -</p>
                  <li data-aos="fade-right" data-aos-delay="200">
                    <span>
                      Built loan management platform using React, Node.js, and MySQL with document verification 
                      and EMI scheduling.
                    </span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="400">
                    <span>
                      Integrated Razorpay and Stripe payment gateways, implemented real-time notifications, 
                      and developed secure authentication systems.
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
