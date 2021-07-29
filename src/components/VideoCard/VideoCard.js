import React from "react";


export const VideoCard =({title, thumbnail, description}) => {
  return (
    <div>
      <div className="card">
        <div className="card-cover-image">
          <img
            src={thumbnail}
            alt="thumbnail"
          />
        </div>
        <div className="card-box">
        <div className="card-title">
          <span>{title}</span>
        </div>
        <div className="card-content">
          <p>{description}
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
