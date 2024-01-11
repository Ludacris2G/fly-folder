import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full bg-gradient-to-b from-black to-background'>
      <h1 className='text-center'>
        Sky Folder by
        <a
          className='text-green-400 hover:text-blue-600'
          target='_blank'
          href='https://ludacris2g.github.io/'
        >
          {' '}
          Lee
        </a>
      </h1>
    </div>
  );
};

export default Navbar;
