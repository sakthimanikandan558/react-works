import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

const Taps = ({text,icon,rounded,right}) => {
  return (
    <div className="flex items-center px-4 justify-between mx-3 py-2 rounded-md hover:bg-[#2F2B3D] hover:bg-opacity-5">
        <div className='flex items-center space-x-2'>
            {icon}
            <p className="text-[16px] text-[#444050] opacity-90">{text}</p>
        </div>
        <div className="flex items-center space-x-2">
            {rounded&&<div className="bg-[#FF4C51] text-white px-3 py-0.5 rounded-full text-[13px]">5</div>}
            {right&&<FaAngleRight/>}
        </div>
    </div>
  )
}

export default Taps