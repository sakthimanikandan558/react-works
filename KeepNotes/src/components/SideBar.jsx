import React from 'react'
import { MdLightbulbOutline } from "react-icons/md";
import { BsBell } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineArchive } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
export const SideBar = () => {
    const arr=[
        {
            icon:<MdLightbulbOutline/>,
            para:"Notes"
        },
        {
            icon:<BsBell/>,
            para:"Reminders"
        },
        {
            icon:<MdOutlineEdit/>,
            para:"Edit Lables"
        },
        {
            icon:<MdOutlineArchive/>,
            para:"Archive"
        },
        {
            icon:<FaRegTrashAlt/>,
            para:"Trash"
        },
    ]

  return (


    <>
    {/* {

        <div className="flex flex-col w-[14%] mt-2">
                    {arr.map((item)=>{
            return(
                <div className="side-bar flex p-3 space-x-6 bg-[#41331C] rounded-e-full">
                    <div className="icon ml-3" color='white' size='24'>{item.icon}</div>
                    <div className="para text-[#E8EAED]">{item.para}</div>
                </div>
                    )
                    })   
                }     
        </div>
    } */}

    



    <div className="flex flex-col w-[14%] mt-2">
        <div className="flex p-3 space-x-6 bg-[#41331C] rounded-e-full">
            <MdLightbulbOutline className="ml-3" color='white' size='24'/>
            <p className="text-[#E8EAED]">Notes</p>
        </div>
        <div className="flex p-3 space-x-6">
            <BsBell className="ml-3" color='white' size='24'/>
            <p className="text-[#E8EAED]">Reminders</p>
        </div>
        <div className="flex p-3 space-x-6">
            <MdOutlineEdit className="ml-3" color='white' size='24'/>
            <p className="text-[#E8EAED]">Edit Lables</p>
        </div>
        <div className="flex p-3 space-x-6">
            <MdOutlineArchive className="ml-3" color='white' size='24'/>
            <p className="text-[#E8EAED]">Archive</p>
        </div>
        <div className="flex p-3 space-x-6">
            <FaRegTrashAlt className="ml-3" color='white' size='24'/>
            <p className="text-[#E8EAED]">Trash</p>
        </div>
    </div>

    </>
    )
}
