import { useState, useEffect } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import bell from '../assets/bell.png'
import jap from '../assets/jap.png'
import light from '../assets/light.png'
import menu from '../assets/menu.png'
import dp from '../assets/dp.png'
import { HiOutlineXMark } from "react-icons/hi2";


const SearchBar = () => {
    const [search, setSearch] = useState(false);

    const showSearch = () => {
        setSearch(prevSearch => !prevSearch);
    };


    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === '/') {
                showSearch();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    
  return (
    <div className="">
        {(!search)? (
            <div className='w-full bg-white px-6 flex py-2 justify-between items-center my-4 rounded-md shadow-lg'>
                <div className='flex space-x-4'>
                    <IoSearchOutline size={25} />
                    <p className='text-[15px] text-[#ACAAB1]' onClick={showSearch}>Search (Ctrl+/)</p>
                </div>
                <div className='flex space-x-2.5'>
                    <img src={jap} alt="" />
                    <img src={light} alt="" />
                    <img src={menu} alt="" />
                    <img src={bell} alt="" />
                    <img src={dp} className="w-[40px] h-[40px] rounded-full" alt="" />
                </div>
            </div>
        ):
        (<div className='w-full bg-white px-6 flex py-4 justify-between items-center my-4 rounded-md shadow-lg'>
            <div>
            <input type="text" placeholder="Search..." className="border-0 outline-none" />
            </div>
            <div onClick={showSearch}><HiOutlineXMark size={20}/></div>
        </div>)}
    </div>
  )
}

export default SearchBar