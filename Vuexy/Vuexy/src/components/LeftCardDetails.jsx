import React from 'react';
import { IoPersonOutline } from 'react-icons/io5';

const LeftCardDetails = ({title, content }) => {
  return (
    <div className="space-y-4 my-6">
      <div><p className='text-[13px] text-[#ACAAB1]'>{title}</p></div>
      {content.map(item => (
        <div key={item.id} className='flex space-x-2 items-center'>
          {item.icon}
          <p className='text-[15px] text-[#6D6B77] font-medium'>{item.heading}:</p>
          <p className='text-[15px] text-[#6D6B77]'>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default LeftCardDetails;
