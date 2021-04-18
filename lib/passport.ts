import passport from "passport";

import passportGithub from "passport-github2";
import passportSpotify from "passport-spotify";
import passportGoogle from "passport-google-oauth20";

// Strategies Config
import { githubConfig, githubCallback } from "./githubStrategy";
import { spotifyConfig, spotifyCallback } from "./spotifyStrategy";
import { googleConfig, googleCallback } from "./googleStrategy";

import { User } from "../types/index";

// Strategies
const GitHubStrategy = passportGithub.Strategy;
const SpotifyStrategy = passportSpotify.Strategy;
const GoogleStrategy = passportGoogle.Strategy;

passport.use(new GitHubStrategy(githubConfig, githubCallback));
passport.use(new SpotifyStrategy(spotifyConfig, spotifyCallback));
passport.use(new GoogleStrategy(googleConfig, googleCallback));

passport.serializeUser((user: User, done) => {
  done(null, user.id);
});

passport.deserializeUser((id: User, done) => {
  done(null, id);
});

export default passport;
