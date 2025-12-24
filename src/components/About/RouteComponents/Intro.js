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
              I am <span>Dhruv Sanandiya</span>, a Full Stack Developer & AI Engineer based in Ahmedabad, Gujarat, India.
            </p>
            <p data-aos="fade-right" data-aos-delay="200">
              I specialize in building scalable web platforms, AI-powered systems, and secure backend architectures 
              for fintech, ed-tech, and AI products. With hands-on experience in production environments, I focus on 
              performance, security, and long-term maintainability.
            </p>
            <p data-aos="fade-right" data-aos-delay="400">
              My expertise spans across full-stack development with React.js, Next.js, Node.js, and ASP.NET Core, 
              along with advanced AI/GenAI integration using LangChain, RAG architectures, and multi-agent systems. 
              I've built loan management systems, LMS platforms, AI trip planners, and RAG systems that handle real-world complexity.
            </p>
            <p data-aos="fade-right" data-aos-delay="600">
              I'm passionate about creating robust backend logic, scalable APIs, and seamless GenAI integrations. 
              Whether it's implementing JWT authentication, role-based access control, payment gateway integrations, 
              or vector search systems, I ensure every solution is production-ready and maintainable.
            </p>
            <p data-aos="fade-right" data-aos-delay="800">
              Available for freelance and remote opportunities, I bring a strong problem-solving approach and 
              commitment to delivering high-quality, scalable solutions that drive business value.
            </p>

            <div className="about-intro__emoji">:&nbsp;)</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
