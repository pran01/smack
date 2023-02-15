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
<<<<<<< HEAD
    <div className="App w-screen h-screen flex justify-center items-center">
      {/* <AuthFirebase/> */}
      <List/>
      <ChatPage/>
      {/* <SignIn /> */}
      {/* <TempMessage /> */}
    </div>
=======
    <QueryClientProvider client={queryClient}>
      <div className="App w-screen h-screen flex justify-center items-end">
        {/* <UserList/>
      <ChatPage/> */}
        {/* <SignIn /> */}
        <TempMessage />
      </div>
    </QueryClientProvider>
>>>>>>> fa210a993035c0449b7e2cb4f34247f66450d347
  );
}

export default App;
