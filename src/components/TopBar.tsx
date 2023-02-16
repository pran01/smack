import UserImageStatus from "./UserImageStatus";

type TopBarProps = {
  user: { name: string; image: string; status: string };
  workspace: string;
};

const TopBar = ({ user, workspace }: TopBarProps) => {
  return (
    <header className="relative w-full h-12 bg-bg-dark flex justify-center items-center border-b border-borderclr">
      <div className="relative w-2/5 h-8 flex justify-center items-center">
        <input
          type="text"
          className="w-full h-full bg-fg-gray border border-borderclr rounded-md
          text-fontclr px-2
          "
          placeholder={`Search ${workspace}`}
        />
        <i className="absolute fa-solid fa-search text-borderclr right-2"></i>
      </div>
      <UserImageStatus user={user} />
    </header>
  );
};

export default TopBar;
