import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { RandomSong } from "./components/RandomSong";

function App() {
  return (
    <div className="App">
      <RandomSong />
    </div>
  );
}

export default App;