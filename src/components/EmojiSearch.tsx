import { useEffect, useState } from "react";
import { useQuery } from "react-query";

type EmojiProps = {
  emojis?: [{ character: string }];
  onClick: (character: string) => void;
  setEmojiSearchVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const EmojiSearch = ({ onClick, setEmojiSearchVisible }: EmojiProps) => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const { isLoading: loadingEmojis, data: searchedEmojis } = useQuery(
    ["emoji-search", debouncedSearch],
    () => {
      fetch(
        `https://emoji-api.com/emojis?search=${debouncedSearch}&access_key=ab1d33614ec5b623a10dfae77d256158c7847437`
      );
    },
    { enabled: debouncedSearch.length > 0 }
  );
  const debounce = (fn: Function, delay: number) => {
    setSearch(fn.arguments);
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
  };

  const callDebouncedSearch = debounce(setDebouncedSearch, 1000);

  const { isLoading, data: emojis } = useQuery("emojis", () =>
    fetch(
      "https://emoji-api.com/emojis?access_key=ab1d33614ec5b623a10dfae77d256158c7847437"
    ).then((res) => res.json())
  );
  if (isLoading)
    return (
      <div
        className="absolute top-0 left-0 h-screen w-screen z-[50] bg-black/20 backdrop-blur-xs"
        onClick={() => setEmojiSearchVisible(false)}>
        <div className="absolute top-0 right-10 w-80 h-80 bg-bg-dark border border-borderclr flex flex-wrap justify-center overflow-auto rounded-lg"></div>
      </div>
    );
  return (
    <div
      className="absolute top-0 left-0 h-screen w-screen z-[50] bg-black/20 backdrop-blur-xs"
      onClick={() => setEmojiSearchVisible(false)}>
      <div className="absolute top-0 right-10 w-80 h-80 bg-bg-dark border border-borderclr flex flex-wrap justify-center overflow-auto rounded-lg">
        <div className="w-full p-4 flex justify-center items-center">
          <input
            type="text"
            className="bg-transparent border border-borderclr w-full rounded-md h-8 px-2"
            placeholder="Search"
            value={search}
            onChange={(e) => callDebouncedSearch(e.target.value)}
          />
        </div>
        {search === "" &&
          emojis.map((emoji: any, id: number) => (
            <button
              onClick={() => onClick(emoji.character)}
              className="w-8 h-8 flex justify-center items-center hover:bg-green-400/20 rounded-md"
              key={id}>
              {emoji.character}
            </button>
          ))}
      </div>
    </div>
  );
};

export default EmojiSearch;
