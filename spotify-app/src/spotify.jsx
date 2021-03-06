export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://spotify-clone-d92f0.web.app";

const clientId = "250decddb9954b4784afc446d9669e46";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      //#accessToken=mysupersecretkey&name=karan
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}
&redirect_uri=${redirectUri}
&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`;
