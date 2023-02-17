import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import TempMessage from "./TempMessage";
import EmojiSearch from "./EmojiSearch";
// import "../styles/ChatPage.css";
import UserMention from "./UserMention";
import { debounce } from "lodash";
import { type } from "os";

import { getDocs, collection, addDoc, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Message from "./Message";

type chatMessage = {
  chatId: string;
  sender: any;
  receiver: any;
  timestamp: any;
  message: string;
};

interface User {
  name: string;
  password: string;
  imageUrl: string;
}

const userData: User[] = [
  {
    name: "Nikhil Tidke",
    password: "pass@123",
    imageUrl : "https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg" 
  },
  {
    name: "Pranav Sinha",
    password: "pass@123",
    imageUrl : "https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"
  },
  {
    name: "Sai Sravani",
    password: "pass@123",
    imageUrl : "https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"
  },
  {
    name: "Satyam Jha",
    password: "pass@123",
    imageUrl : "https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"
  },
  {
    name: "Avnish Anand",
    password: "pass@123",
    imageUrl : "https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"
  },
  {
    name: "Rahul Biswakarma",
    password: "pass@123",
    imageUrl : "https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"
  },
  {
    name: "Sethu Ravichandran",
    password: "pass@123",
    imageUrl : "https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"
  }
];


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

  useEffect(():any => {
      const q = query(
        collection(db, "dm"),
        orderBy("timestamp"),
      );

      const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        let messages:any = [];
        QuerySnapshot.forEach((doc: any) => {
          messages.push(JSON.parse(JSON.stringify(doc.data())));
        });

        console.log(messages);
        setChatData(messages);
      });
      return unsubscribe;
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
    filterMessage(chatData);
  }, [receiver, chatData]);

  const filterMessage = (chatData:any) => {
    console.log("called");
    const chats = chatData.filter((chat:any) => {
      return (((chat.sender.uid == sender.uid) && (chat.receiver.uid == receiver.uid)) || ((chat.sender.uid == receiver.uid) && (chat.receiver.uid == sender.uid)) ) ;
    })
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

      <div className="text-white flex flex-col">
        {filteredData.map((chat, _id) => {
          return (
            <div key={_id} className="flex items-center w-full">
            <TempMessage
              data = {chat}
              emojiSearchVisible={emojiSearchVisible}
              setEmojiSearchVisible={setEmojiSearchVisible}
            />
            <div className="flex flex-col bg-bg-light items-center">
              {emojiSearchVisible && (
                <EmojiSearch
                  onClick={addReaction}
                  setEmojiSearchVisible={setEmojiSearchVisible}
                />
              )}
            </div>
          </div>
          );
        })}
      </div>

      

      {/* <div className="w-full input-fields"> */}
      <div className="relative flex items-center p-8">
        <div className="w-full input-fields bg-black">
          <JoditEditor
            value={content}
            className="bg-bg-dark"
            config={{
              // all options from https://xdsoft.net/jodit/doc/
              readonly: false,
              width: "100%",
              height: "100px",
              enableDragAndDropFileToEditor: true,
              buttons: [
                "source",
                "|",
                "bold",
                "italic",
                "underline",
                "|",
                "image",
                "table",
                "link",
                "|",
                "left",
                "center",
                "right",
                "justify",
              ],
              toolbarButtonSize: "small",
              statusbar: false,
              style: {
                background: "#27272E",
                color: "rgba(255,255,255,0.5)",
              },
            }}
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={(e:any)=>setContent(e.target?.value)}
          />
        </div>
        <div className="text-lg absolute bottom-5 right-6" onClick={() => addMessage()}>
          <i className="text-2xl text-white fa-regular fa-paper-plane p-6"></i>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

