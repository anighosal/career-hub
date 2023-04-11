import React, { useEffect, useState } from 'react';
import { getStoredJob } from '../Utilities/fakedb';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([])
    const jData = useLoaderData();
   useEffect(() => {
    const savedAppliedJobs = getStoredJob()
    let newArr = []
  
   
    for(const id in savedAppliedJobs){
        const foundJob = jData.find(job => job.id === id)
        if(foundJob) {
            newArr.push(foundJob)
        }
        
   
        
    }
    setAppliedJobs(newArr)
   }, [])


  
     
    return (
        <div>
            Applied Jobs
        </div>
    );
};

export default AppliedJobs;