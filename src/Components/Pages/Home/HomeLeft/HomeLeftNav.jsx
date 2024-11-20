import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeLeftNav = ({ data }) => {
    return (
        <NavLink
            to={`/${data.route}`}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#E7E7E7] text-[#9F9F9F] rounded-md px-6 py-3 text-xl" : "px-6 py-3 text-xl"} >
            {data.name}
        </NavLink>
    );
};

export default HomeLeftNav;