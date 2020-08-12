import {
  set_User,
  Get_All_Playlist,
  Get_Playlist,
  Get_Discover_Weekly,
} from "../R-Const/TypeofAction";
import {getTokenFromUrl} from "../Utils/auth";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();
//  we are connecting spotidy to react
const token = getTokenFromUrl().access_token;

// give the token to the spotify we just create
spotify.setAccessToken(token);

export const SetUser = () => async dispatch => {
  // we get the user acount
  spotify
    .getMe()
    .then(user => {
      return dispatch({type: set_User, payload: {user, token}});
    })
    .catch(err => {
      console.log("err", err);
    });
};

export const GetPlaylists = () => async dispatch => {
  try {
    const response = await spotify.getUserPlaylists();
    const playlist = response.items;
    return dispatch({type: Get_All_Playlist, payload: playlist});
  } catch (error) {
    console.log("error", error);
  }
};

export const GetSongs = playlistId => async dispatch => {
  try {
    const Songs = await spotify.getPlaylist(playlistId);
    return dispatch({type: Get_Playlist, payload: Songs});
  } catch (error) {
    console.log("error", error);
  }
};

export const DiscoverWeekly = () => async dispatch => {
  try {
    const dis_weekly_id = "37i9dQZEVXcJZyENOWUFo7";
    const dicoverWeekly = await spotify.getPlaylist(dis_weekly_id);
    return dispatch({type: Get_Discover_Weekly, payload: dicoverWeekly});
  } catch (error) {
    console.log("error", error);
  }
};
