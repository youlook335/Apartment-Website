import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"; 
import "../Styles/Startgey.css";

const Startgey = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <hr />
      <section className="facts-section" data-aos="fade-up">
        <h1 className="section-title" data-aos="fade-down">Facts that matter</h1>
        <div className="facts-container">
          <div className="fact" data-aos="zoom-in">
            <h2 className="fact-number">250</h2>
            <p className="fact-title">Parking spaces</p>
            <p className="fact-description">250 Secure underground parking spots</p>
          </div>
          <div className="fact" data-aos="fade-right">
            <h2 className="fact-number">12</h2>
            <p className="fact-title">Amenities</p>
            <p className="fact-description">Including a rooftop pool and fitness center</p>
          </div>
          <div className="fact" data-aos="fade-left">
            <h2 className="fact-number">7</h2>
            <p className="fact-title">Number of elevators</p>
            <p className="fact-description">Experience seamless access with modern elevators.</p>
          </div>
          <div className="fact" data-aos="zoom-in">
            <h2 className="fact-number">10,000 <span className="unit">sq. ft.</span></h2>
            <p className="fact-title">Green spaces</p>
            <p className="fact-description">Landscaped gardens and courtyards</p>
          </div>
          <div className="fact" data-aos="fade-up">
            <h2 className="fact-number">15+</h2>
            <p className="fact-title">Floors</p>
            <p className="fact-description">Stories of modern living</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Startgey;
