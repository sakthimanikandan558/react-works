import React from 'react'
import LeftCardDetails from './LeftCardDetails'
import { IoPersonOutline } from "react-icons/io5";


const LeftCards = () => {
    const data1 = [
        {
            id: 1,
            title: "About",
            content:[
                {
                    id: 1,
                    icon: <IoPersonOutline size={24} className='text-gray-600'/>,
                    heading: 'Full Name',
                    content: 'John Doe'
                },
                {
                    id: 2,
                    icon: <IoPersonOutline size={24} className='text-gray-600'/>,
                    heading: 'Status',
                    content: 'John Doe'
                },
                {
                    id: 3,
                    icon: <IoPersonOutline size={24} className='text-gray-600'/>,
                    heading: 'Full Name',
                    content: 'John Doe'
                },
                {
                    id: 4,
                    icon: <IoPersonOutline size={24} className='text-gray-600'/>,
                    heading: 'Full Name',
                    content: 'John Doe'
                },
                {
                    id: 5,
                    icon: <IoPersonOutline size={24} className='text-gray-600'/>,
                    heading: 'Full Name',
                    content: 'John Doe'
                },
            ],
        },
        {
            id: 2,
            title: "About",
            content:[
                {
                    id: 1,
                    icon: <IoPersonOutline size={24} className='text-gray-600'/>,
                    heading: 'Full Name',
                    content: 'John Doe'
                },
                {
                    id: 2,
                    icon: <IoPersonOutline size={24} className='text-gray-600'/>,
                    heading: 'Status',
                    content: 'John Doe'
                },
                {
                    id: 3,
                    icon: <IoPersonOutline size={24} className='text-gray-600'/>,
                    heading: 'Full Name',
                    content: 'John Doe'
                }
            ],
        },
        {
            id: 3,
            title: "About",
            content:[
                {
                    id: 1,
                    icon: <IoPersonOutline size={24} className='text-gray-600'/>,
                    heading: 'Full Name',
                    content: 'John Doe'
                },
                {
                    id: 2,
                    icon: <IoPersonOutline size={24} className='text-gray-600'/>,
                    heading: 'Status',
                    content: 'John Doe'
                }
            ],
        },
      ];
  return (
    <div>
        <div className="bg-white border border-gray-200 rounded-lg shadow w-full max-w-sm px-6">
            {data1.map((value)=>(
                <LeftCardDetails
                key={value.id}
                title={value.title}
                content={value.content}
                />
            ))}
        </div>
    </div>
  )
}

export default LeftCards