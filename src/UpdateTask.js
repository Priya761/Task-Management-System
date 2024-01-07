import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

function UpdateTask() {
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [id] = useParams();  // use parameter from the http link
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    axios.put('http://localhost:8080/update/'+id, {taskName, taskDescription})
    .then(res => {
        console.log(res);
        navigate('/');
    }).catch(err => console.log(err));
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className="w-50 bg-white rounded p-3">      
            <form onSubmit={handleSubmit}>
                <h2>Update Student</h2>
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
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateTask
