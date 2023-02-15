import React from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import MagicLink from "./components/MagicLink";

import List from "./components/List";
import ChatPage from "./components/ChatPage";

import AuthFirebase from "./components/AuthFirebase";

function App() {

  return (
    <div className="App">
      <List/>
      {/* <ChatPage/> */}
      {/* <SignIn /> */}
    </div>
  );
}

export default App;
