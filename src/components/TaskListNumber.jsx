import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='m-10 flex justify-between gap-5 screen'>
        <div className='px-9 py-6 rounded-xl w-[40%] bg-red-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-meduim'>New Task</h3>
        </div>

        <div className='px-9 py-6 rounded-xl w-[40%] bg-blue-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-meduim'>New Task</h3>
        </div>

        <div className='px-9 py-6 rounded-xl w-[40%] bg-green-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-meduim'>New Task</h3>
        </div>

        <div className='px-9 py-6 rounded-xl w-[40%] bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-meduim'>New Task</h3>
        </div>


    </div>
  )
}

export default TaskListNumber