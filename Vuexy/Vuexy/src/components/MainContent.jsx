import React from 'react'
import { useState, useEffect } from 'react';
import SearchBar from './SearchBar'
import UserCard from './UserCard'
import { AiOutlineTeam } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { AiOutlineDisconnect } from "react-icons/ai";
import { BsFillPersonCheckFill } from "react-icons/bs";
import ProfileBtn from './ProfileBtn'
import Connection from './Connection';
import Teams from './Teams';
import LeftCards from './LeftCards';

const tabsData=[
  {
    name:'Profile',
    icon:<BsFillPersonCheckFill/>,
    active:true
  },
  {
    name:'Teams',
    icon:<AiOutlineTeam/>,
    active:false
  },
  {
    name:'Projects',
    icon:<GrProjects/>,
    active:false
  },
  {
    name:'Connections',
    icon:<AiOutlineDisconnect/>,
    active:false
  }
]

const MainContent = () => {

  const [tab,setTab]=useState(tabsData)

  const tabMonitor=(i)=>{
    const temp=tab.map((ele,index)=>{
      (i===index)?ele.active=true:ele.active=false;
      return ele;
    })
    setTab(temp);
  }

  return (
    <div className="w-[85%] h-screen px-[5%] bg-[#f8f7fa]">
        <SearchBar/>
        <UserCard/>
        <div className='flex py-6'>
        {
          tab.map((ele,index)=>(
            <div onClick={()=>{tabMonitor(index)}}>
              <ProfileBtn name={ele.name} icon={ele.icon} active={ele.active} key={ele.active}/>
            </div>
          ))
        }
        </div>
        <div className='flex space-x-8'>
          <div className='w-[30%]'>
            <LeftCards/>
          </div>
          <div className='w-[70%] bg-white'>
            hii2
          </div>
        {/* <Connection/>
        <Teams/> */}
        </div>
    </div>
  )
}

export default MainContent
