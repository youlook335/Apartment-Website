import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "../Styles/Privacy.css";

const Privacy = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Ensure the animation occurs only once
    });
  }, []);

  return (
    <>
      <div className="PRIVACYcontain" data-aos="fade-in">
        <h1 data-aos="fade-down">Privacy policy</h1>
        <p data-aos="fade-up">Last updated: April 05, 2024</p>
      </div>
      <div className="privacy-sectionPRIVACY" data-aos="fade-in">
        <div className="container-smallPRIVACY w-containerPRIVACY">
          <div className="privacy-wrapPRIVACY">
            <div className="rich-textPRIVACY w-richtextPRIVACY">
              <h5 data-aos="fade-up">Collecting Personal Information</h5>
              <p data-aos="fade-left">
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
                this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined
                with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The
                generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic
                words etc.
              </p>
              <ul role="list" data-aos="zoom-in">
                <li className="llii">There are many variations of passages of Lorem Ipsum available.</li>
                <li className="llii">Iusto odio dignissimos ducimus qui blanditiis.</li>
                <li className="llii">Praesentium voluptatum deleniti atque.</li>
                <li className="llii">Quas molestias excepturi sint occaecati.</li>
              </ul>
              <p data-aos="fade-right">
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" <em>by Cicero are also reproduced in
                their exact original form</em>, accompanied by English versions from the 1914 translation by H.
                Rackham.
              </p>
            </div>
          </div>
          <div className="privacy-wrapPRIVACY" data-aos="fade-in">
            <div className="rich-textPRIVACY w-richtextPRIVACY">
              <h5 data-aos="fade-up">Sharing Personal Information</h5>
              <p data-aos="fade-left">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                embarrassing <strong>hidden in the middle of text.</strong> All the Lorem Ipsum generators on the
                Internet tend to repeat predefined chunks as necessary, making this the first true generator on the
                Internet.
              </p>
              <p data-aos="fade-right">
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
              <ol start="" role="list" data-aos="zoom-in">
                <li className="lllii">sometimes on purpose.</li>
                <li className="lllii">classical Latin literature from 45 BC.</li>
                <li className="lllii">The Extremes of Good and Evil.</li>
                <li className="lllii">This book is a treatise on the theory.</li>
              </ol>
              <p data-aos="fade-left">
                Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
                non-characteristic words etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
