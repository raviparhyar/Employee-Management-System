import React from 'react'

const Header = (props) => {
  
  const LogoutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    // window.location.reload()
  }


  return ( 
        <div className='flex items-end justify-between  rounded'>
            <h2 className='text-xl font-medium'>Hello!  <br /><span className='text-2xl font-semibold'>username👋</span></h2>
            <button onClick={LogoutUser}
            className='bg-red-600 text-sm py-1 px-3 rounded-lg'>Log Out</button>
        </div>
  )
}

export default Header 