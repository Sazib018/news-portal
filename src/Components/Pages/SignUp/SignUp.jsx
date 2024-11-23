import React, { useContext } from 'react';
import TopNav from '../../Shared/TopNav/TopNav';
import { AuthContext } from '../../Context/Provider';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, updateUser } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()

        const name = e.target.name.value;
        const photoURL = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        register(email , password)
        .then (result => {
            console.log(result.user);
            const userInfo ={
                displayName: name,
                photoURL:photoURL
            }
            updateUser (userInfo)
            .then (res => console.log(res))
            .catch (e => console.log(e))
        })
        .catch (err => console.log(err)
        )
    }
    return (
        <div>
            <TopNav></TopNav>
            <div className="min-h-screen flex items-center justify-center bg-[#F3F3F3] font-poppins ">
                <div className="bg-white rounded-[5px] p-[73px] mt-[94px] mb-[125px] w-[752px]">
                    <h1 className="text-[35px] font-semibold text-center text-[#403F3F]">Register your account</h1>
                    <div className='border my-[50px]'></div>
                    <form onSubmit={handleRegister} className='p-[21px]'>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2"> Your Name </label>
                            <input type="text" name="name" className="w-full bg-[#F3F3F3] px-[20px] py-[20.5px]" placeholder="Enter your name" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2"> Photo URL</label>
                            <input type="url" name="photoUrl" className="w-full bg-[#F3F3F3] px-[20px] py-[20.5px]" placeholder="Enter your photo URL" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Email </label>
                            <input type="email" name="email" className="w-full bg-[#F3F3F3] px-[20px] py-[20.5px]" placeholder="Enter your email address" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Password </label>
                            <input type="password" name="password" className="w-full bg-[#F3F3F3] px-[20px] py-[20.5px]" placeholder="Enter your password" required />
                        </div>
                        <div className="mb-6">
                            <label className="flex items-center">
                                <input type="checkbox" name="termsAccepted" className="mr-2" required />
                                <span className="text-gray-700">
                                    Accept <span className="font-semibold">Terms & Conditions</span>
                                </span>
                            </label>
                        </div>
                        <button type="submit" className="w-full bg-[#403F3F] text-xl font-semibold text-white py-[17.5px] rounded-lg hover:bg-gray-800 transition">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;