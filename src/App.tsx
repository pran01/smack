import React from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import MagicLink from "./components/MagicLink";

import UserList from "./components/UserList";
import ChatPage from "./components/ChatPage";

import AuthFirebase from "./components/AuthFirebase";

function App() {

  return (
    <div className="App">
      {/* <UserList/> */}
      <ChatPage/>
      {/* <SignIn /> */}
    </div>
  );
}

export default App;
