import React, { useEffect } from "react";
import "./Css/App.css";
import Login from "./Components/Login";
import Player from "./Components/Player";
import { connect } from "react-redux";
import { SetUser, GetPlaylists, GetSongs, DiscoverWeekly } from "./R-Action";

function App({ token, DiscoverWeekly, SetUser, GetSongs, GetPlaylists }) {
  useEffect(() => {
    SetUser();
    GetPlaylists();
    GetSongs("0Hl29zIkBKhHWjHB81dsxv");
    DiscoverWeekly();
  }, [SetUser, GetPlaylists, GetSongs, DiscoverWeekly]);
  return (
    <div className="App">
      {token ? (
        <div>
          <Player />
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </div>
  );
}

const mapstatetoprops = state => {
  return {
    token: state.token,
  };
};
export default connect(mapstatetoprops, {
  DiscoverWeekly,
  GetSongs,
  SetUser,
  GetPlaylists,
})(App);
