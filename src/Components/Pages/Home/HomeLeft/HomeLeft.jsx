import React, { useEffect, useState } from 'react';
import HomeLeftNav from './HomeLeftNav';

const HomeLeft = () => {
    const [navData , setNavData] = useState();
    useEffect(() => {
        fetch('/data/categories.json')
        .then(res => res.json())
        .then(data => setNavData(data))
    },[])
    return (
        <div>
           <div className='flex flex-col gap-6'>
            <p className='text-[#403F3F] text-xl font-semibold'>All Caterogy</p>
            {
                navData?.map(data => <HomeLeftNav data={data} key={data.id}></HomeLeftNav>)
            }
           </div>
        </div>
    );
};

export default HomeLeft;