import express, {
  Application,
  Request,
  Response,
  NextFunction,
  Router,
} from "express";
import { Browser, Page } from "puppeteer";

const puppeteer = require("puppeteer");

require("dotenv").config();

const app: Application = express();

const PORT: string | number = process.env.PORT || 3001;

const random: Router = require("./routes/random");

app.use("/random", random);

// Allows frontend to call backend API
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Home route
app.get("/", (req: Request, res: Response) => {
  res.send(
    "Welcome to bandDotRand! To get a random song, go to the '/random' route."
  );
});

app.listen(PORT, () => console.log("Server running on port 3001"));
