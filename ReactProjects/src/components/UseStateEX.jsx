import React, { useState } from 'react'

export const UseStateEX = () => {
    const [msg,setMsg]=useState('')
    const handleMsg=(e)=>{
        setMsg(e.target.value)
    }
  return (
    <div className="h-screen w-full bg-blue-300 flex flex-col justify-center items-center">
        <div className="text-[50px] text-white border-4 mb-6 px-4">Your Message:{msg}</div>
        <div>
            <label htmlFor="" className="text-[40px] mx-2">Type here:</label>
            <input type="text" className="px-5 py-3" onChange={handleMsg} />
        </div>
    </div>
  )
}
