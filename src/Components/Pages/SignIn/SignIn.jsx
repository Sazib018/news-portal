import React from 'react';
import TopNav from '../../Shared/TopNav/TopNav';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div>
            <TopNav></TopNav>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 font-poppins">
                <div className="bg-white rounded-[5px] p-[73px] mt-[94px] mb-[125px] w-[752px]">
                    <h1 className="text-[35px] font-semibold text-center text-[#403F3F]">Login your account</h1>
                    <div className='border my-[50px]'></div>
                    <form className='p-[21px]'>
                    <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-700">  Email address</label>
                            <input type="email" name="email" className="w-full bg-[#F3F3F3] px-[20px] py-[20.5px]" placeholder="Enter your email address" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Password </label>
                            <input type="password" name="password" className="w-full bg-[#F3F3F3] px-[20px] py-[20.5px]" placeholder="Enter your password" required />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#403F3F] text-xl font-semibold text-white py-4 rounded-lg hover:bg-gray-800 transition"
                        >
                            Login
                        </button>
                    </form>
                    <p className="text-center mt-6 text-gray-600">
                        Don’t Have An Account?{" "}
                        <Link to="/signUp" className="text-red-500 font-medium hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;