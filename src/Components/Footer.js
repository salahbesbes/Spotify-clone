import React from "react";
import "../Css/p-footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import {Slider, Grid} from "@material-ui/core";
import {connect} from "react-redux";

const Footer = ({playlist}) => {
  const {images} = playlist;
  return (
    <div className="footer">
      <div className="footer__left">
        <img src={images && images[0].url} alt="not found" />
        <div className="footer__songInfo">
          <h4>{playlist?.name}</h4>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="Green_icon" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="Green_icon" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continious-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const mapstatetoprops = state => {
  return {
    playlist: state.playlist,
  };
};
export default connect(mapstatetoprops, {})(Footer);
