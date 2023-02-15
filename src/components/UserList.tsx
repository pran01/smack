import React from 'react'
import "../styles/UserList.css";

const userData = [{
  "name": "Nikhil Tidke",
  "password": "pass@123",
},{
  "name": "Pranav Sinha",
  "password": "pass@123",
},{
  "name": "Sai Sravani",
  "password": "pass@123",
}]

const UserList:React.FunctionComponent = () => {

  return (
    <div className='sidebar-component'>
      <div className='list-header'>
        <i className="fa-solid fa-arrow-down"></i>
        <h1>Direct Messages</h1>
      </div>
      <div className='user-list'>
        {
          userData.map((data) => {
            return(
              <div className='user'>
                  <div>
                    <img src="https://shayarimaza.com/files/boys-dp-images/sad-boy-dp-images/Sad-boy-Profile-Pic.jpg" alt="" />
                    <p>{data.name}</p>
                  </div>

                  <div className='cross-mark'>
                    <i className="fa-solid fa-xmark"></i>
                  </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default UserList
