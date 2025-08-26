import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end  justify-between'>
        <h1 className='text-2xl font-medium text-white'>Hello, <br /> <span className='text-4xl font-bold text-red-300'>Mohit👋</span></h1>
        <h2 className='pb-10 text-green-600 font-bold text-3xl'>Welcome to Employee Management System</h2>
        <button className='mb-3 bg-orange-500 rounded font-bold text-white outline-none py-1 px-3 hover:cursor-pointer'>Logout</button>
    </div>
  )
}

export default Header