import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
       <div className='bg-gray-100'>
         <div className='container flex items-center justify-between px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
          <Link to='/errorpage'>  <span className='font-extrabold text-3xl  bg-blend-color-burn '>BuildCareer</span>
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

          <div className='lg:hidden'>
          <button
            aria-label='Open Menu'
            title='Open Menu'
            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
              />
              <path
                fill='currentColor'
                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
              />
              <path
                fill='currentColor'
                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className='absolute z-10 top-0 left-0 w-full'>
              <div className='p-5 bg-white border rounded shadow-sm'>
              
                <Link to='/errorpage'>  <span className='font-extrabold text-3xl  bg-blend-color-burn '>BuildCareer</span>
          </Link>
          <nav> 
              <li>    <Link
              to='/'
              aria-label='Home'
              title='Home'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Home
            </Link> </li>
                
                  <ul className='space-y-4'>
                  <li>    <Link
              to='/statistics'
              aria-label='Statistics'
              title='Statistics'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Statistics
            </Link> </li>
            <li>    <Link
              to='/appliedJobs'
              aria-label='AppliedJobs'
              title='AppliedJobs'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
             AppliedJobs
            </Link> </li>
            <li>    <Link
              to='/blog'
              aria-label='Blog'
              title='Blog'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
             Blog
            </Link> </li>
                  </ul>
                </nav>
                <Link className='bg-gradient-to-r from-indigo-500 to-indigo-400  px-3 py-2 mt-2 rounded-xl'>
          <button className='text-white font-semibold font-xl'>Star Applying</button>
          </Link>
              </div>
            </div>
          )}
        </div>

        </div>
       </div>
    );
};

export default NavBar ;