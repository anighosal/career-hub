import React from 'react';

const SingleJob = ({jobItem, index}) => {
    const {image, category, jobs} = jobItem
    return (
        <div className='bg-[#ebf7fc] p-10 rounded-lg cursor-pointer mt-3'>
            <img className='p-4 bg-slate-300 rounded-lg' src={image} alt={category} />
            <h3 className='text-lightDark text-xl font-extrabold mt-8 mb-2 drop-shadow-lg'>{category}</h3>
            <p className='text-gray font-medium'>{jobs}</p>
        </div>
    );
};

export default SingleJob;