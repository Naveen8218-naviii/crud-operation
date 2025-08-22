import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './user'
import Createuser from "../src/createuser"
import Updateuser from "../src/updateuser"


const App = () => {
  return (
    <div className='p-0  m-0 bg-blue-200  '>
    
      <BrowserRouter>
      <Routes>
       <Route path='/'  element={<User/>}></Route>
      <Route path='/create'  element={<Createuser/>}></Route>
      <Route path='/update'  element={<Updateuser/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
