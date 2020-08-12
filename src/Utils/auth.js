let authEndPoint = "https://accounts.spotify.com/authorize";
let clientId = "73977a6c95a146a8b2b6b0342e4e8992";
let redirectUri = "http://localhost:3000/";
let redirectProduction = "https://spotify-clone-570c5.web.app"
// give permition to do some stuff
let scopes = [
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-top-read",
  "user-read-recently-played",
  "user-read-currently-playing",
];
// 1. click login button
// 2. redirect to spotify login page
// 3. redirect to home page once authorized

//https://developer.spotify.com/documentation/general/guides/authorization-guide/
export const loginUrl = `${authEndPoint}?response_type=token
&client_id=${clientId}
&redirect_uri=${redirectProduction}
&show_dialog=true
&scope=${scopes.join("%20")}`;

export const getTokenFromUrl = () => {
// we are pulling the access token 
  return window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
};
