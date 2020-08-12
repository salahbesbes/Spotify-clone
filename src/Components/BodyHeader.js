import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {Avatar} from "@material-ui/core";
import {connect} from "react-redux";

const Header = ({user}) => {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search for Artists,Song ..." />
      </div>
      <div className="header__right">
        <Avatar src="{user.images[0].url}" alt="not found" />
        <h4> {user?.display_name} </h4>
      </div>
    </div>
  );
};

const mapstatetoprops = state => {
  return {
    user: state.user,
  };
};
export default connect(mapstatetoprops, {})(Header);
