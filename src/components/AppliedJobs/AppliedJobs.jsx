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
           <h1 className='text-center font-bold text-xl'> Applied Jobs</h1>

           {
            appliedJobs.map(singlejobdetail => <SingleJobDetail></SingleJobDetail> )
           }
        </div>
    );
};

export default AppliedJobs;