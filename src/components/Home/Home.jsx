


import React from 'react';

import { Outlet, useLoaderData } from 'react-router-dom';
import JobCategory from '../JobCategory/JobCategory';
import Header from '../Header/Header';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';



const Home = () => {
  const { jobCategory, featureJob} = useLoaderData();
  return (
    <div>
      <Header></Header>
      <JobCategory jobCategory={jobCategory}></JobCategory>
      <FeaturedJobs featureJob={featureJob}></FeaturedJobs>
    </div>
  );
};

export default Home;