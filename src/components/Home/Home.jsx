import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import imgCover from '../../assets/img.png'



const Home = () => {
    return (
        <div className='bg-gray-100 lg:px-8'>
            <div className='my-container lg:flex pb-24 lg:pb-56 gap-6'>
             <div className='ml-16 pl-2 mt-24 '>
             <h1 className='text-3xl w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl font-bold'>One Step <br /> Closer To Your <br /> <span className='animate-text bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-transparent font-black'>Dream Job</span></h1>
               <p className='mt-6'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
             </div>
              
              <div className='mt-5'>
              <img src={imgCover} alt="" />
              </div>
            </div>
         
        </div>
    );
};

export default Home;