import React, { useEffect } from "react";

// Importing TagCloud for  3D Rotating Text Sphere
import TagCloud from "TagCloud";

import "../../styles/Skill/Skill.scss";

const Skill = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    const container = ".tagcloud";
    let radii;

    const texts = [
      "JavaScript",
      "TypeScript",
      "Python",
      "React",
      "Next.js",
      "Node.js",
      "FastAPI",
      "LangChain",
      "OpenAI",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Docker",
      "Git",
      "Tailwind CSS",
      "AI/GenAI",
      "RAG",
    ];

    // Decreasing 'radius' value for small screen devices
    function radiusValue() {
      if (window.innerWidth <= 778) {
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

    // Cleanup function (optional, but good practice)
    return () => {
      const tagCloudElement = document.querySelector(container);
      if (tagCloudElement) {
        tagCloudElement.innerHTML = "";
      }
    };
  }, []);
  return (
    <>
      <div className="skill" id="skill">
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
            {/* Column 1: Languages, Frontend, Backend */}
            <div className="skill__column skill__column--first">
              <div className="skill__details">
                <h4>Languages</h4>
                <ul>
                  <li>
                    <span>JavaScript (ES6+), TypeScript, Python, C, Java, SQL</span>
                  </li>
                </ul>
              </div>
              <div className="skill__details">
                <h4>Frontend</h4>
                <ul>
                  <li>
                    <span>React.js, Next.js, Redux Toolkit</span>
                  </li>
                  <li>
                    <span>Tailwind CSS, Material UI, HTML5, CSS3</span>
                  </li>
                  <li>
                    <span>Responsive Design</span>
                  </li>
                </ul>
              </div>
              <div className="skill__details">
                <h4>Backend</h4>
                <ul>
                  <li>
                    <span>Node.js, Express.js, ASP.NET Core Web API</span>
                  </li>
                  <li>
                    <span>REST APIs, JWT Authentication, Role-Based Access Control</span>
                  </li>
                  <li>
                    <span>Payment Gateway Integration (Razorpay, Stripe)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2: Databases, AI & GenAI, DevOps & Tools */}
            <div className="skill__column skill__column--second">
              <div className="skill__details">
                <h4>Databases</h4>
                <ul>
                  <li>
                    <span>MySQL, PostgreSQL, MSSQL, Firebase, Redis (Vector DB)</span>
                  </li>
                </ul>
              </div>
              <div className="skill__details">
                <h4>AI & GenAI</h4>
                <ul>
                  <li>
                    <span>LangChain, RAG Architecture, Multi-Agent Systems</span>
                  </li>
                  <li>
                    <span>OpenAI API, Gemini API, Hugging Face Transformers</span>
                  </li>
                  <li>
                    <span>Prompt Engineering, Vector Search & Embeddings</span>
                  </li>
                </ul>
              </div>
              <div className="skill__details">
                <h4>DevOps & Tools</h4>
                <ul>
                  <li>
                    <span>Git, GitHub, Docker, CI/CD</span>
                  </li>
                  <li>
                    <span>Postman, Swagger, Firebase Cloud Functions, Vercel</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: 3D Text Cloud */}
            <div className="skill__column skill__column--third">
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
      </div>
    </>
  );
};

export default Skill;

