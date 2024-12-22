import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { SiGooglekeep } from "react-icons/si";
import { IoMdSearch } from "react-icons/io";
import { IoMdRefresh } from "react-icons/io";
import { CiGrid2H } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";
import { IoApps } from "react-icons/io5";
export const NavBar = () => {
  return (
    <>
      <div className="grid grid-cols-6 bg-black py-4 border-b-[1px] border-opacity-30 border-white">
      <div className="grid col-span-1">
        <div className="flex space-x-4 items-center ml-5">
            <IoMdMenu size={30} color='white'/>
            <SiGooglekeep size={35} color='yellow'/>
            <p className="text-[22px] text-white">Keep</p>
        </div>
      </div>
      <div className="col-span-2 relative">
        <IoMdSearch className="absolute top-[12px] left-4" size={24} color='white'/>
        <input type="text" placeholder='Search' className="w-full py-3 pl-14 rounded-lg text-white bg-[#f1f3f43d] outline-none" />
      </div>
      <div className="col-span-3 flex justify-end items-center space-x-7 mr-16">
        <IoMdRefresh color='white' size={30}/>
        <CiGrid2H color='white' size={30}/>
        <IoSettingsSharp className="mr-2" color='white' size={30}/>
        <IoApps  color='white' size={30}/>
      </div>
    </div>
    </>
  )
}
