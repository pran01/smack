import { useState } from "react";
import ChatPage from "./ChatPage";
import List from "./List";
import TopBar from "./TopBar";

const Client = () => {
  const user = {
    name: "Pranav Sinha",
    image:
      "https://cdn.pixabay.com/photo/2017/03/21/13/27/evil-2162179_1280.png",
    status: "active",
  };

  const [receiver, setReceiver] = useState({});

  return (
    <section className="w-full h-full flex flex-col">
      <TopBar user={user} workspace="Devrev" />
      <div className="h-full w-full flex">
        <aside className="h-full w-52 bg-bg-dark flex flex-col justify-end border-r border-borderclr">
          <List addReceiver={setReceiver} />
        </aside>
        <section className="h-full w-full bg-bg-light">
          <ChatPage receiver={receiver} />
        </section>
      </div>
    </section>
  );
};

export default Client;
