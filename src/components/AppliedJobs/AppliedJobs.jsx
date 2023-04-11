import React, { useEffect, useState } from 'react';
import { getStoredJob } from '../Utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import SingleJobDetail from '../SingleJobDetail/SingleJobDetail';

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
          <div className='bg-gray-100 h-[200px]'>
          <h1 className='text-center font-bold text-xl'> Applied Jobs</h1>
          </div>

           {
            appliedJobs.map(singlejobdetail => <SingleJobDetail key={singlejobdetail.id}
                singlejobdetail={singlejobdetail}
            ></SingleJobDetail>
               
             )
           }
        </div>
    );
};

export default AppliedJobs;