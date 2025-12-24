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

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      if (response.ok) {
        setStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", message: "" });
        // Reset form after 5 seconds
        setTimeout(() => {
          setStatus({
            submitting: false,
            submitted: false,
            error: false,
            message: "",
          });
        }, 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: "Sorry, there was an error sending your message. Please try again.",
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
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p style={{ display: "none" }}>
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>
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
