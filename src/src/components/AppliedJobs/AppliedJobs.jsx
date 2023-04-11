import React, { useEffect, useState } from 'react';
import { getStoredJob } from '../Utilities/fakedb';
import { useLoaderData } from 'react-router-dom';

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
            Applied Jobs
        </div>
    );
};

export default AppliedJobs;