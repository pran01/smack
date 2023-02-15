import UserImageStatus from "./UserImageStatus";

type TopBarProps = {
  user: { name: string; image: string; status: string };
};

const TopBar = ({ user }: TopBarProps) => {
  return (
    <header className="relative w-full h-12 bg-bg-dark flex justify-center items-center">
      <input
        type="text"
        className="w-[] h-8 bg-fg-gray border border-borderclr rounded-md"
      />
      <UserImageStatus user={user} />
    </header>
  );
};

export default TopBar;
