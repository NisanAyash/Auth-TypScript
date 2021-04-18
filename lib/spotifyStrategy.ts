import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from "./keys";
import { AuthConfig } from "../types";

const spotifyConfig: AuthConfig = {
  clientID: SPOTIFY_CLIENT_ID,
  clientSecret: SPOTIFY_CLIENT_SECRET,
  callbackURL: "http://127.0.0.1:5000/api/v1/auth/spotify/callback",
};

const spotifyCallback = (
  accessToken: string,
  refreshToken: string,
  profile: object,
  done: Function
) => {
  done(null, profile);
};

export { spotifyConfig, spotifyCallback };
