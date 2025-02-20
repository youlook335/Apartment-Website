import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Section.css";
import Button from "./Button";

const Section = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    }, []);

    return (
        <div className="Luxury-container">
            <div className="Luxury-content" data-aos="fade-up">
                <h1 data-aos="fade-down">Luxury living & city vibes</h1>
                <p className="Luxury-paragraph" data-aos="fade-right">
                    <img
                        className="logo-logo"
                        src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac0ff4e601b552021e11d_shape-02.svg"
                        alt=""
                        data-aos="zoom-in"
                    />
                    <div className="Luxury-inner" data-aos="fade-left">
                        Where luxury meets convenience. Nestled in the heart of the city. Our modern apartments
                        offer unparalleled comfort and stunning views.
                    </div>
                </p>
                <div className="butn" data-aos="zoom-in-up">
                    <Button cont="Explore floor Plans" />
                </div>
            </div>
            <div className="images-container">
                <img
                    src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673c1e90d8e96f7cdf3bb7d5_hero-image-01.avif"
                    alt="Luxury Apartments"
                    className="main-image"
                    data-aos="flip-left"
                />
                <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673c1fc55769ff6da5780634_hero-image-03.avif" alt="Side View" className="side-image" data-aos="flip-right" />
            </div>
        </div>
    );
};

export default Section;
