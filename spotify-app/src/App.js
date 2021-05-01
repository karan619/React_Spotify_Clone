import React, { useEffect } from "react";
import "./App.css";
import Login from "./Components/Login";
import Player from "./Components/Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

import { useDatatLayerValue } from "./DataLyer";

const spotify = new SpotifyWebApi(); //instance of spotify

function App() {
  //const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDatatLayerValue();

  //Run code based on give condition
  useEffect(() => {
    const hash = getTokenFromUrl(); //to get hash value from url
    window.location.hash = ""; // to disapper hash value from url for security reason
    const _token = hash.access_token; // to get the access_token value in token variable
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      //setToken(_token);

      spotify.setAccessToken(_token); // it allow user to talk with spotify  services and our app back n forth
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      //console.log("I have a token", _token);
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcDS5VvseI2i8").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, [dispatch]);

  console.log("User Information" + user);
  return (
    <>
      <div className="App">
        {token ? <Player spotify={spotify} /> : <Login />}
      </div>
    </>
  );
}

export default App;
