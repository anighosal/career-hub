import React from 'react';
import Job from '../Job/Job';

const FeaturedJobs = ({featureJob}) => {
    return (
        <div className='mt-10'>
            <h1 className='font-bold text-center text-3xl'>
            Featured Jobs
            </h1>
            <p className='text-center mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid lg:grid-cols-2 gap-y-8 container mx-auto mt-6'>
                {
                    featureJob.map(job => <Job 
                        key={job.id}
                        job={job}
                    ></Job> )
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;