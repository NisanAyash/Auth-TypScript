import express, { Request, Response } from "express";
import passport from "../lib/passport";

const router = express.Router();

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:profile"] })
);

router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function (req: Request, res: Response) {
    res.json({ user: req.user });
    res.redirect("/ user");
  }
);

router.get("/spotify", passport.authenticate("spotify"));

router.get(
  "/spotify/callback",
  passport.authenticate("spotify", { failureRedirect: "/login" }),
  function (req: Request, res: Response) {
    res.json({ user: req.user });
  }
);

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req: Request, res: Response) {
    res.json({ user: req.user });
  }
);

export default router;
