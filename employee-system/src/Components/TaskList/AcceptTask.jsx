import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='flex-shrink-0 bg-yellow-500 h-full w-[300px] rounded-xl p-4'>
          <div className='flex items-center justify-between p-4'>
            <h3 className='bg-red-500 rounded font-semibold px-2'>{data.category}</h3>
            <h4 className='font-medium'>{data.taskDate}</h4>
          </div>
          <h1 className='font-bold mt-5 text-2xl'>{data.taskTitle}</h1>
          <p className='text-sm mt-2'>{data.taskDescription}</p>
          <div className='flex justify-between items-center'>
            <button className='bg-green-500 text-sm py-1 px-2 mt-2 hover:bg-green-700'>Mark as done</button>
            <button className='bg-red-500 text-sm py-1 px-2 mt-2 hover:bg-red-700'>Mark as failed</button>
          </div>
        </div>
  )
}

export default AcceptTask