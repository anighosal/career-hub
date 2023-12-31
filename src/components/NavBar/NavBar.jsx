import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
     <div className='bg-gray-100'>
        <div className=' px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
         <div className='flex items-center justify-between'>
          <Link to='/errorpage'>  <span className='font-extrabold text-3xl  bg-blend-color-burn '>BuildCareer</span>
          </Link>
          <ul className='items-center hidden space-x-8 lg:flex'>
              <li>    
                 <NavLink
              to='/'
             
              className={({ isActive }) => (isActive ? 'active' : 'default')}
                 >
              Home
                 </NavLink> 
              </li>
            <li>    
              <NavLink
              to='/statistics'
             
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Statistics
               </NavLink> </li>
            <li>   
                    <NavLink
              to='/appliedJobs'
            
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
             AppliedJobs
                     </NavLink>
            </li>
            <li>    
                     <NavLink
              to='/blog'
             
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
             Blog
                  </NavLink>
            </li>
          </ul>
          <Link className='bg-gradient-to-r from-indigo-500 to-indigo-400  px-5 py-3 rounded-xl'>
          <button className='text-white font-semibold font-xl'>Star Applying</button>
          </Link>
{/* mobile navbar section */}
          <div className='lg:hidden'>
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className='w-5 text-gray-600' />
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
               
                <Link to='/errorpage'>  <span className='font-extrabold text-3xl  bg-blend-color-burn '>BuildCareer</span>
          </Link>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/statistics'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Statistics
                      </Link>
                    </li>
                    <li>
                      <Link
                         to='/appliedJobs'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        AppliedJobs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/blog'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </nav>
                <Link className='bg-gradient-to-r from-indigo-500 to-indigo-400  px-5 py-3 rounded-xl'>
          <button className='text-white font-semibold font-xl'>Star Applying</button>
          </Link>
              </div>
            </div>
          )}
        </div>

        </div>
       </div>
     </div>
    );
};

export default NavBar ;