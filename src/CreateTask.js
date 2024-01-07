import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateTask() {
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    axios.post('http://localhost:8080/create', {taskName, taskDescription})
    .then(res => {
        console.log(res);
        navigate('/');
    }).catch(err => console.log(err));
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className="w-50 bg-white rounded p-3">      
            <form onSubmit={handleSubmit}>
                <h2>Add Student</h2>
                <div className='mb-2'>
                    <label htmlFor="">Task Name</label>
                    <input type="text" placeholder='Enter Task Name' className='form-control'
                    onChange={e => setTaskName(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Task Description</label>
                    <input type="text" placeholder='Enter Task Descriptiom' className='form-control'
                    onChange={e => setTaskDescription(e.target.value)}
                    />
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateTask
