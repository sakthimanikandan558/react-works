import React from 'react';
import { PiDotsThreeVertical } from "react-icons/pi";
import ChatLine from './ChatLine';
import img1 from '../assets/react-label.png';
import img2 from '../assets/support-label.png';
import img3 from '../assets/figma-label.png';
import img4 from '../assets/vue-label.png';
import img5 from '../assets/twitter-label.png';

const Teams = () => {
    const data1 = [
        {
          key: 1,
          pic: img1,
          name: 'Cecilia Payne',
          cmt: '72 Members',
          profiletick: true
        },
        {
          key: 2,
          pic: img2,
          name: 'Curtis Fletcher',
          cmt: '122 Members',
          profiletick: false
        },
        {
          key: 3,
          pic: img3,
          name: 'Alice Stone',
          cmt: '7 Members',
          profiletick: false
        },
        {
          key: 4,
          pic: img4,
          name: 'Darrell Barnes',
          cmt: '289 Members',
          profiletick: true
        },
        {
          key: 5,
          pic: img5,
          name: 'Eugenia Moore',
          cmt: '24 Members',
          profiletick: true
        }
      ];
    
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow w-full max-w-sm px-6">
          <div className="flex justify-between py-6">
            <p className="text-[19px]">Teams</p>
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
          <div className='text-[15px] text-[#7367F0] text-center py-3'>View all teams</div>
        </div>
      );
}

export default Teams