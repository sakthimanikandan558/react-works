import React from 'react'
import { IoLogoVue } from "react-icons/io5";
import { LuCircleDot } from "react-icons/lu";
import { LuMailOpen } from "react-icons/lu";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import { GrBook } from "react-icons/gr";
import Taps from './Taps';
import Icon1 from '../assets/icon.png'

const Sidebar = () => {
  const data1=[
    {
      key:1,
      icon: <LuMailOpen/>,
      text: 'Dashboards',
      rounded: true,
      right:true
    },
    {
      key:2,
      icon: <BsLayoutSidebarReverse />,
      text: 'Layouts',
      rounded: false,
      right:true
    },
    {
      key:3,
      icon: <GrBook />,
      text: 'Front Pages',
      rounded: false,
      right:true
    }
  ]

  const data2=[
    {
      key:1,
      icon: <LuMailOpen/>,
      text: 'Email',
      rounded: false,
      right:false
    },
    {
      key:2,
      icon: <BsLayoutSidebarReverse />,
      text: 'Chat',
      rounded: false,
      right:false
    },
    {
      key:3,
      icon: <GrBook />,
      text: 'Calendar',
      rounded: false,
      right:false
    },
    {
      key:4,
      icon: <LuMailOpen/>,
      text: 'Kanban',
      rounded: false,
      right:false
    },
    {
      key:5,
      icon: <BsLayoutSidebarReverse />,
      text: 'eCommerce',
      rounded: false,
      right:true
    },
    {
      key:6,
      icon: <GrBook />,
      text: 'Academy',
      rounded: false,
      right:true

    },
    {
      key:7,
      icon: <LuMailOpen/>,
      text: 'Logistics',
      rounded: false,
      right:true

    },
    {
      key:8,
      icon: <BsLayoutSidebarReverse />,
      text: 'Invoice',
      rounded: false,
      right:true

    },
    {
      key:9,
      icon: <GrBook />,
      text: 'Users',
      rounded: false,
      right:true

    },
    {
      key:10,
      icon: <LuMailOpen/>,
      text: 'Roles & Permissions',
      rounded: false,
      right:true

    },
    {
      key:11,
      icon: <BsLayoutSidebarReverse />,
      text: 'Pages',
      rounded: false,
      right:true

    },
    {
      key:12,
      icon: <GrBook />,
      text: 'Authentications',
      rounded: false,
      right:true
    },
    {
      key:13,
      icon: <BsLayoutSidebarReverse />,
      text: 'Wizard Examples',
      rounded: false,
      right:false

    },
    {
      key:14,
      icon: <GrBook />,
      text: 'Modal Examples',
      rounded: false,
      right:false
    },
  ]

  return (
    <div className="w-[15%] h-screen bg-white shadow-2xl">
        <div className='flex items-center justify-between mx-4 py-4'>
            <div className="flex space-x-2 items-center">
                {/* <Icon1 className="w-8 h-8"/> */}
                <img src={Icon1} alt="" />
                <p className="text-[22px] font-medium">Vuexy</p>
            </div>
            <LuCircleDot className="w-[20px] h-[20px]"/>
        </div>
        <div className="space-y-2">
          {data1.map((value)=>(
            <Taps 
            key={value.key}
            icon={value.icon}
            text={value.text}
            rounded={value.rounded}
            right={value.right}
            />
          ))}
        </div>
        <p className="text-[13px] text-[#ACAAB1] font-medium mx-3 px-4 py-5">APPS & PAGES</p>
        <div className="space-y-2">
          {data2.map((value)=>(
            <Taps 
            key={value.key}
            icon={value.icon}
            text={value.text}
            rounded={value.rounded}
            right={value.right}
            />
          ))}
        </div>
    </div>
  )
}

export default Sidebar