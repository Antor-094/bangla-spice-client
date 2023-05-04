import React, { useEffect, useState } from 'react';
import Single_Featured_foods from './Single_Featured_foods';
// import Single_Featured_foods from './Single_Featured_foods';

const Featured_foods = () => {
    const [foods,setFoods] = useState([])

    useEffect(()=>{
        fetch('https://bangla-spice-server-antor-094.vercel.app/recipes')
        .then(res=>res.json())
        .then(data=>setFoods(data))
        .catch(err=>console.log(err))
    },[])
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-6 '>Some Featured Foods of BD</h1>
            <div className='grid md:grid-cols-3 md:w-[80%] gap-3 mx-auto my-4'>
        
        {
            foods.map(food=><Single_Featured_foods key={food.id} food={food}></Single_Featured_foods>)
        }
    </div>
        </div>
    );
};

export default Featured_foods;