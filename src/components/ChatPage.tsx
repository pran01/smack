import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import TempMessage from "./TempMessage";
import EmojiSearch from "./EmojiSearch";
// import "../styles/ChatPage.css";
import { type } from "os";

import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Message from "./Message";

type chatMessage = {
  chatId: string;
  sender: any;
  receiver: any;
  timestamp: any;
  message: string;
};

type Props = {
  receiver: any;
  sender: any;
};

const ChatPage: React.FunctionComponent<Props> = ({ receiver, sender }) => {
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState({});

  const messageData = useRef<HTMLInputElement>(null);
  const [chatData, setChatData] = useState<chatMessage[]>([]);
  const [emojiSearchVisible, setEmojiSearchVisible] = useState(false);
  const [filteredData, setFilteredData] = useState<chatMessage[]>([]);

  useEffect(() => {
    const getMessage = async () => {
      const querySnapshot = await getDocs(collection(db, "dm"));
      const messages: any = [];
      querySnapshot.forEach((doc: any) => {
        messages.push(JSON.parse(JSON.stringify(doc.data())));
      });
      setChatData(messages);
    };
    getMessage();
  }, []);

  const addMessage = async () => {
    const messageData = {
      chatId: "103",
      sender: sender,
      receiver: receiver,
      timestamp: new Date(),
      message: content,
    };

    setFilteredData([...filteredData, messageData]);

    const dbRef = collection(db, "dm");
    await addDoc(dbRef, messageData)
      .then((docRef) => {
        console.log("Document has been added successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function addReaction(character: string) {}
  useEffect(() => {
    filterMessage();
  }, [receiver]);

  const filterMessage = () => {
    console.log("called");
    const chats = chatData.filter((chat) => {
      console.log(chat.receiver.uid, receiver.uid);
      return chat.sender.uid == sender.uid && chat.receiver.uid == receiver.uid;
    });
    setFilteredData(chats);
  };

  return (
    <div className="w-full flex flex-col gap-2 bg-bg-light">
      <div className="p-4 border-b border-borderclr">
        <div className="h-10 flex gap-3 items-center">
          <img className="h-full" src={receiver.photoUrl} alt="" />
          <h3 className="text-xl font-semibold text-white">{receiver.name}</h3>
        </div>
      </div>

      <div className="text-white flex flex-col gap-4 p-6">
        {filteredData.map((chat, _id) => {
          return <Message data={chat} key={_id} />;
        })}
      </div>

      <TempMessage
        emojiSearchVisible={emojiSearchVisible}
        setEmojiSearchVisible={setEmojiSearchVisible}
      />
      <div className="flex flex-col bg-bg-light p-3 items-center">
        {emojiSearchVisible && (
          <EmojiSearch
            onClick={addReaction}
            setEmojiSearchVisible={setEmojiSearchVisible}
          />
        )}
      </div>
      {/* <div className="w-full input-fields"> */}
      <div className="flex bg-bg-dark p-3 items-center">
        <div className="w-full input-fields bg-black">
          {/* <input className="w-full outline-none bg-bg-light text-xl border p-2 text-white border-white" type="text" ref={messageData} /> */}
          <JoditEditor
            value={content}
            className="bg-bg-dark"
            config={{
              // all options from https://xdsoft.net/jodit/doc/
              readonly: false,
              width: "100%",
              height: "50px",
              enableDragAndDropFileToEditor: true,
              buttons: [
                "source",
                "|",
                "bold",
                "italic",
                "underline",
                "|",
                "ul",
                "ol",
                "|",
                "font",
                "fontsize",
                "brush",
                "paragraph",
                "|",
                "image",
                "table",
                "link",
                "|",
                "left",
                "center",
                "right",
                "justify",
                "|",
                "undo",
                "redo",
                "|",
                "hr",
                "eraser",
                "fullsize",
              ],
              uploader: { insertImageAsBase64URI: true },
              removeButtons: ["brush", "file"],
              // showXPathInStatusbar: false,
              // showCharsCounter: false,
              // showWordsCounter: false,
              // toolbarAdaptive: true,
              // toolbarSticky: true,
              style: {
                background: "#27272E",
                color: "rgba(255,255,255,0.5)",
              },
            }}
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={(e: any) => {
              setContent(e.target?.value);
            }}
          />
        </div>
        <div className="text-lg" onClick={() => addMessage()}>
          <i className="text-2xl text-white fa-regular fa-paper-plane p-6"></i>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
