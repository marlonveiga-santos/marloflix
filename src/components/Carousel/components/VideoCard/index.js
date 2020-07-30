import React, { useState } from "react";
import { VideoCardContainer, ResponsiveIframe, Container } from "./styles";

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const [hov, setHov] = useState(false);
  const image = `https://img.youtube.com/vi/${getYouTubeId(
    videoURL
  )}/hqdefault.jpg`;
  return (
    <Container onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} border={categoryColor}>
      {hov === true ? (
      <div>
        <ResponsiveIframe
          title={videoTitle}
          src={`https://www.youtube.com/embed/${getYouTubeId(
            videoURL
          )}?autoplay=1&mute=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderColor: categoryColor || "red" }}
        />
        </div>
      ) : (
        
        <VideoCardContainer
          url={image}
          href={videoURL}
          target="_blank"
          style={{ borderColor: categoryColor || "red" }}
          title={videoTitle}
        />
        
      )}
    </Container>
  );
}

export default VideoCard;
