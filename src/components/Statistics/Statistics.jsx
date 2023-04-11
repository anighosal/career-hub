import React from 'react';


import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const Statistics = () => {
   
      
    const marksArray = [
        { id: 1, subject: 'Maths', marks: 55 },
        { id: 2, subject: 'English', marks: 59 },
        { id: 3, subject: 'Science', marks: 51 },
        { id: 4, subject: 'Social Studies', marks: 48},
        { id: 5, subject: 'Art', marks: 53 },
        { id: 6, subject: 'Physical Education', marks: 56 },
        { id: 7, subject: 'Music', marks: 60 },
        { id: 8, subject: 'Computer Science', marks: 56 }
      ]
    
      
        return (
            <div className='text-center mt-12'>
                <h1 className='text-2xl font-bold mb-2'>This is MY all assingment marks</h1>
                <p className='text-xl font-semibold'>I have got marks out of <span className=' font-bold bg-blue-500 text-white text-xl'>60</span> mention in piechart</p>
                <div width="100%" height="100%">
              <PieChart className='ml-96 pl-20' width={400} height={400}>
                <Pie
                  dataKey="marks"
                  
                  startAngle={180}
                  endAngle={0}
                  data={marksArray}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                />
              </PieChart>
            </div>
            </div>
          );
      }
      

export default Statistics;