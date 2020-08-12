import React from "react";
import "../Css/songrow.css";

const SongRow = ({ track }) => {
  return (
    <div className="songRow">
      <img className="songRow__album" src={track?.album.images[0].url} alt="" />
      <div className="songRow__info">
        <h1>{track?.name} </h1>
        <p>
          Artists: {track.artists.map((el, i) => el.name)}, Album:{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
