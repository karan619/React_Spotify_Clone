export const initialState = {
  user: null,
  playlists: [],
  playling: false,
  item: null,
  discover_weekly: null,
  /*token:
    "BQBqUueEcSFVOiO7qr_2nQXZpwD3gkbqBKjDoMHqHdLIuA2EKb…OxyClqP9vBjX_9KQwCbit5R7c8jPfWW0qmZKU2dxaQCfnosQN",*/
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
