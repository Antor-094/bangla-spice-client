import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Chefs_list from './Chefs_list';
import JonUs from './JonUs';
import Featured_foods from './featured_foods';

const Home = () => {
    const [chefs,setChef] = useState()
    useEffect(()=>{
    fetch('http://localhost:5000/chefs')
    .then(res=>res.json())
    .then(data=>setChef(data))
    })
    return (
        <div>
           <Banner></Banner>
           <h1 className='text-center font-bold my-10 text-3xl'>Meet Our Talented Chefs</h1>
          <div className='grid md:grid-cols-3 gap-3 lg:w-[80%] mx-auto items-center justify-center my-4 p-1'>
          {
                chefs && chefs.map(chef =>
                    <Chefs_list
                        key={chef.id}
                        chef={chef}
                    ></Chefs_list>
                )
            }
          </div>
          
        <div className='my-16'>
        <Featured_foods></Featured_foods>
        </div>
          
          <div className='my-12'>
          <JonUs></JonUs>
          </div>
        </div>
    );
};

export default Home;