import React, { useRef } from "react";
import "./VideoPlayer.css";
import video from "../../assets/kampuskita-video.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const playerRef = useRef(null);

  const closePlayer = (e) => {
    if (playerRef.current && !playerRef.current.contains(e.target)) {
      console.log("Clicked outside, closing player...");
      setPlayState(false);
    } else {
      console.log("Clicked inside player.");
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={playerRef}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
