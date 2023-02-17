type UserImageStatusProps = {
  user: { name: string; image: string; status: string };
};

const UserImageStatus = ({ user }: any) => {
  return (
    <div className="relative">
      <img src={user.photoUrl} alt="user" className="h-10 rounded-md" />
      {user.status ? (
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"></div>
      ):(
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-transparent border-2 border-gray-400 rounded-full"></div>
      )}
    </div>
  );
};

export default UserImageStatus;
