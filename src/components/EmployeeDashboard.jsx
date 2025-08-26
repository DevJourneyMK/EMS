import React from 'react'
import Header from '../Header'
import TaskListNumber from './TaskListNumber'
import TaskList from './TaskList'

const EmployeeDashboard = () => {
  return (
    <>

   <div className='p-6 bg-[#1c1a1a] h-screen'>
     <Header/>
     <TaskListNumber/>
     <TaskList/>
   </div>
    
    </>
  )
}

export default EmployeeDashboard