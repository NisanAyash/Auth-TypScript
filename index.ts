import express, { Request } from "express";
const app = express();
const port = 5000 || process.env.PORT;
import parser from "./startup/parser";
import routes from "./startup/routes";
import "./lib/passport";

parser(app);
routes(app);

app.get("/", (req: Request, res) => {
  res.send("hello world from typeScript!");
});

app.listen(port, () => console.log("Server listening on " + port));
