import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../Styles/Contact2.css";

const Contact2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="contact-container2">
      <div className="contact-info">
        <h1 className="contact-title" data-aos="fade-right">
          Get in touch with <br /> Apartmentt
        </h1>
        
        <div className="contact-details">
          <p data-aos="fade-left">
            <FaPhoneAlt className="contact-icon" /> +1 (555) 123-4567
          </p>
          <p data-aos="fade-up">
            <FaEnvelope className="contact-icon" /> business@example.com
          </p>
        </div>
        
        <p className="contact-location" data-aos="zoom-in">
          <FaMapMarkerAlt className="contact-icon" /> Chicago HQ Estica Cop. Macomb, MI 48042
        </p>
      </div>
      
      <div className="contact-map" data-aos="flip-left">
        <img
          src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac97d9a97cb3ec9181211_map.avif"
          alt="Map"
        />
      </div>
    </div>
  );
};

export default Contact2;
