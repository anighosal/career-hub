import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const Job = ({job}) => {
    const {companyLogo, title,salary, location, workplace, jobType, company,id}=  job


    return (
        <>
            
                     <div className='w-[600px] h-[350px] border-2 rounded-lg'>
                      
                     
                   <div className='ml-8'>
                   <img src={companyLogo} alt="" className='mt-8'/>
                        <h2 className='font-bold text-2xl mt-4'>{title}</h2>
                        <p className='mt-4 mb-4'>{company}</p>
                     
                     
                      <button  className='mr-2 px-4 py-2 border-indigo-400 border-2 rounded-lg animate-text bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-transparent '>{workplace}</button>
                      
                      
                       <button className='px-4 py-2 border-indigo-400 border-2 rounded-lg animate-text bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-transparent'>{jobType}</button>
                      <div className='mt-2'>
                      <FontAwesomeIcon icon={faLocationDot} className='mr-2' />
                      
                      <small>{location}</small>
                      <FontAwesomeIcon icon={faDollarSign} className='mr-2 ml-2' />
                      <small>Salary: {salary}</small>

                      </div>
                      <Link to={`/job/${id}`}>
                      <button className='text-white font-semibold font-xl bg-gradient-to-r from-indigo-500 to-indigo-400  px-5 py-3  mt-4'>View Details</button>
                      </Link>
                      
                      
                   </div>
                    
                      
                     </div>
                  
           
        </>
    );
};

export default Job;