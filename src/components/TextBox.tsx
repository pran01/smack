import React, { useState } from 'react';
import UserMention from './UserMention';
import { debounce } from 'lodash';



interface User {
  name: string;
  password: string;
  imageUrl: string;
}

const userData: User[] = [
  {
    name: "Nikhil Tidke",
    password: "pass@123",
    imageUrl : "https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg" 
  },
  {
    name: "Pranav Sinha",
    password: "pass@123",
    imageUrl : "https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"
  },
  {
    name: "Sai Sravani",
    password: "pass@123",
    imageUrl : "https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"
  },
  {
    name: "Satyam Jha",
    password: "pass@123",
    imageUrl : "https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"
  },
  {
    name: "Avnish Anand",
    password: "pass@123",
    imageUrl : "https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"
  },
  {
    name: "Rahul Biswakarma",
    password: "pass@123",
    imageUrl : "https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"
  },
  {
    name: "Sethu Ravichandran",
    password: "pass@123",
    imageUrl : "https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"
  }
];

function TextBox() {
    const [inputValue, setInputValue] = useState('');
    const [filteredData, setFilteredData] = useState<User[]>([]);    
  
    // Wrap handleInputChange function with debounce
    const delayedFilter = debounce((value: string) => {  

    // Filter the data based on the user input
    if (value.startsWith('@')) {
      const filtered = userData.filter((user) =>
        user.name
          .split(' ')
          .some((namePart) =>
            namePart.toLowerCase().startsWith(value.substring(1).toLowerCase())
          )
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  }, 1000); // Wait for 1 second before invoking the function

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    delayedFilter(value);
  };
    const handleNameClick = (name: string) => {
      setInputValue(`@${name}`);
      setFilteredData([]);
    };
  
    return (
      <div className='w-full relative'>
        
        {filteredData.length > 0 && (
          <ul className='bg-[#222529] border-solid border-2 border-[#565856] w-2/6 mb-4 mx-11 py-2 rounded-md shadow-md absolute bottom-14  left-0'>
            {filteredData.map((user) => (
              <li key={user.name} className='px-4 py-2 hover:bg-[#1264A3] text-[#D1D2D3] font-bold text-md'>
                <UserMention 
                  name = {user.name}
                  imageUrl = {user.imageUrl} 
                  onClick = {() => handleNameClick(user.name)}/>
              </li>
            ))}
          </ul>
        )}
        <input 
          type='text' 
          className='h-28 w-3/5 border-solid border-2 border-[#565856] bg-[#222529] text-[#D1D2D3] rounded-lg mt-11 mx-11' 
          placeholder='mention' 
          value={inputValue} 
          onChange={handleInputChange}
        />
      </div>
    );
  }
  
  export default TextBox;



