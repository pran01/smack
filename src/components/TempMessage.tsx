import React, { useState } from "react";
import MessageToolbar from "./MessageToolbar";

type TempMessageProps = {
  emojiSearchVisible: boolean;
  setEmojiSearchVisible: React.Dispatch<React.SetStateAction<boolean>>;
  data:any
};

const TempMessage = ({
  emojiSearchVisible,
  setEmojiSearchVisible,
  data
}: TempMessageProps) => {
  const [toolbarVisible, setToolbarVisible] = useState(false);
  return (
    <div
      className="relative w-full h-auto bg-bg-light hover:bg-fg-gray px-6 py-4"
      onMouseOver={() => setToolbarVisible(true)}
      onMouseLeave={() => setToolbarVisible(false)}>
      <div className="flex gap-3 items-center">
            <img className='w-14 self-start rounded-md' src={data.sender.photoUrl} alt=""/>
            <div className="flex flex-col justify-center">
              <div className="font-semibold capitalize text-lg">{data.sender.name}</div>
              <p
                className=""
                dangerouslySetInnerHTML={{ __html: data.message}}
              />
            </div>
      </div>

      {toolbarVisible && (
        <MessageToolbar setEmojiSearchVisible={setEmojiSearchVisible} />
      )}
    </div>
  );
};

export default TempMessage;
