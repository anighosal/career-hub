import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign,faCashRegister, faPhone, faVoicemail} from '@fortawesome/free-solid-svg-icons'



const JobDetails = () => {
    const [detailsJob, setDetailsJob] = useState({});
    const { jobId } = useParams()
    const allJobs = useLoaderData();
    useEffect(() => {
        if (allJobs.length) {
            const details = allJobs.find(job => job.id === jobId)
            setDetailsJob(details)
        }
    }, [jobId])
    console.log(detailsJob)
    return (
        <div>
          <div  className='bg-gray-100 h-full'>
          <h1 className='text-center font-bold text-lg'>Job Details</h1>
          </div>
            

           <div className='grid lg:grid-cols-2 mt-24 mx-auto container gap-20'>
           <div>
                <h2><span className='text-xl font-bold'>Job Description:</span> {detailsJob.jobDescription}</h2>
                <h2><span className='text-xl font-bold'> Job Responsibility:</span> {detailsJob.jobResponsibilities}</h2>
                <h2><span className='text-xl font-bold'> Educational Requirements: <br /></span> {detailsJob.educationalRequirements}</h2>
                <h2><span className='text-xl font-bold'> Experiences: <br /></span> {detailsJob.experience}</h2>
                
                
            </div>
           <div>
           <div className='bg-gray-300 w-[400px] h-[400px] '>
            <h2 className='text-xl font-bold ml-6 mt-6'>Job Details</h2>
            <hr  className='w-[364px] ml-7 mt-2 '/>
            <div className='ml-5 mt-3'>
            <FontAwesomeIcon icon={faDollarSign} className='mr-2 ml-2 text-indigo-400' />
            <small><span className='font-bold'>Salary :</span> {detailsJob.salary}</small>
            </div>
            <div className='ml-5 mt-3'>
            <FontAwesomeIcon icon={faCashRegister} className='mr-2 ml-2 text-indigo-400' />
            <small><span className='font-bold'>Job Title :</span> {detailsJob.title}</small>
            </div>
            <hr  className='w-[364px] ml-7 mt-2 '/> <br />
            <h2 className='text-xl font-bold ml-6 mt-6'>Contact Information</h2>

            <div className='ml-5 mt-3'>
            <FontAwesomeIcon icon={faPhone} className='mr-2 ml-2 text-indigo-400' />
            <small><span className='font-bold'>Phone :</span> {detailsJob.phone}</small>
            </div>
            <div className='ml-5 mt-3'>
            <FontAwesomeIcon icon={faVoicemail} className='mr-2 ml-2 text-indigo-400' />
            <small><span className='font-bold'>Email :</span> {detailsJob.email}</small>
            </div>
            <div className='ml-5 mt-3'>
            <FontAwesomeIcon icon={faLocationDot} className='mr-2 ml-2 text-indigo-400' />
            <small><span className='font-bold'>Address :</span> {detailsJob.location}</small>
            </div>
          
            </div>
            <button>Apply Now</button>
           </div>
           </div>
        </div>
    );
};

export default JobDetails;