import React, {useState, useRef} from 'react';
// import "../styles/ChatPage.css";


type chatMessage = {
  chatId: string,
  sender: string,
  receiver: string,
  timestamp: string,
  message: string,
}


const ChatPage:React.FunctionComponent = () => {
  const messageData = useRef<HTMLInputElement>(null);
  const [chatData, setChatData] = useState<chatMessage[]>([]);

  const addMessage = () => {

    if(messageData){
      setChatData(
        [...chatData, 
        {
          chatId: "103",
          sender: "rahul",
          receiver: "satyam",
          timestamp: "2 july 2021",
          message: messageData.current?.value!,
      }])
    }
    console.log(chatData);
  }


  return (
    <div className='flex flex-col gap-2'>
        <div className="">
          <div className="">
            {/* <img src="https://shayarimaza.com/files/boys-dp-images/sad-boy-dp-images/Sad-boy-Profile-Pic.jpg" alt="" /> */}
            <h3>Pranav Sinha</h3>
          </div>
        </div>
        <div className="">
          {
            chatData.map((chat, _id) => {
                return(
                  <div className="" key={_id}>
                    {/* <img className='' src="https://shayarimaza.com/files/boys-dp-images/sad-boy-dp-images/Sad-boy-Profile-Pic.jpg" alt=""/> */}
                    <div className=''>
                      <div className="">{chat.sender}</div>
                      <p className="">{chat.message}</p>
                    </div>
                  </div>
                )
            })
          }

        </div>

        <div className="input-field-container">
          <div className="input-fields">
            <input type="text" ref={messageData} />
          </div>
          <div className="send-btn" onClick={() => addMessage()}>
            <i className="fa-regular fa-paper-plane"></i>
          </div>
        </div>
    </div>
  )
}

export default ChatPage
