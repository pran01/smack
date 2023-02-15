import React from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import MagicLink from "./components/MagicLink";

import List from "./components/List";
import ChatPage from "./components/ChatPage";

import AuthFirebase from "./components/AuthFirebase";
import TempMessage from "./components/TempMessage";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App w-screen h-screen flex justify-center items-end">
        {/* <UserList/>
      <ChatPage/> */}
        {/* <SignIn /> */}
        <TempMessage />
      </div>
    </QueryClientProvider>
  );
}

export default App;
