import { useState } from "react";
import EmojiSearch from "./EmojiSearch";

type MessageToolbarProps = {
  setEmojiSearchVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const MessageToolbar = ({ setEmojiSearchVisible }: MessageToolbarProps) => {
  return (
    <section className="absolute -top-6 right-4 w-max h-10 bg-bg-light border border-borderclr rounded-md text-fontclr p-1">
      <button
        className="h-full w-8 hover:bg-fg-gray rounded-md"
        onClick={() => setEmojiSearchVisible(true)}>
        <i className="fa-regular fa-face-smile"></i>
      </button>
      <button className="h-full w-8 hover:bg-fg-gray rounded-md">
        <i className="fa-regular fa-comment-dots"></i>
      </button>
      <button className="h-full w-8 hover:bg-fg-gray rounded-md">
        <i className="fa-solid fa-share"></i>
      </button>
      <button className="h-full w-8 hover:bg-fg-gray rounded-md">
        <i className="fa-regular fa-bookmark"></i>
      </button>
    </section>
  );
};
export default MessageToolbar;
