import React from 'react'
import Banner from '../assets/profile-banner.png'
import ProfileBtn from './ProfileBtn'
import { MdOutlineColorLens } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { BsFillPersonCheckFill } from "react-icons/bs";
import dp from '../assets/dp.png'


const UserCard = () => {
  return (
    <div className='w-full bg-white rounded-md shadow-lg'>
        <div className='w-full'><img src={Banner} className='rounded-t-md h-[250px] w-full'  alt="" /></div>
        <div className='flex justify-between px-6 items-center'>
            <div className='flex'>
                <div><img src={dp} className='w-[120px] border-[5px] border-white -mt-10 rounded-md' alt="" /></div>
                <div className='pt-4 pb-5 space-y-2 px-5'>
                  <p className='text-[24px] text-[#444050]'>John Doe</p>
                  <div className='flex space-x-8'>
                    <div className='flex space-x-2'>
                      <MdOutlineColorLens size={23} className='opacity-50'/>
                      <p className='text-[15px] text-[#6D6B77]'>UX Designer</p>
                    </div>
                    <div className='flex space-x-2'>
                      <CiLocationOn size={23} className='opacity-70'/>
                      <p className='text-[15px] text-[#6D6B77]'>Vatican City</p>
                    </div>
                    <div className='flex space-x-2'>
                      <CiCalendarDate size={23} className='opacity-70'/>
                      <p className='text-[15px] text-[#6D6B77]'>Joined April 2021</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className='-mb-2'><ProfileBtn name="Connected" icon={<BsFillPersonCheckFill/>} active={true}/>
            </div>
        </div>
    </div>
  )
}

export default UserCard