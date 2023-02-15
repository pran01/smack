import React from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import MagicLink from "./components/MagicLink";

import List from "./components/List";
import ChatPage from "./components/ChatPage";

import AuthFirebase from "./components/AuthFirebase";
import TempMessage from "./components/TempMessage";

function App() {
  return (
    <div className="App w-screen h-screen flex justify-center items-center">
      {/* <AuthFirebase/> */}
      <List/>
      <ChatPage/>
      {/* <SignIn /> */}
      {/* <TempMessage /> */}
    </div>
  );
}

export default App;
