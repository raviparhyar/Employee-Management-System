import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex justify-between gap-4 screen mt-10 '>
        <div className='bg-orange-400 w-[45%] py-5 px-6 rounded'>
            <h2 className='text-3xl font-semibold'>1</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='bg-blue-400 w-[45%] py-5 px-6 rounded'>
            <h2 className='text-3xl font-semibold'>3</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='bg-green-400 w-[45%] py-5 px-6 rounded'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>Accept Task</h3>
        </div>
        <div className='bg-purple-400 w-[45%] py-5 px-6 rounded'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers