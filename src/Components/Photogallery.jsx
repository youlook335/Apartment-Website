import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";

const Photogallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <div className="contain">
            <div className="opar">
                <h1 style={{color:"white"}}>See our luxurious living</h1>
                <Button cont="View gallery" />
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className="slide-item">
                        <video
                            src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0%2F673c3beb0fd7e45c303a2851_gallery-video2-transcode.mp4"
                            controls
                            autoPlay
                            loop
                            muted
                        />
                    </div>
                    <div className="slide-item">
                        <img
                            src="https://www.colliers.com/-/media/images/colliers/asia/hong-kong/hong-kong/blog/hong-kong-blog-cvas-20240215-angus-1536x1040.ashx?bid=ff9b9350838c44acbf0383afd0d1294d"
                            alt="Slider 1"
                        />
                    </div>
                    <div className="slide-item">
                        <img
                            src="https://content.jdmagicbox.com/comp/zirakpur/p4/0172px172.x172.221120004241.i2p4/catalogue/next-gen-fitness-gym-zirakpur-gyms-4lrdair01y.jpg"
                            alt="Slider 1"
                        />
                    </div>
                    <div className="slide-item">
                        <img
                            src="https://snworksceo.imgix.net/cav/8d443aec-2090-4e9e-8793-6b95d830d89f.sized-1000x1000.JPG?w=1000"
                            alt="Slider 2"
                        />
                    </div>
                    <div className="slide-item">
                        <img src="/assets/Sldier/slider3.avif" alt="Slider 3" />
                    </div>
                    <div className="slide-item">
                        <img
                            src="https://www.glasgowlife.org.uk/media/55if1f01/21036413.jpg?anchor=center&mode=crop&width=500&height=281&rnd=133591245809770000"
                            alt="Slider 3"
                        />
                    </div>
                    <div className="slide-item">
                        <video
                            src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0%2F66f3e4fb6214d76f87c3bbef_gallery-video-transcode.mp4"
                            controls
                            autoPlay
                            loop
                            muted
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Photogallery;

// CSS
const styles = `
.contain {
    background: #15151a;
    padding: 100px;
    color: #fff;
    flex-direction: column;
    font-family: inter, sans-serif;
    display: flex;
    align-items: center;
    text-align: center;
}
.opar {
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    width: 100%;
    flex-wrap: wrap;
}
.opar h1 {
    font-size: 50px;
}
.slider-container {
    width: 100%;
    max-width: 100%;
    margin: auto;
    position: relative;
}
.slide-item {
    display: flex;
    justify-content: center;
    align-items: center;
}
.slide-item video,
.slide-item img {
    width: 100%;
    max-height: 550px;
    object-fit: cover;
    border-radius: 10px;
}
.slick-dots {
    bottom: 10px;
}
.slick-dots li button:before {
    color: white;
    opacity: 0.7;
}
.slick-dots li.slick-active button:before {
    color:#149af3;
    opacity: 1;
}

@media (max-width: 1024px) {
    .contain {
      width:100%;
    }
.opar h1 {
        font-size: 35px;
    }
    .slide-item video,
    .slide-item img {
        max-height: 400px;
    }
}

@media (max-width: 768px) {
    .opar {
        flex-direction: column;
        text-align: center;
    }
    .opar h1 {
        font-size: 28px;
    }
    .slider-container {
        width: 95%;
    }
    .slide-item video,
    .slide-item img {
        max-height: 300px;
    }
}

@media (max-width: 480px) {
    .opar h1 {
        font-size: 24px;
    }
    .slider-container {
        width: 100%;
    }
    .slide-item video,
    .slide-item img {
        max-height: 250px;
    }
}`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
