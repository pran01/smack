import React, { useState, useEffect} from 'react'
import { getDocs, collection, } from 'firebase/firestore';
// import "../styles/UserList.css";

import {db} from "../firebase/firebase";

const List:React.FunctionComponent = () => {

  const [userData, setUserData] = useState([]);

  useEffect(()=>{
    const fun1 = async () => {
      const querySnapshot = await getDocs(collection(db, "user_db"));
      querySnapshot.forEach((doc: any) => {
        setUserData(JSON.parse(JSON.stringify(doc.data())).users);
      });
    } 
    fun1();
  },[]);

  // console.log(userData);
  const deleteUser = (user_id:number) => {
    setUserData((userData) =>
      userData.filter((data, _id) => user_id !== _id)
    );
  } 

  const [collapse, setCollapse] = useState<Boolean>(false);
  
  return (
    <div className='w-64 flex flex-col bg-bg-dark'>
      <div className='flex gap-5 items-center p-3 text-slate-50'>
        <i className="fa-solid fa-caret-down p-3 hover:bg-slate-400 rounded-lg" onClick={() => setCollapse(!collapse)}></i>
        <h1 className='text-xl font-semibold'>Direct Messages</h1>
      </div>
      {
        collapse && (
          <div className='flex flex-col gap-2'>
            {
              userData.map((data:any, _id) => {
                return(
                  <div key={_id} className='flex items-center justify-between hover:bg-slate-500 p-3'>
                      <div className='flex gap-4 items-center'>
                        <img className='w-10 rounded-lg' src="https://shayarimaza.com/files/boys-dp-images/sad-boy-dp-images/Sad-boy-Profile-Pic.jpg" alt="" />
                        <p className='text-slate-50 font-semibold text-lg'>{data.name}</p>
                      </div>

                      <div className='cross-mark'>
                        <i className="fa-solid fa-xmark" onClick={() => deleteUser(_id)}></i>
                      </div>
                  </div>
                )
              })
            }
          </div>
        )
      }
    </div>
  )
}

export default List;
