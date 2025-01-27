import React, { useContext, useState } from 'react'
import {AuthContext} from "../../Context/AuthProvider"

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

const submitHandler = (e) => {
    e.preventDefault()

    setNewTask({taskTitle, taskDate, taskDescription, category, active:false, newTask:true, completed:false, failed:false})

    const data = userData

    data.forEach(function(elem){
        if(assignTo == elem.firstName){
            elem.tasks.push(newTask)
            elem.taskCounts.newTask = elem.taskCounts.newTask + 1
        }
    })
    setUserData(data)

    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')

}


  return (
    <div className='p-5 bg-[#1c1c1c] mt-4 rounded'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} 
            className='flex items-start w-full  flex-wrap justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-base mb-0.5 text-gray-300'>Task Title</h3>
                        <input
                        value={taskTitle}
                        onChange={(e) => {
                            setTaskTitle(e.target.value)
                        }}
                        className='text-sm py-3 px-4 w-3/4 rounded outline-none bg-transparent border-[1px] border-emerald-700 mb-4' type="text" placeholder='Write task title here' />
                    </div>

                    <div>
                        <h3 className='text-base mb-0.5 text-gray-300'>Date</h3>
                        <input
                        value={taskDate}
                        onChange={(e) => {
                            setTaskDate(e.target.value)
                        }} 
                        className='text-sm py-3 px-4 w-3/4 rounded outline-none bg-transparent border-[1px] border-emerald-700 mb-4' type="date" />
                    </div>

                    <div>
                        <h3 className='text-base mb-0.5 text-gray-300'>Asign To</h3>
                        <input
                        value={assignTo}
                        onChange={(e) => {
                            setAssignTo(e.target.value)
                        }} 
                        className='text-sm py-3 px-4 w-3/4 rounded outline-none bg-transparent border-[1px] border-emerald-700 mb-4' type="text" placeholder='Employee name' />
                    </div>

                    <div>
                        <h3 className='text-base mb-0.5 text-gray-300'>Category</h3>
                        <input 
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value)
                        }}
                        className='text-sm py-3 px-4 w-3/4 rounded outline-none bg-transparent border-[1px] border-emerald-700 mb-4' type="text" placeholder='Design etc' />
                    </div>
                </div>

                <div className='flex flex-col w-2/5 items-start'>
                    <h3 className='text-base mb-0.5 text-gray-300'>Description</h3>
                    <textarea 
                    value={taskDescription}
                    onChange={(e) => {
                        setTaskDescription(e.target.value)
                    }}
                    className='w-full h-44 text-sm py-3 px-4 rounded outline-none bg-transparent border-[1px] border-emerald-700 mb-4' ></textarea>
                    <button className='bg-emerald-500 rounded-3xl text-sm py-2 px-16 text-gray-200 hover:bg-emerald-700 w-full mt-5'>Create task</button>
                </div>

            </form>
        </div>
  )
}

export default CreateTask