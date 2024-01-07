// import Login from './components/account/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Tasks from './Tasks'
import CreateTask from './CreateTask'
import UpdateTask from './UpdateTask'
import Login from './components/account/Login'

function App() {
  return (
    // <div style={{marginTop: 75}}>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/:id' element={<Tasks/>}></Route>                
          <Route path='/create' element={<CreateTask/>}></Route>                
          <Route path='/update/:id' element={<UpdateTask/>}></Route>                
        </Routes>
      </BrowserRouter>
      {/* <Login/> */}
    </div>
  );
}

export default App;
