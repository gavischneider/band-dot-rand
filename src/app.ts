import express, {
  Application,
  Request,
  Response,
  NextFunction,
  Router,
} from "express";

require("dotenv").config();

const app: Application = express();

const PORT: string | number = process.env.PORT || 3001;

const path = require("path");

const random: Router = require("./routes/random");

app.use("/random", random);

// Allows frontend to call backend API
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("src/client/frontend/public/"));

  app.get("*", (req: Request, res: Response) => {
    // Send request to the index page
    res.sendFile(
      path.resolve(__dirname, "client", "frontend", "public", "index.html")
    );
  });
}

// Home route
app.get("/", (req: Request, res: Response) => {
  res.send(
    "Welcome to bandDotRand! To get a random song, go to the '/random' route."
  );
});

app.listen(PORT, () => console.log("Server running on port 3001"));
