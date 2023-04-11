import React from 'react';
import SingleJobDetail from '../SingleJobDetail/SingleJobDetail';
import { useLoaderData } from 'react-router-dom';



const JobDetails = () => {
    const jobdetails = useLoaderData()
    
    return (
        <div className='bg-gray-100 h-full'>
            <h1 className='text-center font-bold text-lg'>Job Details</h1>
            <div className='lg:flex items-center justify-between container mx-auto mt-40 px-80 ' >
              {
                JobDetails.map(jobItem => <SingleJobDetail></SingleJobDetail>
                            
                )
              }

            </div>
            
        </div>
    );
};

export default JobDetails;