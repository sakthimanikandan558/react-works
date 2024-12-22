import React, { useEffect, useState } from 'react'

export const DigitalClk = () => {
    const [day,setDay]=useState('');
    const [mm,setMM]=useState('');
    const [date,setDate]=useState('')
    const [year,setYear]=useState('')
    let time=new Date();
    let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let months=['January','February','March','April','May','June','July','August','September','October', 'November','December']
    useEffect(()=>{
        setDay(days[time.getDay()])
        setMM(months[time.getMonth()])
        setDate(time.getDate())
        setYear(time.getFullYear())
    },[])

    const [hour,setHour]=useState('00')
    const [min,setMin]=useState('00')
    const [sec,setSec]=useState('00')
    const [ampm,setAmPm]=useState('AM')
    useEffect(()=>{
        const timeFun=()=>{
            let getHH=time.getHours()
            getHH=getHH>12? getHH-12:getHH
            getHH=getHH==0? 12:getHH
            getHH>=12? setAmPm('PM'):setAmPm('AM')
            let getMM=time.getMinutes()
            let getSS=time.getSeconds()
            setHour(getHH<10? `0${getHH}`:getHH)
            setMin(getMM<10? `0${getMM}`:getMM)
            setSec(getSS<10? `0${getSS}`:getSS)
            console.log(sec)
        };
        // timeFun(); 
        const timeIn=setInterval(timeFun,1000);
        return () => clearInterval(timeIn);
    })
  return (
    <div className="w-full h-screen bg-gray-500 flex justify-center items-center">
        <div className="inline-flex flex-col bg-white rounded-lg px-14 py-8 items-center">
            <div><h1 className="text-orange-600 md:text-[70px] text-[45px]">Digital Clock</h1></div>
            <div className="font-bold md:text-[80px] text-[50px]">{hour}:{min}:{sec} PM</div>
            <div className="text-gray-400 md:text-[35px] text-[25px]">{day}, {mm} {date}, {year}</div>
        </div>
    </div>
  )
}
