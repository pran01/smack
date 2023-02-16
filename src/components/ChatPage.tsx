import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
// import "../styles/ChatPage.css";

type chatMessage = {
  chatId: string;
  sender: string;
  receiver: string;
  timestamp: string;
  message: string;
};

const ChatPage: React.FunctionComponent = () => {
  const [content, setContent] = useState("");
  const messageData = useRef<HTMLInputElement>(null);
  const [chatData, setChatData] = useState<chatMessage[]>([]);

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
            onChange={(e: any) => {
              setContent(e.target?.value);
            }}
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
