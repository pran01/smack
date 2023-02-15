import React from 'react'

interface UserMentionProps {
    name : string;
    imageUrl : string;
    onClick : ()=>void;
  }

function UserMention({name,imageUrl, onClick}: UserMentionProps) {
  return (
    <div>
      <button
            type="button"
            className="text-left w-full flex items-center"
            onClick={onClick}
        >
        <img
            src={imageUrl}
            alt={name}
            className='w-8 h-8 mr-2 rounded-full' >
        </img>
        <span className=''>{name}</span>
        </button>
    </div>
  )
}

export default UserMention
