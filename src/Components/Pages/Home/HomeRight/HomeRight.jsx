import React from 'react';

const HomeRight = () => {
    return (
        <>
        <div className="flex items-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-80">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Login With</h2>
          <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-500 rounded-md  ">
            <img  className="w-5 h-5 mr-2"src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/225px-Google_%22G%22_logo.svg.png"
              alt=""/>
            Login with Google
          </button>
          <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-500 rounded-md mt-2">
            <img className="w-5 h-5 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="" />
            Login with GitHub
          </button>
        </div>
      </div>

      <div className='h-[190px] mt-8'>
            <h3 className='text-[#403F3F] text-xl font-semibold'>Find Us On</h3>
        <div className='flex gap-[10px] mt-5'>
            <img className='w-7 h-7' src="https://i.ibb.co.com/7JM7XpM/download.png" alt="" />
            <p>Facebook</p>
        </div>
        </div>
        </>
    );
};

export default HomeRight;