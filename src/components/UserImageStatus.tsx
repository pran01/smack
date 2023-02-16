type UserImageStatusProps = {
  user: { name: string; image: string; status: string };
};
const UserImageStatus = ({ user }: UserImageStatusProps) => {
  return (
    <div className="absolute h-3/5 right-10">
      <img src={user.image} alt="user" className="max-w-full max-h-full" />
      {user.status === "active" && (
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
      )}
      {user.status === "inactive" && (
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-transparent border-2 border-gray-400 rounded-full"></div>
      )}
    </div>
  );
};

export default UserImageStatus;
