import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import Swal from "sweetalert2";
import "aos/dist/aos.css";
import "../Styles/Contact.css";
import Contact2 from "./Contact2";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phoneNumber || !formData.email || !formData.message) {
      Swal.fire({
        icon: "warning",
        title: "⚠️ Please fill all fields!",
        text: "All fields are required before submission.",
      });
      return;
    }

    emailjs
      .sendForm(
        "service_nl65ww3", 
        "template_zh5swtp", 
        formRef.current,
        "QzWjWiQWDWttxMdw6"
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: " Success!",
          text: "Your message has been sent successfully!",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });

        setFormData({ name: "", phoneNumber: "", email: "", message: "" });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "❌ Error!",
          text: "Failed to send the message. Please try again later.",
        });
        console.error(error.text);
      });
  };

  return (
    <>
      <Contact2 />
      <div className="contact-container">
        <div className="contact-agent">
          <img
            data-aos="zoom-in"
            src="https://images.livemint.com/img/2022/08/02/1600x900/Gaurav_Pandey_1659429569474_1659429569610_1659429569610.jfif"
            alt="Agent"
            className="agent-image"
          />
          <p data-aos="flip-left" className="agent-name">Samuel Bishop</p>
          <p data-aos="flip-left" className="agent-subtitle">
            Property consultant at WBS Co.
          </p>
          <p data-aos="flip-left" className="contact-info">
            <span style={{ color: "#d8af72", fontSize: "20px" }}>Ph-</span> +1 (1) 123-4567
          </p>
          <p data-aos="flip-left" className="contact-info">
            <span style={{ color: "#d8af72", fontSize: "20px" }}>Mail-</span> youloos477@gmail.com
          </p>
        </div>

        <div className="contact-form-container">
          <form ref={formRef} onSubmit={sendEmail} className="form-grid">
            <h1 data-aos="zoom-in" className="form-title">Let’s Connect</h1>
            <input
              data-aos="zoom-in-down"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="form-input1"
              required
            />
            <input
              data-aos="zoom-out"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone number"
              className="form-input"
              required
            />
            <input
              data-aos="zoom-in-left"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="form-input"
              required
            />
            <textarea
              data-aos="flip-up"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help?"
              className="form-textarea"
              required
            ></textarea>
            <button data-aos="fade-up-right" type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
