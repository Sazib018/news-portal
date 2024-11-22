import React, { useEffect, useState } from 'react';
import HomeLeftNav from './HomeLeftNav';
import { IoCalendarClearOutline } from 'react-icons/io5'; // Ensure you import this icon

const HomeLeft = () => {
    const [navData, setNavData] = useState();

    useEffect(() => {
        fetch('/data/categories.json')
            .then(res => res.json())
            .then(data => setNavData(data));
    }, []);

    return (
        <>
            <div className='flex flex-col gap-6 font-poppins'>
                <p className='text-[#403F3F] text-xl font-semibold'>All Category</p>
                {
                navData?.map(data => <HomeLeftNav data={data} key={data.id}></HomeLeftNav>)
            }
            </div>
            <div className='mt-8 font-poppins'>
                <img src="https://i.ibb.co/Nt5H7GX/1.png" alt="" />
                <p className='text-[#403F3F] text-xl font-semibold my-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex gap-5'>
                    <p className='text-[#403F3F] font-medium'>Sports</p>
                    <div className='flex items-center text-[#9F9F9F] gap-[10px]'>
                        <IoCalendarClearOutline />
                        <p className='font-medium'>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
            <div className='mt-4 font-poppins'>
                <img src="https://i.ibb.co/ftXmGqd/2.png" alt="" />
                <p className='text-[#403F3F] text-xl font-semibold my-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex gap-5'>
                    <p className='text-[#403F3F] font-medium'>Sports</p>
                    <div className='flex items-center text-[#9F9F9F] gap-[10px]'>
                        <IoCalendarClearOutline />
                        <p className='font-medium'>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
            <div className='mt-4 font-poppins'>
                <img src="https://i.ibb.co/W0FcbR5/3.png" alt="" />
                <p className='text-[#403F3F] text-xl font-semibold my-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex gap-5'>
                    <p className='text-[#403F3F] font-medium'>Sports</p>
                    <div className='flex items-center text-[#9F9F9F] gap-[10px]'>
                        <IoCalendarClearOutline />
                        <p className='font-medium'>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeLeft;
