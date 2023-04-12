import React, { useState } from 'react';
import Job from '../Job/Job';
import Button from '../Button/Button';

const FeaturedJobs = ({featureJob}) => {
    const [showAll, setShowAll] =useState(false)
    const handleShowAll = () =>{
        setShowAll(true)
    }
    return (
        <div className='mt-10'>
            <h1 className='font-bold text-center text-3xl'>
            Featured Jobs
            </h1>
            <p className='text-center mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid lg:grid-cols-2 gap-y-8 container mx-auto mt-6'>
                {
                    featureJob.slice(0, showAll? 6 : 4 ).map(job => <Job 
                        key={job.id}
                        job={job}
                    ></Job> )
                }
            </div>
        {!showAll && 
        <span onClick={handleShowAll}><Button>See All Jobs</Button></span>

        }
        </div>
    );
};

export default FeaturedJobs;