import { useState } from "react";
import { useQuery } from "react-query";
import EmojiSearch from "./EmojiSearch";

type toolbarProps = {
  toolbarVisible: boolean;
  setToolbarVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const MessageToolbar = () => {
  const [emojiSearchVisible, setEmojiSearchVisible] = useState(false);

  const { isLoading, data, error } = useQuery("emojis", () =>
    fetch(
      "https://emoji-api.com/emojis?access_key=ab1d33614ec5b623a10dfae77d256158c7847437"
    ).then((res) => res.json())
  );

  function addReaction(character: string) {
    console.log(character);
  }

  if (isLoading) {
    return <h1>Loadin...</h1>;
  }

  return (
    <section className="absolute -top-6 right-4 w-max h-10 bg-bg-light border border-borderclr rounded-md text-fontclr p-1">
      {emojiSearchVisible && (
        <EmojiSearch emojis={data} onClick={addReaction} />
      )}
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
