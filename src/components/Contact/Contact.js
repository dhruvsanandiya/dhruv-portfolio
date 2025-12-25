import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import "../../styles/Contact/Contact.scss";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, message: "" });

    try {
      // Try Netlify function endpoint first (for local dev with netlify dev)
      // Then fallback to Vercel API route (for Vercel deployments)
      const endpoints = ["/.netlify/functions/sendEmail", "/api/sendEmail"];
      let response = null;

      for (const endpoint of endpoints) {
        try {
          response = await fetch(endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              message: formData.message,
            }),
          });

          // If we get a successful response (not 404), use it
          if (response.status !== 404) {
            break;
          }
          // If 404 and this is the last endpoint, we'll handle it below
          if (endpoint === endpoints[endpoints.length - 1]) {
            break;
          }
          // Otherwise, continue to next endpoint
        } catch (fetchError) {
          // If this isn't the last endpoint, try the next one
          if (endpoint !== endpoints[endpoints.length - 1]) {
            continue;
          }
          // If this is the last endpoint and we still have an error, throw it
          throw fetchError;
        }
      }

      // Handle specific status codes
      if (!response || response.status === 404) {
        throw new Error(
          "Email service not available. Please contact directly at sanandiyadhruv77@gmail.com"
        );
      }

      if (response.status === 405) {
        throw new Error(
          "Method not allowed. Please contact directly at sanandiyadhruv77@gmail.com"
        );
      }

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        // If response is not JSON, provide a helpful error
        if (response.status === 503) {
          throw new Error(
            "Email service temporarily unavailable. Please try again later or contact directly at sanandiyadhruv77@gmail.com"
          );
        }
        throw new Error(`Invalid response from server (${response.status}). Please try again or contact directly at sanandiyadhruv77@gmail.com`);
      }

      if (response.ok) {
        setStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
        // Reset status message after 5 seconds
        setTimeout(() => {
          setStatus({
            submitting: false,
            submitted: false,
            error: false,
            message: "",
          });
        }, 5000);
      } else {
        // Use the error message from the server if available
        const errorMessage = data?.error || `Server error (${response.status}). Please try again later.`;
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: error.message || "Sorry, there was an error sending your message. Please try again or contact me directly at sanandiyadhruv77@gmail.com",
      });
    }
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="contact__header">
          <h1>
            <span data-aos="fade-down" data-aos-delay="0" data-aos-offset="200">
              C
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-offset="200"
            >
              O
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-offset="200"
            >
              N
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="600"
              data-aos-offset="200"
            >
              T
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="800"
              data-aos-offset="200"
            >
              A
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="1000"
              data-aos-offset="200"
            >
              C
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="1200"
              data-aos-offset="200"
            >
              T
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="1400"
              data-aos-offset="200"
            >
              .
            </span>
          </h1>
        </div>
        <div className="contact__container">
          <div className="contact__details">
            <div className="contact__form" data-aos="fade-up">
              <form
                name="contact"
                onSubmit={handleSubmit}
              >
                <p className="contact__form-group">
                  <label htmlFor="name">Name: </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Enter name"
                    required
                  />
                </p>
                <p className="contact__form-group">
                  <label htmlFor="email">Email: </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Enter email"
                    required
                  />
                </p>
                <p className="contact__form-group">
                  <label htmlFor="message">Message: </label>
                  <textarea
                    name="message"
                    id="message"
                    cols="20"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message"
                    required
                  ></textarea>
                </p>
                {status.message && (
                  <div
                    className={`contact__status ${
                      status.error ? "contact__status--error" : "contact__status--success"
                    }`}
                  >
                    {status.message}
                  </div>
                )}
                <button
                  type="submit"
                  className="contact__send-btn"
                  disabled={status.submitting}
                >
                  {status.submitting ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
          </div>
          <div className="contact__info" data-aos="fade-up">
            <h3 className="contact__info-title">Let's Connect</h3>
            <div className="contact__info-details">
              <ul>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faLocationDot} size="2x" />
                  <p>
                    <span>Address:&nbsp;&nbsp;</span>Ahmedabad, Gujarat, India
                  </p>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faPhone} size="2x" />
                  <p>
                    <span>Phone:</span>&nbsp;&nbsp;(+91) 9316424006
                  </p>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                  <p>
                    <span>Email:&nbsp;&nbsp;</span>sanandiyadhruv77@gmail.com
                  </p>
                </li>
              </ul>
            </div>
            <div className="contact__social">
              <p className="contact__linkedin">
                <a
                  href="https://www.linkedin.com/in/dhruvsanandiya/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </p>

              <p className="contact__github">
                <a
                  href="https://github.com/dhruvsanandiya"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
