import React, { useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Section1.css";

const Section1 = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <hr />
            <div className="modern-container">
                <div className="modern-image" data-aos="fade-up">
                    <img
                        src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673c21432b381ff61a638db1_hero-image-02.avif"
                        alt="Modern Building"
                    />
                </div>
                <div className="modern-content" data-aos="zoom-in">
                    <h1 className="main-heading" data-aos="fade-right">Where modern design meets comfort</h1>
                    <p className="description" data-aos="fade-left">
                        Experience the perfect blend of modern design and ultimate comfort, crafted for contemporary
                        living.
                    </p>
                    <div className="features" data-aos="slide-up">
                        <p data-aos="fade-up"> Spacious floor plans</p>
                        <p data-aos="fade-down"> Resort-style amenities</p>
                        <p data-aos="fade-right"> Designer interiors</p>
                        <p data-aos="fade-left"> 24/7 maintenance support</p>
                        <p data-aos="zoom-in"> Panoramic city views</p>
                    </div>
                    <button className="download-btn" data-aos="zoom-out">
                        <p>Download brochure</p> <FaDownload />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Section1;
