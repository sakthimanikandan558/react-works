import React, { useState } from 'react'
import { Tabs } from './Tabs'
import { RiVipDiamondFill } from "react-icons/ri";
import { RiBarChart2Fill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { RiGlobalFill } from "react-icons/ri";
import { RiPaintBrushFill } from "react-icons/ri";
import { FaBook } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { RiHeartPulseFill } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";



export const SideBar = () => {
  const SideBarObj1=[
    {
    id:1,
    icon:<RiVipDiamondFill className="w-[20px] h-[20px]"/>,
    name:"Components",
    hot:true
    },
    {
    id:2,
    icon:<RiBarChart2Fill className="w-[20px] h-[20px]"/>,
    name:"Charts",
    hot:false
    },
    {
    id:3,
    icon:<FaCartShopping className="w-[20px] h-[20px]"/>,
    name:"E-commerce",
    hot:false
    },
    {
    id:4,
    icon:<RiGlobalFill className="w-[20px] h-[20px]"/>,
    name:"Maps",
    hot:false
    },
    {
    id:5,
    icon:<RiPaintBrushFill className="w-[20px] h-[20px]"/>,
    name:"Theme",
    hot:false
    },
]

const SideBarObj2=[
  {
    id:1,
    icon:<FaBook className="w-[20px] h-[20px]"/>,
    name:"Documentation",
    hot:true
  },
  {
    id:2,
    icon:<FaCalendar className="w-[20px] h-[20px]"/>,
    name:"Calendar",
    hot:false
  },
  {
    id:3,
    icon:<RiHeartPulseFill className="w-[20px] h-[20px]"/>,
    name:"Examples",
    hot:false
  }
]
const [hideMenu,setHideMenu]=useState(true)
const [heading,setHeading]=useState(true)

const changeSideBar=()=>{
  if(hideMenu){
    setHideMenu(false)
    let val1=document.getElementById('name')
    val1.innerHTML=""
    val1.className="py-14"
    let val2=document.getElementById('wSideBar')
    val2.className="w-[4%] h-screen flex flex-col border-r border-black bg-[#3737371a] relative transition-all duration-200	ease-in"
    setHeading(false)
    console.log('hiii1')
  }
  else{
    setHideMenu('true')
    let val1=document.getElementById('name')
    val1.innerHTML="StarkSakthi"
    val1.className="font-bold text-[25px] py-10 text-center"
    let val2=document.getElementById('wSideBar')
    val2.className="w-[15%] h-screen flex flex-col border-r border-black bg-[#3737371a] relative transition-all duration-200	ease-in"
    setHeading(true)
    console.log('hii2')
  }
}
  return (

    <div className="w-[15%] h-screen flex flex-col border-r border-black bg-[#3737371a] relative transition-all duration-200	ease-in" id="wSideBar">
      <div className="font-bold text-[25px] py-10 text-center" id='name'>StarkSakthi</div>
      {hideMenu&&<FaAngleLeft className="inline-block bg-blue-700 rounded-full text-white w-[20px] h-[20px] absolute top-10 -right-2" onClick={changeSideBar}/>}
      {!hideMenu&&<FaAngleRight className="inline-block bg-blue-700 rounded-full text-white w-[20px] h-[20px] absolute top-10 -right-2" onClick={changeSideBar}/>}
      <div></div>
      <div className="mx-5">
        {heading&&<p className="font-bold text-gray-500 text-[12px]">GENERAL</p>}
        {SideBarObj1.map((value)=>
          (
            <Tabs key={value.id}
            icon={value.icon}
            name={value.name}
            hot={value.hot}
            heading={heading}/>
          )
        )}
      </div>
      <div className="mx-5">
        {heading&&<p className="font-bold text-gray-500 text-[12px]">EXTRA</p>}
        {SideBarObj2.map((value)=>(
          <Tabs key={value.id}
          icon={value.icon}
          name={value.name}
          hot={value.hot}
          heading={heading}/>
        ))}
      </div>
    </div>
  )
}
