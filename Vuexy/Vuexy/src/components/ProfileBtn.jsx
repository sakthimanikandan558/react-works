import React from 'react'
import { useState, useEffect } from 'react';

// inline-flex bg-[#7367f0] text-white px-6 font-normal py-2 justify-center items-center rounded-md

const ProfileBtn = ({name,icon,active}) => {
  const [isActive,setActive]=useState(active);
  const buttonActive=()=>{
    setActive(!isActive);
  }
  return (
    <div className={(isActive)?"inline-flex bg-[#7367f0] text-white px-6 font-normal py-2 justify-center items-center rounded-md":"inline-flex text-black px-6 font-normal py-2 justify-center items-center rounded-md opacity-65"} onClick={buttonActive}>
        {icon}
        <p className='text-[15px] pl-2'>{name}</p>
    </div>
  )
}

export default ProfileBtn