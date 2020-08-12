import {
  set_User,
  Get_All_Playlist,
  Get_Playlist,
  Get_Discover_Weekly,
} from "../R-Const/TypeofAction";

const initState = {
  user: null,
  playlists: [],
  playlist: {},
  discoverWeekly: {},
  playing: false,
  item: null,
  token: null,
};

const mainReducer = (state = initState, action) => {
  // action --> type , payload
  const {type, payload} = action;
  switch (type) {
    case set_User:
      return {...state, user: payload.user, token: payload.token};
    case Get_All_Playlist:
      return {...state, playlists: payload};
    case Get_Playlist:
      return {...state, playlist: payload};
    case Get_Discover_Weekly:
      return {...state, discoverWeekly: payload};
    default:
      return state;
  }
};
export default mainReducer;
