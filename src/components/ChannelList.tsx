import React from 'react';
import { useState } from 'react';

type channelProps = {
  currentUser: any
}

const ChannelList:React.FunctionComponent<channelProps> = ({currentUser}) => {
  const [collapse, setCollapse] = useState<Boolean>(false);
  const [createUser, setCurrentUser] = useState<Boolean>(false);

  return (
    <div>
       <div className="flex items-center py-3 px-4 text-slate-50">
        <i
          className="fa-solid fa-caret-down py-1 px-3 mr-4 hover:bg-slate-400 rounded-lg text-xl"
          onClick={() => setCollapse(!collapse)}
          ></i>
        <h1 className="text-xl font-semibold">Channels</h1>
      </div>


      <div className='w-auto bg-bg-light hover:bg-slate-400 cursor-pointer inline-flex items-center text-white gap-4 ml-6 px-4 py-2 rounded-xl'>
      <i
        className="fa-solid fa-plus cursor-pointer"
        onClick={() => setCurrentUser(true)}></i>
        Add Channel
      </div>



    </div>
  )
}

export default ChannelList;