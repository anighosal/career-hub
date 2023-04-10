import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const {companyLogo, title,salary, location, workplace, jobType, company}=  job
    return (
        <>
            
                     <div className='w-[600px] h-[392px] border-2 rounded-lg'>
                      
                     
                   <div className='ml-8'>
                   <img src={companyLogo} alt="" className='mt-8'/>
                        <h2 className='font-bold text-2xl mt-4'>{title}</h2>
                        <p className='mt-4'>{company}</p>
                       <div className='mt-4 gap-x-2'>
                     
                      <button  className='mr-2 px-4 py-2 border-indigo-400 border-2 rounded-lg animate-text bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-transparent '>{workplace}</button>
                      
                      
                       <button className='px-4 py-2 border-indigo-400 border-2 rounded-lg animate-text bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-transparent'>{jobType}</button>
                      
                       </div>
                   </div>
                    
                      
                     </div>
                  
           
        </>
    );
};

export default Job;