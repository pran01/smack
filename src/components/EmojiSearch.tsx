import { useQuery } from "react-query";

type EmojiProps = {
  emojis: [{ character: string }];
  onClick: (character: string) => void;
};
const EmojiSearch = ({ emojis, onClick }: EmojiProps) => {
  const { isLoading, data, error } = useQuery("emojis", () =>
    fetch(
      "https://emoji-api.com/emojis?access_key=ab1d33614ec5b623a10dfae77d256158c7847437"
    ).then((res) => res.json())
  );
  if (isLoading)
    return (
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-bg-dark border border-borderclr flex flex-wrap justify-center overflow-auto rounded-lg"></div>
    );
  return (
    <div className="absolute bottom-10 right-0 w-80 h-80 bg-bg-dark border border-borderclr flex flex-wrap justify-center overflow-auto rounded-lg">
      <div className="w-full p-4 flex justify-center items-center">
        <input
          type="text"
          className="bg-transparent border border-borderclr w-full rounded-md h-8 px-2"
          placeholder="Search"
        />
      </div>
      {data.map((emoji: any, id: number) => (
        <button
          onClick={() => onClick(emoji.character)}
          className="w-8 h-8 flex justify-center items-center hover:bg-green-400/20 rounded-md"
          key={id}>
          {emoji.character}
        </button>
      ))}
    </div>
  );
};

export default EmojiSearch;
