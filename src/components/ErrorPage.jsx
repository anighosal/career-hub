import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
     <div className='text-center'>
     <h2>404</h2>
      <p>Sorry this page not availabe</p>
      <Link to='/'><button className='bg-blue-500 text-slate-100 text-2xl'>Back to Home</button></Link>
     </div>
    </div>
  );
};

export default ErrorPage;