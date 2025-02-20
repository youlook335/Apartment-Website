import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Luxury.css";

const Luxury = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <>
            <div className="Contain">
                <h1 data-aos="fade-up">Designed for your lifestyle</h1>
                <div className="all">
                    <div className="st" data-aos="zoom-in">
                        <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac29a858c3e6276dc8c53_amenities-01.svg" alt="" />
                        <p className="life-text" data-aos="fade-up">Rooftop pool</p>
                    </div>
                    <div className="st" data-aos="fade-right">
                        <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac29a3d717f1dc1a5d0d3_amenities-02.svg" alt="" />
                        <p className="life-text" data-aos="fade-up">Fitness studio</p>
                    </div>
                    <div className="st" data-aos="zoom-in">
                        <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac29a80806ed84725d206_amenities-03.svg" alt="" />
                        <p className="life-text" data-aos="fade-up">Rooftop cinema</p>
                    </div>
                    <div className="st" data-aos="fade-left">
                        <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac29a3d717f1dc1a5d0d3_amenities-02.svg" alt="" />
                        <p className="life-text" data-aos="fade-up">Kids play area</p>
                    </div>
                    <div className="st" data-aos="fade-down">
                        <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac29aeaa24fed048a124f_amenities-05.svg" alt="" />
                        <p className="life-text" data-aos="fade-up">Yoga studio</p>
                    </div>
                    <div className="st" data-aos="zoom-in">
                        <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac29a0f6cca562dfbe969_amenities-06.svg" alt="" />
                        <p className="life-text" data-aos="fade-up">EV charging stations</p>
                    </div>
                    <div className="st" data-aos="fade-right">
                        <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac29a10a4a5b6acb24f23_amenities-07.svg" alt="" />
                        <p className="life-text" data-aos="fade-up">Elevator lobby lounge</p>
                    </div>
                    <div className="st" data-aos="fade-left">
                        <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac29b00a0d08adff635b9_amenities-08.svg" alt="" />
                        <p className="life-text" data-aos="fade-up">Outdoor grilling & dining area</p>
                    </div>
                    <div className="st" data-aos="fade-down">
                        <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac29c9a97cb3ec9122d52_amenities-09.svg" alt="" />
                        <p className="life-text" data-aos="fade-up">Library & reading nook</p>
                    </div>
                    <div className="st" data-aos="zoom-in">
                        <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac29cdcc68218bae3ff95_amenities-10.svg" alt="" />
                        <p className="life-text" data-aos="fade-up">Valet parking</p>
                    </div>
                    <div className="st" data-aos="fade-right">
                        <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac29d8218450ea094d420_amenities-11.svg" alt="" />
                        <p className="life-text" data-aos="fade-up">Resident lounge</p>
                    </div>
                    <div className="st" data-aos="fade-left">
                        <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac29d0f6cca562dfbeb36_amenities-12.svg" alt="" />
                        <p className="life-text" data-aos="fade-up">24/7 security</p>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default Luxury;
