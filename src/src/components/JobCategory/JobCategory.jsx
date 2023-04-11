import React from 'react';
import SingleJob from '../SingleJob/SingleJob';


const JobCategory = ({jobCategory}) => {
   
    
   
    return (
        <section className='mt-5'>
        <h1 className='font-bold text-center text-3xl'>Job Category List</h1>
        <p className='text-center mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>

       <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mx-8 px-5'>
       {
               jobCategory.map((jobItem, index) => <SingleJob
               key={index}
               jobItem={jobItem}
                                                ></SingleJob>)
          }
       </div>
      </section>
    );
};

export default JobCategory;