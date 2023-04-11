import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const SingleJobDetail = ({ singlejobdetail}) => {
    const {companyLogo, title,salary, location, workplace, jobType, company}=  singlejobdetail
    return (
        <div className='mx-auto container mt-40 px-12 hover:border-2'>
      <div className='flex lg:flex-1'>
      <div className='flex lg:flex-1 gap-8'>
          <div className='bg-gray-100 w-[200px] h-[200px]'>
            <img src={companyLogo} alt="" className='px-10 py-20' />
           </div>
           <div className='mt-10'>
           <div>
            <h1 className='text-lg font-bold mb-2'>{title}</h1>
            <p>{company}</p>
            <div>
            <button  className='mr-2 px-2 py-1 border-indigo-400 border-2 rounded-lg animate-text bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-transparent '>{workplace}</button>
                      
                      
                      <button className='px-2 py-1 mt-3 border-indigo-400 border-2 rounded-lg animate-text bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-transparent'>{jobType}</button>
            </div>
            <div className='mt-2'>
                      <FontAwesomeIcon icon={faLocationDot} className='mr-2' />
                      
                      <small>{location}</small>
                      <FontAwesomeIcon icon={faDollarSign} className='mr-2 ml-2' />
                      <small>Salary: {salary}</small>

                      </div>
            
           </div>
           </div>
          </div>
           
       <div className='mt-10 pr-20'>
       <button className='text-white font-semibold font-xl bg-gradient-to-r from-indigo-500 to-indigo-400  px-3 py-2  mt-4'>View Details</button>
       </div>
      </div>
                     

        </div>
    );
};

export default SingleJobDetail;