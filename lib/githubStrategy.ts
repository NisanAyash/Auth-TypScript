import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from "./keys";
import { AuthConfig } from "../types";

const githubConfig: AuthConfig = {
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "http://127.0.0.1:5000/api/v1/auth/github/callback",
};

const githubCallback = (
  accessToken: string,
  refreshToken: string,
  profile: object,
  done: Function
) => {
  done(null, profile);
};

export { githubConfig, githubCallback };
