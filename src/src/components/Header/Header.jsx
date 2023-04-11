import React from 'react';
import imgCover from '../../assets/img.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-gray-100 pt-20'>
             <div className='container px-4 md:px-8 lg:px-10 xl:px-20'>
             <div className='grid grid-cols-2 place-items-center gap-3'>
           <div>
           <h1 className=' lg:leading-tight sm:text-4xl lg:text-7xl font-extrabold text-gray-900'>One Step <br /> Closer To Your <br /> <span className='animate-text bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-transparent font-black'>Dream Job</span></h1>
               <p className='mt-6'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
               <button className='text-white font-semibold font-xl bg-gradient-to-r from-indigo-500 to-indigo-400  px-5 py-3 rounded-xl mt-3'>Get Started</button>
           </div>
           <img  src={imgCover} alt="imgBanner" />
             </div>
            
              
             
            </div>
        </div>
    );
};

export default Header;