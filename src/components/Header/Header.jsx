import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
       <div className='bg-gray-100'>
         <div className='flex items-center justify-between px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
          <Link>   <span className='font-extrabold text-3xl  bg-blend-color-burn '>BuildCareer</span>
          </Link>
          <ul className='items-center hidden space-x-8 lg:flex'>
            <li>    <NavLink
              to='/'
              aria-label='Home'
              title='Home'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Home
            </NavLink> </li>
            <li>    <NavLink
              to='/statistics'
              aria-label='Statistics'
              title='Statistics'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Statistics
            </NavLink> </li>
            <li>    <NavLink
              to='/appliedJobs'
              aria-label='AppliedJobs'
              title='AppliedJobs'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
             AppliedJobs
            </NavLink> </li>
            <li>    <NavLink
              to='/blog'
              aria-label='Blog'
              title='Blog'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
             Blog
            </NavLink> </li>
          </ul>
          <Link className='bg-gradient-to-r from-indigo-500 to-indigo-400  px-5 py-3 rounded-xl'>
          <button className='text-white font-semibold font-xl'>Star Applying</button>
          </Link>

        </div>
       </div>
    );
};

export default Header;