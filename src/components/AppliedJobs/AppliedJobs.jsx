import React, { useEffect, useState } from 'react';
import { getStoredJob } from '../Utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import SingleJobDetail from '../SingleJobDetail/SingleJobDetail';
import img1 from '../../assets/All Images/Vector-1.png';
import img2 from '../../assets/All Images/Vector.png'

const AppliedJobs = () => {
    const jobData = useLoaderData();
    const storedJobs = getStoredJob();
    let appliedJobs = [];
    for (const id in storedJobs) {
        if (jobData.length) {
            const foundJob = jobData.find(job => job.id === id);
            appliedJobs.push(foundJob);
        }
    }
    console.log(appliedJobs)

    return (
        <div>
          <div className='bg-gray-100 h-[248px] relative'>
          <h1 className='text-center font-bold text-xl'> Applied Jobs</h1>
          <img  className='absolute -top-24 -right-3'  src={img1} alt="bannerimg" />
          <img  className='absolute' src={img2} alt="" />
          </div>

           {
            appliedJobs.map(singlejobdetail => <SingleJobDetail 
                key={singlejobdetail.id} 
                singlejobdetail={singlejobdetail}></SingleJobDetail>
               
             )
           }
        </div>
    );
};

export default AppliedJobs;