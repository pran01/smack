import React from 'react'
// import "../styles/UserList.css";

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

const List:React.FunctionComponent = () => {

  return (
    <div className='w-56 flex flex-col'>
      <div className='flex gap-2 items-center p-3'>
        <i className="fa-solid fa-arrow-down"></i>
        <h1 className='text-lg'>Direct Messages</h1>
      </div>
      <div className='flex flex-col gap-2 p-3'>
        {
          userData.map((data) => {
            return(
              <div className='flex items-center justify-between'>
                  <div className='flex gap-2 items-center'>
                    <img className='w-10' src="https://shayarimaza.com/files/boys-dp-images/sad-boy-dp-images/Sad-boy-Profile-Pic.jpg" alt="" />
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

export default List;
