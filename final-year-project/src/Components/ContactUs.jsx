import React, { useState } from "react";
import "./ContactUs.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
// import headerbg from "../assets/2_gfeim9.avif";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    message: "",
  });
  const MAINSERVER_URL=process.env.REACT_APP_MAINSERVER_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(`${MAINSERVER_URL}/api/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        message: formData.message,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setSubmitted(true);
      // Clear form
      setFormData({
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        message: "",
      });

      // Hide thank you message after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } else {
      alert(data.error || "Something went wrong.");
    }
  } catch (err) {
    console.error("Error submitting query:", err);
    alert("An error occurred while submitting the query.");
  }
};


  return (
    <div className="contact-us-container">
      <div className="hero-section">
        <img src="header.jpeg" alt="hero" className="hero-image" />
        <h1 className="hero-heading ]">Reach Out to Us</h1>
      </div>

      <div className="contact-section">
        <div className="form-container">
          <h2>Send Us a Message</h2>
          <p>
            Do you have a question? A complaint? Or need any help from
            AapnoSathi? Feel free to contact us.
          </p>

          {submitted && (
            <div className="thank-you-msg">
              Thank you! Your message has been sent.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <div className="input-group">
                <label className="input-label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your First Name"
                  className="input-field"
                  required
                />
              </div>
              <div className="input-group">
                <label className="input-label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your Last Name"
                  className="input-field"
                  required
                />
              </div>
            </div>

            <div className="input-row">
              {/* <div className="input-group">
                <label className="input-label">Contact Number</label>
                <input
                  type="tel"
                  name="contact"
                  maxLength="10"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter your Contact Number"
                  className="input-field"
                  required
                />
              </div> */}
              <div className="input-group">
                <label className="input-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  className="input-field"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your Message"
                className="textarea-field"
                required
              ></textarea>
            </div>

            <div className="submit-section">
              {submitted ? (
                <button type="button" className="submit-btn sent" disabled>
                  Sent
                </button>
              ) : (
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="contact-details">
          <h3>We are always here to help you!</h3>
          <div className="extra-contact-boxes">
            <div className="contact-box">
              <h4>Send us an SMS</h4>
              <p>
                Reach out directly via SMS at <strong>1122334455</strong>.
              </p>
            </div>
            <div className="contact-box">
              <h4>Send us an Email</h4>
              <p>
                Email us at <strong>support@example.com</strong> for any
                inquiries.
              </p>
            </div>
          </div>
          <div className="custom-divider"></div>
          <div className="social-links">
            <a href="#">
              <FaFacebookSquare />
            </a>
            <a href="#">
              <FaInstagramSquare />
            </a>
            <a href="#">
              <FaTwitterSquare />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <div className="faq-container">
          <h3 className="faq-heading">Frequently Asked Questions</h3>
          <div className="faq-questions scrollable-faq">
            <div className="faq-item">
              <p>
                <strong>What is the Student-Friendly City Guide?</strong>
              </p>
              <p>
                The Student-Friendly City Guide helps students navigate city
                life with budget-friendly tips and local info.
              </p>
            </div>
            <div className="faq-item">
              <p>
                <strong>Which cities are covered in the guide?</strong>
              </p>
              <p>Currently inspired by Jodhpur, with plans to expand soon.</p>
            </div>
            <div className="faq-item">
              <p>
                <strong>Is the information regularly updated?</strong>
              </p>
              <p>
                Yes, we keep updating content based on student feedback and
                local changes.
              </p>
            </div>
            <div className="faq-item">
              <p>
                <strong>Can students contribute suggestions?</strong>
              </p>
              <p>
                Absolutely! Use the contact form above to share suggestions or
                hidden gems.
              </p>
            </div>
            <div className="faq-item">
              <p>
                <strong>Is the guide accessible on mobile?</strong>
              </p>
              <p>Yes, the platform is fully responsive and mobile-friendly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
