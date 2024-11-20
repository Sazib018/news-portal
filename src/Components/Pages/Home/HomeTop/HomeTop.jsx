import moment from 'moment';
import React from 'react';
import Marquee from 'react-fast-marquee';

const HomeTop = () => {
    return (
        <div className="text-center mt-6 px-4">
            <h1 className="text-4xl md:text-6xl text-[#444] font-normal"
                style={{ fontFamily: "'Old English Text MT', serif" }}>
                The Dragon News</h1>
            <p className="text-[#706F6F] text-base md:text-lg font-normal mt-5">
                Journalism Without Fear or Favour </p>
            <h3 className="text-[#403F3F] text-lg md:text-xl font-medium mt-3">
                {moment().format('dddd, MMMM D, YYYY')}</h3>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 bg-[#F3F3F3] px-6 md:px-10 py-4 md:py-5 items-center mt-7">
                <button className="bg-[#D72050] px-4 md:px-6 py-2 text-[#FFF] text-base md:text-xl font-medium">Latest</button>
                <Marquee speed={100} className="w-full">
                    <p className="text-[#403F3F] text-sm md:text-lg font-semibold">
                     Match Highlights: Germany vs Spain — as it happened! Match Highlights: Germany vs Spain as...</p>
                </Marquee>
            </div>
        </div>
    );
};

export default HomeTop;
