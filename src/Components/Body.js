import React from "react";
import "../Css/p-body.css";
import Header from "./BodyHeader";
import {connect} from "react-redux";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
const Body = ({playlist, discoverWeekly}) => {
  const items = discoverWeekly.tracks?.items;
  const {images} = discoverWeekly;

  return (
    <div className="body">
      <Header />
      <div className="body__info">
        <img src={images && discoverWeekly.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>discover Weekly</h2>
          <p>{discoverWeekly?.description} </p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleOutlineIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {items?.map((el, i) => (
          <SongRow key={i} track={el.track} />
        ))}
      </div>
    </div>
  );
};

const mapstatetoprops = state => {
  return {
    playlist: state.playlist,
    discoverWeekly: state.discoverWeekly,
  };
};
export default connect(mapstatetoprops, {})(Body);
