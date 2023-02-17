import { useEffect, useState } from "react";

import ChannelList from "./ChannelList";
import ChatPage from "./ChatPage";
import List from "./List";
import TopBar from "./TopBar";

const Client = () => {
  const [sender, setSender] = useState({});
  const [receiver, setReceiver] = useState({});

  useEffect(() => {
    setSender(JSON.parse(localStorage.getItem("current_user")!));
  }, []);

  return (
    <section className="w-full h-full flex flex-col">
      <TopBar user={sender} workspace="Devrev" />
      <div className="h-full w-full flex">
        <aside className="w-80 bg-bg-dark flex flex-col border-r border-borderclr">
          <ChannelList currentUser={sender}/>
          <List currentUser={sender} addReceiver={setReceiver} />
        </aside>
        <section className="h-full w-full bg-bg-light flex">
          <ChatPage receiver={receiver} sender={sender} />
        </section>
      </div>
    </section>
  );
};

export default Client;
