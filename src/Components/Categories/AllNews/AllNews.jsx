import React from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { IoShareSocialSharp } from 'react-icons/io5';
import { MdRemoveRedEye } from 'react-icons/md';
import { VscStarFull } from 'react-icons/vsc';

const AllNews = () => {
    return (
        <div>
            <div className="max-w-[558px] mx-auto bg-white rounded-lg border">
                <div className="flex items-center bg-[#F3F3F3] p-4">
                    <img
                        src=""
                        alt=""
                        className=""/>
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-800">Awlad Hossain</h3>
                        <p className="text-xs text-gray-500">2022-08-21</p>
                    </div>
                    <div className="ml-auto">
                  <div className='flex gap-2'>
                  <FaRegBookmark />
                  <IoShareSocialSharp />
                  </div>
                    </div>
                </div>

                <div className="px-4">
                    <h2 className="text-xl font-bold text-[#403F3F] mt-3">
                        Biden Pledges Nearly $3 Billion To Ukraine In <br /> Largest U.S. Military Aid Package Yet
                    </h2>
                </div>
                <div className="mt-4">
                    <img
                        src=""
                        alt=""
                        className=""/>
                </div>
                <div className="p-4">
                    <p className="text-base text-[#706F6F] font-semibold">
                        Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News...
                    </p>
                    <a href="#read-more" className="text-[#FF8C47] hover:underline text-sm font-medium">
                    Read More</a>
                </div>
                <div className="flex items-center justify-between p-4 border-t">
                    <div className="flex items-center">
                        <div className="text-yellow-500 flex">
                        <VscStarFull />
                        <VscStarFull />
                        <VscStarFull />
                        <VscStarFull />
                        <VscStarFull />
                        </div>
                        <span className="ml-2 text-sm text-gray-600">4.9</span>
                    </div>
                    <div className="flex items-center">
                    <MdRemoveRedEye />
                        <span className="ml-1 text-sm text-gray-600">499</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllNews;