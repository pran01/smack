import React, { useState } from "react";
import MessageToolbar from "./MessageToolbar";

type TempMessageProps = {
  emojiSearchVisible: boolean;
  setEmojiSearchVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const TempMessage = ({
  emojiSearchVisible,
  setEmojiSearchVisible,
}: TempMessageProps) => {
  const [toolbarVisible, setToolbarVisible] = useState(false);
  return (
    <div
      className="relative w-full h-20 bg-bg-light hover:bg-fg-gray"
      onMouseOver={() => setToolbarVisible(true)}
      onMouseLeave={() => setToolbarVisible(false)}>
      {toolbarVisible && (
        <MessageToolbar setEmojiSearchVisible={setEmojiSearchVisible} />
      )}
    </div>
  );
};

export default TempMessage;
