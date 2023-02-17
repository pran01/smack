import React from 'react'


type Props = {
    data:any
}

const Message:React.FunctionComponent<Props> = ({data}) => {
  // console.log(data);
  return (
    <div>
        <div className="flex gap-3 items-center">
              <img className='w-14 self-start rounded-md' src={data.sender.photoUrl} alt=""/>
              <div className="flex flex-col justify-center">
                <div className="font-semibold capitalize text-lg">{data.sender.name}</div>
                <p
                  className=""
                  dangerouslySetInnerHTML={{ __html: data.message}}
                />
              </div>
        </div>
    </div>
  )
}

export default Message