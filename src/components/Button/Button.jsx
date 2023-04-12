import React from 'react';

const Button = ({children}) => {
    return (
        <div className='text-center mt-3'>
       <button className='text-white font-semibold font-xl bg-gradient-to-r from-indigo-500 to-indigo-400  px-3 py-2  mt-4'>{children}</button>
    </div>
    );
};

export default Button;