import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Dropdown from 'react-bootstrap/Dropdown'
import {Link} from 'react-router-dom'

function Tasks() {
  const [student, setStudent] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/')  // when the page loads, axios will get the data from the database and then will the help of useState, the page will get rendered with the data.
    // .then(res => console.log(res))
    .then(res => setStudent(res.data))
    .catch(err => console.log(err));
  }, [])

  const handleDelete = async (id) => {
    try{
      await axios.delete('http:/localhost:8080/tasks/'+id)
      window.location.reload()
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <Link to="/create" className='btn btn-success'>Add +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                  student.map((data, i) => (
                    <tr key={i}>
                      <td>{data.taskName}</td>
                      <td>{data.taskDescription}</td>
                      <td>
                        <Link to={`update/${data.ID}`} className='btn btn-primary'>Update</Link>
                        <button className='btn btn-danger' onClick={e => handleDelete(data.ID)}>Delete</button>
                        <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">Status</Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1" className='btn btn-secondary'>Not Started</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" className='btn btn-warning'>In Progress</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" className='btn btn-success'>Completed</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  ))
                }
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Tasks
