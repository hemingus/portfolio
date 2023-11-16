import React from "react"
import PropTypes from "prop-types"
import "./YoutubeEmbed.css"

interface YoutubeEmbedProps {
    embedId: string;
    videoTitle: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({embedId, videoTitle}) => (
  <div>
    <h1 className="title">{videoTitle}</h1>
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;