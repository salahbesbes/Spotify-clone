import React, {useState, useEffect} from "react";
import "./Css/App.css";
import Login from "./Login";
import {getTokenFromUrl} from "./auth";
import spotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

const spotify = new spotifyWebApi();

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    //  we are connecting spotidy to react
    const _token = getTokenFromUrl().access_token;
    _token && setToken(_token);
    // give the token to the spotify we just create
    spotify.setAccessToken(_token);
    // we get the user acount
    spotify
      .getMe()
      .then(user => {
        console.log("user", user);
      })
      .catch(err => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className="App">
      {token ? (
        <div>
          <Player/>
        </div>
      ) : (
        <div><Login/> </div>
      )}

      
    </div>
  );
}

export default App;
