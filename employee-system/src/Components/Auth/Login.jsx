import React, { useState } from 'react'
export const Login = () => {
let [email, setEmail ] = useState('');
let [password, setPassword] = useState('');

let submitHandler = (e) => {
    e.preventDefault()
    setEmail('');
    setPassword('')
    }
 return (
    <div className='flex h-screen w-screen justify-center items-center'>
        <div className='border-2 rounded-xl border-emerald-800 p-20'>
            <form 
            onSubmit={(e) => {
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>

                <input 
                value={email}
                onChange={(e) =>{
                    setEmail(e.target.value)
                }}
                type="email"  placeholder='Enter your email' 
                className='bg-transparent  text-white outline-none rounded-full border-2 border-emerald-600 text-xl py-3 px-4 placeholder:text-gray-500' required/>
                

                <input 
                value={password}
                onChange={(e) =>{
                    setPassword(e.target.value)
                }}
                type="password"  placeholder='Enter password'
                className='bg-transparent  text-white outline-none rounded-full text-xl border-2 border-emerald-600 py-3 px-4 mt-3 placeholder:text-gray-500'required/>
                

                <button className='bg-emerald-400  outline-none rounded-full border-2  text-white mt-8 border-none text-xl py-2 px-20 '>Log in</button>
            </form>
        </div>
    </div>
  )
}
