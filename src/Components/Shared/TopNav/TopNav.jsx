import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (

        <div className="flex flex-col md:flex-row items-center justify-between mt-6 px-4 md:px-8 py-4 gap-4 md:gap-0">
            <div className="flex  gap-4 md:gap-6 text-[#706F6F] text-sm md:text-lg lg:ml-[450px]  md:ml-auto font-medium">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/career'}>Career</Link>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
                <img
                    className="w-8 md:w-10 h-8 md:h-10"
                    src="https://i.ibb.co/9nsZghD/user.png" />
                <button className="bg-[#403F3F] text-white text-sm md:text-lg font-semibold px-6 md:px-10 py-2">Login
                </button>
            </div>
        </div>
    );
};

export default TopNav;