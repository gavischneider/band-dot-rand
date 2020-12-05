import express from "express";
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
const random = require("./routes/random");
app.use("/random", random);
// Allows frontend to call backend API
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("dist/client/frontend/build/"));
  app.get("*", (req, res) => {
    // Send request to the index page
    res.sendFile(
      path.resolve(__dirname, "client", "frontend", "build", "index.html")
    );
  });
}
// Home route
app.get("/", (req, res) => {
  res.send(
    "Welcome to bandDotRand! To get a random song, go to the '/random' route."
  );
});
app.listen(PORT, () => console.log("Server running on port 3001"));
