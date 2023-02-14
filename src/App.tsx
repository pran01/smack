import React from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import MagicLink from "./components/MagicLink";

function App() {
  return (
    <div className="App">
      <MagicLink />
      <SignIn />
    </div>
  );
}

export default App;
