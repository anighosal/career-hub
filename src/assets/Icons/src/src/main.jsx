import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import JobCategory from './components/JobCategory/JobCategory';
import JobAndFeatureJob from './components/JobAndFeatureJob/JobAndFeatureJob';
import JobDetails from './components/JobDetails/JobDetails';




const router =createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
   
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: JobAndFeatureJob
       
      },
      {
        path:'jobCategory',
        element: <JobCategory></JobCategory>,
       
      },
      {
        path:'statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'appliedjobs',
        element:< AppliedJobs></AppliedJobs>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'jobdetails',
        element: <JobDetails></JobDetails>,
        loader: JobAndFeatureJob
      }
    ]
   
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
