import React from "react";
import "../Css/p-sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import {connect} from "react-redux";
const SideBar = ({playlist}) => {
  return (
    <div className="sidebar">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="not found"
      />
      <SidebarOption title={"Home"} Icon={HomeIcon} />
      <SidebarOption title={"Search"} Icon={SearchIcon} />
      <SidebarOption title={"Library"} Icon={LibraryMusicIcon} />
      <br />
      <strong>PLAYLIST</strong>
      <hr />
      {/* <SidebarOption title={"Rock"} />
      <SidebarOption title={"Romance"} />
      <SidebarOption title={"Jaz"} /> */}
      {playlist?.map((el, i) => (
        <SidebarOption key={i} title={el.name} />
      ))}
    </div>
  );
};

const mapstatetoprops = state => {
  return {
    playlist: state.playlists,
  };
};
export default connect(mapstatetoprops, {})(SideBar);
