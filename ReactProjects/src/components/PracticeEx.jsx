import React, { useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";


export const PracticeEx = () => {
    const items=[{id:1,checked:true,list:"Coding JS"},
        {id:2,checked:true,list:"Playing MCOC"},
        {id:3,checked:false,list:"Playing Chess"},
    ]
    const [value,setValue]=useState(items)
    const handleCheck=(id,checkVal)=>{
        const dubValue=value
        dubValue[id-1].checked=!checkVal
        setValue([...dubValue])
    }
    const handleDel=(id)=>{
        let index=1
        const dubValue=value
        dubValue.splice(id-1,1)
        dubValue.forEach((item)=>item.id=index++)
        setValue([...dubValue])
    }
  return (
    <div>
        <p>Todo List</p>
        <ul>
            {value.map((item)=>
                (<li key={item.id}>
                    <div className="flex">
                    <input type="checkbox" checked={item.checked} onChange={()=>handleCheck(item.id,item.checked)} /> 
                    <label>{item.list}</label>
                    <MdDeleteOutline className="w-[30px] h-[30px]" onClick={()=>handleDel(item.id)}/>
                    </div>
                </li>)
            )}
        </ul>
    </div>
  )
}
