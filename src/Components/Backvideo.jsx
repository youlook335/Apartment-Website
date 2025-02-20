import React, { useRef, useState } from 'react';
import Video from "../../public/assets/Back.mp4";
import "../Styles/Backvideo.css";

const Backvideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video-container">
      <video ref={videoRef} autoPlay loop muted playsInline className="background-video">
        <source src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0%2F67383026cee0bc2ec6a1f3eb_bgvideo-transcode.mp4" type="video/mp4" />
      </video>
      
      <button className="video-control-btn" onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Backvideo;
