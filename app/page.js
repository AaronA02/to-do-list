'use client'
import React, {useState} from 'react'

const page = () => {

const [desc, setDesc] = useState('');
const [title, setTitle] = useState('');
const [mainTask, setMainTask] = useState([ ]);

const submitHandler = (e) => {
  e.preventDefault();
  setMainTask([...mainTask, {title, desc}])
  setTitle("");
  setDesc("");
  console.log(mainTask)
}

const deleteHandler = (i) => {
  let copyTask = [...mainTask]
  copyTask.splice(i, 1)
  setMainTask(copyTask)
}

let renderTask = <h2>No Task Available</h2>
if(mainTask.length > 0) {
  renderTask = mainTask.map((t, i) => {
    return(
      <li key = {i}className='flex justify-between items-center mb-5'>
        <div className='flex items-center justify-between mb-5 w-2/3'>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h5 className='text-base font-semibold'>{t.desc}</h5>
        </div>
        <button
        onClick={( ) => {
          deleteHandler(i)
        }} 
        className='bg-red-400 text-white border-1 rounded p-2 font-bold'>Remove</button>
      </li>
    )
  })
}
  return (
    <>
    <h1 className='bg-gray-700 text-white p-5 text-5xl text-center'>To-do List</h1>
    <form onSubmit={submitHandler}>
      <input type='text' 
        className='border-zinc-700 border-2 m-5 px-2 py-1'
        placeholder='Enter task here'
        value = {title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}/>

      <input type='text'  
        className='border-zinc-700 border-2 m-5 px-2 py-1'
        placeholder='Enter description here'
        value = {desc}
        onChange={(p) => {
          setDesc(p.target.value);
        }}/>

        <button className = "border-2 border-black bg-slate-700 text-white px-2 py-1 ml-3 rounded">Add Task</button>
    </form>
    <hr></hr>
    <div className='bg-slate-300 p-5'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page
