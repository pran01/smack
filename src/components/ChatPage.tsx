import React, { useState, useRef , useEffect, useCallback } from "react";
import JoditEditor from "jodit-react";
// import "../styles/ChatPage.css";
import UserMention from "./UserMention";
import { debounce } from "lodash";

type chatMessage = {
  chatId: string;
  sender: string;
  receiver: string;
  timestamp: string;
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

const ChatPage: React.FunctionComponent = () => {
  const [content, setContent] = useState("");
  const messageData = useRef<HTMLInputElement>(null);
  const [chatData, setChatData] = useState<chatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [filteredData, setFilteredData] = useState<User[]>([]);
  // const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   if(inputRef.current){
  //     inputRef.current.focus();
  //   }
  // },[filteredData]);

  // Wrap handleInputChange function with debounce
  const delayedFilter = debounce((value: string) => {  

  // Filter the data based on the user input
  const atSignIndex = value.lastIndexOf('@');
if (atSignIndex >= 0) {
  const inputAfterAtSign = value.substring(atSignIndex + 1);
  const filtered = userData.filter((user) =>
    user.name
      .split(' ')
      .some((namePart) =>
        namePart.toLowerCase().startsWith(inputAfterAtSign.toLowerCase())
      )
  );
  setFilteredData(filtered);
} else {
  setFilteredData([]);
}
}, 1000); // Wait for 1 second before invoking the function

const handleInputChange = useCallback(
  (newContent:any) => {
    console.log(newContent);
    setInputValue(newContent);
    delayedFilter(newContent);
  },[]
)


// (e: any) => {
//   let value=e.target?.value;
//   console.log(value);
//   setContent(value);
//   delayedFilter(value);
// };
const handleNameClick = (name: string) => {
  const atSignIndex = content.lastIndexOf('@');
  const message = content.substring(0, atSignIndex);
  setContent(`${message}@${name} `);
  setFilteredData([]);
};

  const addMessage = () => {
    if (messageData) {
      setChatData([
        ...chatData,
        {
          chatId: "103",
          sender: "rahul",
          receiver: "satyam",
          timestamp: "2 july 2021",
          message: content,
        },
      ]);

      if (messageData.current) messageData.current.value = "";
    }
  };

  return (
    <div className="w-full flex flex-col gap-2 bg-bg-light">
      <div className="m-3 p-3">
        <div className="h-10 flex gap-3 items-center">
          <img
            className="h-full"
            src="https://shayarimaza.com/files/boys-dp-images/sad-boy-dp-images/Sad-boy-Profile-Pic.jpg"
            alt=""
          />
          <h3 className="text-xl font-semibold text-white">Pranav Sinha</h3>
        </div>
      </div>
      <hr className="text-white" />
      <div className="text-white">
        {chatData.map((chat, _id) => {
          return (
            <div className="" key={_id}>
              {/* <img className='' src="https://shayarimaza.com/files/boys-dp-images/sad-boy-dp-images/Sad-boy-Profile-Pic.jpg" alt=""/> */}
              <div className="">
                <div className="">{chat.sender}</div>
                <p
                  className=""
                  dangerouslySetInnerHTML={{ __html: chat.message }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col bg-bg-dark p-3 items-center">
        <div className="w-full input-fields">
        {filteredData.length > 0 && (
          <ul className='bg-[#222529] border-solid border-2 border-[#565856] w-2/6 mb-4 mx-11 py-2 rounded-md shadow-md absolute bottom-14  left-0'>
            {filteredData.map((user) => (
              <li key={user.name} className='px-4 py-2 hover:bg-[#1264A3] text-[#D1D2D3] font-bold text-md'>
                <UserMention 
                  name = {user.name}
                  imageUrl = {user.imageUrl} 
                  onClick = {() => handleNameClick(user.name)}/>
              </li>
            ))}
          </ul>
        )}
          {/* <input className="w-full outline-none bg-bg-light text-xl border p-2 text-white border-white" type="text" ref={messageData} /> */}
          <JoditEditor
            value={content}
            
            className="bg-bg-dark"
            config={{
              // all options from https://xdsoft.net/jodit/doc/
              readonly: false,
              width: "100%",
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
            onChange={handleInputChange}
            
          />
        </div>
        <div className="text-lg" onClick={() => addMessage()}>
          <i className="text-2xl text-white fa-regular fa-paper-plane"></i>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

