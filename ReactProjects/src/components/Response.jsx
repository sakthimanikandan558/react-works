import React, { useState } from 'react'

export const Response = () => {
  const [curAdv,changeAdv]=useState("Please Click Button to Get Advice")
  const [count,changeCount]=useState(0)
  async function getRes(){
    const adv=await fetch("https://api.adviceslip.com/advice")
    const val= await adv.json();
    
    // const adv=await fetch("https://api.adviceslip.com/advice").then((res)=>res.json())


    changeAdv(val.slip.advice)
    changeCount((c)=>c+1)
  }
  return (
    <>
    <div className="flex flex-col w-full h-screen justify-center items-center bg-pink-300">
      <p className="text-white text-[30px]">{curAdv}</p>
      <button className="p-3 text-white bg-black mt-2 rounded-xl" onClick={getRes}>Get Advice</button>
      <p className="text-white text-[30px]">Total Number of Advice{count}</p>
    </div>

    </>
  )
}
