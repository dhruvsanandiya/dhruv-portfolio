import React from "react";

import "../../../styles/About/Route/Graduation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const Graduation = () => {
  return (
    <>
      <div className="graduation">
        <div className="graduation__container">
          <div className="graduation__header">
            <h2 className="graduation__number">
              0<span>4</span>
            </h2>
            <h1 data-aos="fade-down" data-aos-offset="0">
              E<span>ngineering</span>.
            </h1>
          </div>

          <div className="graduation__description">
            <h1>G H Patel College Of Engineering And Technology (GCET)</h1>
            <h2>
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="internships__calendar"
              />
              &nbsp;&nbsp;August 2021 - May 2025 (Expected)
            </h2>
            <p>
              Pursuing B.Tech in Computer Science & Design from GCET, Anand,
              with a current CGPA of 7.37. Actively involved in frontend
              development, full stack projects, and UI/UX design through
              academic and real-world applications.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graduation;
