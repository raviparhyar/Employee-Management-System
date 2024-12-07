import React from 'react'

const TaskList = () => {
  return (
    <div id= "tasklist" className='h-[55%]  overflow-x-auto flex-nowrap w-full  py-7 mt-14 rounded flex items-center justify-start gap-6'>
        <div className='flex-shrink-0 bg-yellow-500 h-full w-[300px] rounded-xl p-4'>
          <div className='flex items-center justify-between p-4'>
            <h3 className='bg-red-700 rounded font-semibold px-2'>High</h3>
            <h4 className='font-medium'>25 Dec 2024</h4>
          </div>
          <h1 className='font-bold mt-5 text-2xl'>Make a Youtube Video</h1>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi esse libero provident at eveniet illo accusantium iste distinctio itaque beatae.</p>
        </div>

        <div className='flex-shrink-0 bg-red-500 h-full w-[300px] rounded-xl p-4'>
        <div className='flex items-center justify-between p-4'>
            <h3 className='bg-red-700 rounded font-semibold px-2'>High</h3>
            <h4 className='font-medium'>25 Dec 2024</h4>
          </div>
          <h1 className='font-bold mt-5 text-2xl'>Make a Youtube Video</h1>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi esse libero provident at eveniet illo accusantium iste distinctio itaque beatae.</p>
        </div>

        <div className='flex-shrink-0 bg-green-500 p-4 h-full w-[300px] rounded-xl'>
        <div className='flex items-center justify-between p-4'>
            <h3 className='bg-red-700 rounded font-semibold px-2'>High</h3>
            <h4 className='font-medium'>25 Dec 2024</h4>
          </div>
          <h1 className='font-bold mt-5 text-2xl'>Make a Youtube Video</h1>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi esse libero provident at eveniet illo accusantium iste distinctio itaque beatae.</p>
        </div>

        <div className='flex-shrink-0 bg-blue-500 p-4 h-full w-[300px] rounded-xl'>
        <div className='flex items-center justify-between p-4'>
            <h3 className='bg-red-700 rounded font-semibold px-2'>High</h3>
            <h4 className='font-medium'>25 Dec 2024</h4>
          </div>
          <h1 className='font-bold mt-5 text-2xl'>Make a Youtube Video</h1>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi esse libero provident at eveniet illo accusantium iste distinctio itaque beatae.</p>
        </div>

        <div className='flex-shrink-0 bg-gray-500 p-4 h-full w-[300px] rounded-xl'>
        <div className='flex items-center justify-between p-4'>
            <h3 className='bg-red-700 rounded font-semibold px-2'>High</h3>
            <h4 className='font-medium'>25 Dec 2024</h4>
          </div>
          <h1 className='font-bold mt-5 text-2xl'>Make a Youtube Video</h1>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi esse libero provident at eveniet illo accusantium iste distinctio itaque beatae.</p>
        </div>
    </div>
  )}

export default TaskList