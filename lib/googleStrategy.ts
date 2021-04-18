import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "./keys";
import { AuthConfig } from "../types";

const googleConfig: AuthConfig = {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://127.0.0.1:5000/api/v1/auth/google/callback",
};

const googleCallback = (
  accessToken: string,
  refreshToken: string,
  profile: object,
  done: Function
) => {
  done(null, profile);
};

export { googleConfig, googleCallback };
