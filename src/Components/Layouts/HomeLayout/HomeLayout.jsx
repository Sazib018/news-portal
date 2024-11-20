import React from 'react';
import HomeTop from '../../Pages/Home/HomeTop/HomeTop';
import TopNav from '../../Shared/TopNav/TopNav';
import HomeLeft from '../../Pages/Home/HomeLeft/HomeLeft';
import HomeRight from '../../Pages/Home/HomeRight/HomeRight';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
           <HomeTop></HomeTop>
           <TopNav></TopNav>

           <div className='flex justify-between mt-16  gap-6'>
            <div className='w-[267px]'>
                <HomeLeft></HomeLeft>
            </div>
                <Outlet></Outlet>
            <div className='w-[267px]'>
                <HomeRight></HomeRight>
            </div>
           </div>
        </div>
    );
};

export default HomeLayout;