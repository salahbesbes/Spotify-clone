import React from "react";
import {connect} from "react-redux";
import {SetUser} from "../R-Action";
import "../Css/player.css";
import SideBar from "./SideBar";
import Body from "./Body";
import Footer from "./Footer";
const Player = ({SetUser, playlist}) => {
  return (
    <div className="player">
      <div className="player__body">
        <SideBar />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

const mapstatetoprops = state => {
  return {
    playlist: state.playlists,
  };
};
export default connect(mapstatetoprops, {
  SetUser,
})(Player);
