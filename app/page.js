'use client'
import React, { useState } from 'react'

const page = () => {
  const [desc, setDesc] = useState('');
  const [title, setTitle] = useState('');
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (title.trim() === '' || desc.trim() === '') {
      alert('Please enter a valid task and description.');
      return;
    }

    setMainTask([...mainTask, { title, desc }]);
    setTitle('');
    setDesc('');
    console.log(mainTask);
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  }

  let renderTask = <h2 className='text-center text-xl'>No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <div key={i} className='flex justify-center items-center mb-2 p-5 bg-white rounded shadow'>
          <div className='flex items-center justify-between w-full'>
            <div className='flex-grow'>
              <h5 className='text-lg font-semibold'>{t.title}</h5>
              <h5 className='text-sm font-semibold'>{t.desc}</h5>
            </div>
            <button
              onClick={() => deleteHandler(i)}
              className='bg-red-400 text-white border-1 rounded p-1 font-bold text-xs'>
              Remove
            </button>
          </div>
        </div>
      )
    })
  }

  return (
    <>
      <h1 className='bg-gray-700 text-white p-5 text-3xl text-center'>To-do List</h1>
      <form onSubmit={submitHandler} className='flex flex-col items-center'>
        <input
          type='text'
          className='border-zinc-700 border-2 m-2 px-2 py-1 w-full'
          placeholder='Enter task here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type='text'
          className='border-zinc-700 border-2 m-2 px-2 py-1 w-full'
          placeholder='Enter description here'
          value={desc}
          onChange={(p) => setDesc(p.target.value)}
        />

        <button className='border-2 border-black bg-slate-700 text-white px-2 py-1 ml-3 rounded'>
          Add Task
        </button>
      </form>
      <hr className='my-5' />
      <div className='bg-slate-300 p-5'>
        <ul>{renderTask}</ul>
      </div>
    </>
  )
}

export default page