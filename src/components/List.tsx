import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
// import "../styles/UserList.css";

import { db } from "../firebase/firebase";


type Props = {
  addReceiver: React.Dispatch<React.SetStateAction<any>>;
};

const List: React.FunctionComponent<Props> = ({addReceiver}) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fun1 = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const users:any = [];
      querySnapshot.forEach((doc: any) => {
        users.push(JSON.parse(JSON.stringify(doc.data())));
      });
      setUserData(users);
    };
    fun1();
  }, []);

  const deleteUser = (user_id: number) => {
    setUserData((userData) => userData.filter((data, _id) => user_id !== _id));
  };

  const [collapse, setCollapse] = useState<Boolean>(false);

  return (
    <div className="w-full flex flex-col bg-bg-dark">
      <div className="flex items-center p-3 text-slate-50">
        <i
          className="fa-solid fa-caret-down p-1 px-2 mr-2 hover:bg-slate-400 rounded-lg"
          onClick={() => setCollapse(!collapse)}></i>
        <h1 className="text-xs font-semibold">Direct Messages</h1>
      </div>
      {collapse && (
        <div className="flex flex-col gap-2">
          {userData.map((data: any, _id) => {
            return (
              <div
                key={_id}
                onClick={() => addReceiver(data)}
                className="flex items-center justify-between hover:bg-slate-500 p-3">
                <div className="flex gap-4 items-center">
                  <img
                    className="w-6 rounded-md"
                    src={data.photoUrl}
                  />
                  <p className="text-slate-50 font-semibold text-xs">
                    {data.name}
                  </p>
                </div>

                <div className="cross-mark">
                  <i
                    className="fa-solid fa-xmark"
                    onClick={() => deleteUser(_id)}></i>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default List;
