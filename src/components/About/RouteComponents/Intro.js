import React from "react";
import "../../../styles/About/Route/Intro.scss";

const Intro = () => {
  return (
    <>
      <div className="about-intro">
        <div className="about-intro__container">
          <div className="about-intro__header">
            <h2 className="about-intro__number">
              0<span>1</span>
            </h2>
            <h1 data-aos="fade-down" data-aos-offset="0">
              H<span>ello</span>.
            </h1>
          </div>
          <div className="about-intro__description">
            <p data-aos="fade-right">
              I am <span>Dhruv Sanandiya</span>
            </p>
            <p data-aos="fade-right" data-aos-delay="200">
              A passionate React Developer and UI/UX enthusiast currently
              pursuing a Bachelor's in Computer Science & Design at GCET.
            </p>
            <p data-aos="fade-right" data-aos-delay="400">
              With hands-on experience in building responsive, real-world web
              applications using React.js, Tailwind CSS, PHP, and MySQL, I enjoy
              turning complex ideas into clean and intuitive interfaces.
            </p>
            <p data-aos="fade-right" data-aos-delay="600">
              I’ve developed live systems like a Loan Management System and
              Product Management Dashboard as part of internships at Ruhiverse
              Technologies and CodSoft.
            </p>
            <p data-aos="fade-right" data-aos-delay="800">
              I also explore backend development with Node.js, Express.js, and
              MySQL, and constantly upskill through certifications in DevOps,
              React, and Machine Learning.
            </p>

            <div className="about-intro__emoji">:&nbsp;)</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
