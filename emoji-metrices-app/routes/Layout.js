import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <div className='mb-12 flex justify-between p-3'>
        <h1 className='text-3xl font-semibold'>EmojiHub Metrics</h1>
        <div className='flex gap-x-5'>
          <NavLink className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')} to="/">Emoji List</NavLink>
          {/* Include other navigation links if necessary */}
        </div>
      </div>
      <Outlet />
    </>
  );
};
