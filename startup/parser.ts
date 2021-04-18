import express, { Express } from "express";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import options from "./session";

export default (app: Express) => {
  app.use(cors());
  app.use(express.json());
  app.use(session(options));
  app.use(passport.initialize());
  app.use(passport.session());
};
