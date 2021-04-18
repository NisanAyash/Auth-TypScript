import { Express } from "express";
import users from "../routes/users";

export default (app: Express) => {
  app.use("/api/v1/auth", users);
};
