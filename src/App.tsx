import React from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import MagicLink from "./components/MagicLink";


import AuthFirebase from "./components/AuthFirebase.jsx";

function App() {

  return (
    <div className="App">
      <AuthFirebase/>
      <MagicLink />
      <SignIn />
    </div>
  );
}

export default App;
