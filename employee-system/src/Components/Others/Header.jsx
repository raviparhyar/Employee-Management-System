import React from 'react'

const Header = () => {
  return (
    
        <div className='flex items-end justify-between  rounded'>
            <h2 className='text-xl font-medium'>Hello!  <br /><span className='text-2xl font-semibold'>Ravi Parhyar👋</span></h2>
            <button className='bg-red-600 text-sm py-1 px-3 rounded-lg'>Log Out</button>
        </div>
  )
}

export default Header 