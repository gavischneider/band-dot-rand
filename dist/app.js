"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv").config();
const app = express_1.default();
const PORT = process.env.PORT || 3001;
const random = require("./routes/random");
app.use("/random", random);
// Allows frontend to call backend API
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
// Home route
app.get("/", (req, res) => {
    res.send("Welcome to bandDotRand! To get a random song, go to the '/random' route.");
});
app.listen(PORT, () => console.log("Server running on port 3001"));
