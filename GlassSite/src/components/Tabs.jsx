import React from 'react'
import { RiVipDiamondFill } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";




export const Tabs = ({key,icon,name,hot,heading}) => {
  return (
    <div className="flex justify-between py-4">
        <div className="flex items-center space-x-4">
            <div >{icon}</div>
            {heading&&<div className="font-normal text-[15px]">{name}</div>}
            {!heading&&<GoDotFill size={10}/>}
        </div>
        {heading&&<div className="flex items-center space-x-1">
            {hot&&<div className="bg-purple-500 text-[12px] font-bold text-white px-[4px] py-[2px] rounded-md">Hot</div>}
            <div><FaAngleRight/></div>
        </div>}
    </div>
  )
}
