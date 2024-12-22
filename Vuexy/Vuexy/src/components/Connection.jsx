import React from 'react';
import { PiDotsThreeVertical } from "react-icons/pi";
import ChatLine from './ChatLine';
import img1 from '../assets/2.png';
import img2 from '../assets/3.png';
import img3 from '../assets/10.png';
import img4 from '../assets/7.png';
import img5 from '../assets/12.png';
import Teams from './Teams';

const Connection = () => {
  const data1 = [
    {
      key: 1,
      pic: img1,
      name: 'Cecilia Payne',
      cmt: '45 Connections',
      profiletick: true
    },
    {
      key: 2,
      pic: img2,
      name: 'Curtis Fletcher',
      cmt: '1.32k Connections',
      profiletick: false
    },
    {
      key: 3,
      pic: img3,
      name: 'Alice Stone',
      cmt: '125 Connections',
      profiletick: false
    },
    {
      key: 4,
      pic: img4,
      name: 'Darrell Barnes',
      cmt: '456 Connections',
      profiletick: true
    },
    {
      key: 5,
      pic: img5,
      name: 'Eugenia Moore',
      cmt: '1.2k Connections',
      profiletick: true
    }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow w-full max-w-sm px-6">
      <div className="flex justify-between py-6">
        <p className="text-[19px]">Connection</p>
        <PiDotsThreeVertical size={22} />
      </div>
      <div className='space-y-1.5'>
      {data1.map(item => (
        <ChatLine
          key={item.key}
          pic={item.pic}
          name={item.name}
          cmt={item.cmt}
          profiletick={item.profiletick}
        />
      ))}
      </div>
      <div className='text-[15px] text-[#7367F0] text-center py-3'>View all connections</div>
    </div>
  );
};

export default Connection;
