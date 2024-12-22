import React from 'react';
import { BsPersonCheck } from "react-icons/bs";
import { BsPersonDash } from "react-icons/bs";

const ChatLine = ({ pic, name, cmt, profiletick }) => {
  return (
    <div className="flex justify-between py-2">
      <div className="flex space-x-2">
        <img src={pic} className="w-[40px] h-[40px] rounded-full" alt="" />
        <div>
          <p className="text-[15px] text-[#444050]">{name}</p>
          <p className="text-[#6D6B77] text-[13px]">{cmt}</p>
        </div>
      </div>
      {/* <div className={`w-[38px] h-[38px] flex items-center justify-center rounded-lg ${!profiletick ? 'bg-[#7367F0]' : 'bg-[#E9E7FD] '}`}>
        {profiletick ? <BsPersonCheck size={22} className="text-[#7367F0]" /> :<BsPersonDash size={22} className="text-white" />
      }
      </div> */}

      <div>
        
      </div>
    </div>
  );
};

export default ChatLine;
