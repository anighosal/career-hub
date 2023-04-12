import React from 'react';
import img1 from '../../assets/All Images/Vector-1.png';
import img2 from '../../assets/All Images/Vector.png'


const Blog = () => {
    return (
        <div>
             <div className='bg-gray-100 h-[248px] relative'>
             <h1 className='text-center font-bold text-xl'> Blog</h1>
          <img  className='absolute -top-24 -right-3'  src={img1} alt="bannerimg" />
          <img  className='absolute' src={img2} alt="" />
          </div>
          <div className='container mx-auto mt-10'>
          <h2 className='text-2xl font-bold text-red-500'>1: When should you use context api?</h2>
            <h5 className='text-blue-400 text-lg font-medium'>Ans: when share data to be passed by many components from different level.</h5><br />
            <h2 className='text-2xl font-bold text-red-500'>2: What is custom hook?</h2>
            <h5 className='text-blue-400 text-lg font-medium'>Ans: A custom hook is a  function whose name starts with 'use' .it is a composition of other hooks. Example: Usememo</h5><br />
            <h2 className='text-2xl font-bold text-red-500'>3: What is useRef?</h2>
            <h5 className='text-blue-400 text-lg font-medium'>Ans: useRef(initialValue) is a React hook that receives  one argument as the initial value called and returns a object called reference.</h5><br />
            <h2 className='text-2xl font-bold text-red-500'>4: What is useMemo?</h2>
            <h5 className='text-blue-400 text-lg font-medium'>Ans: useMemo is a React hook that is used to memoize the result of a function</h5>
           
           
            
            
          </div>
          
        </div>
    );
};

export default Blog;