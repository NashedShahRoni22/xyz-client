import React from 'react';

const HeadBar = () => {
    return (
        <nav className='flex justify-between p-4 items-center'>
            <div className='logo'>
                <p className='text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to bg-purple-500'>XYZ</p>
            </div>
            <div>
                <button className='px-4 py-2 text-gray-400 font-semibold hover:text-sky-500' >Sign in</button>
                <button className='px-4 py-2 text-white bg-sky-500 border border-sky-500 hover:bg-transparent rounded font-semibold shadow-lg' >Get Started</button>
            </div>
        </nav>
    );
};

export default HeadBar;